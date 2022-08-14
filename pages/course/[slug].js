import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SingleCourseJumbotron from '../../components/cards/SingleCourseJumbotron';
import PreviewModal from '../../components/modal/PreviewModal';
PreviewModal;
import SingleCourseLessons from '../../components/cards/SingleCourseLessons';
import { Context } from '../../context';
import { toast } from 'react-toastify';
import {loadStripe} from "@stripe/stripe-js"
 
const SingleCourse = ({ course }) => {
  // state
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
  // context
  // const  {state} = useContext(Content);
  // const {user} = state;

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log(data);
    setEnrolled(data);
  };

  const router = useRouter();
  const { slug } = router.query;

  const handlePaidEnrollment = async() => {
    // console.log('handlePaidEnrollment');
    try {
      setLoading(true);
       // check if user is logged in
       if (!user) {
        router.push('/login');
        return;
      }

      // check if already enrolled
      if (enrolled.status) {
        return router.push(`/user/course/${enrolled.course.slug}`);
      }

        const {data} = await axios.post(`/api/paid-enrollment/${course._id}`);
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        stripe.redirectToCheckout({
          sessionId: data
        });
      
    } catch (err) {
      toast.error("enrollment failed please try again");
      console.log(err)
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    // console.log('handleFreeEnrollment');
    e.preventDefault();
    try {
      // check if user is logged in
      if (!user) {
        router.push('/login');
        return;
      }

      // check if already enrolled
      if (enrolled.status) {
        return router.push(`/user/course/${enrolled.course.slug}`);
      }

      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast.success(data.message);
      setLoading(false);
      router.push(`/user/course/${enrolled.course.slug}`);
    } catch (err) {
      toast.error('Enrollment failed. Please try again later.');
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(course,null,4)}</pre> */}

      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        user={user}
        loading={loading}
        handlePaidEnrollment={handlePaidEnrollment}
        handleFreeEnrollment={handleFreeEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
      />

      {showModal && (
        <PreviewModal
          showModal={showModal}
          setShowModal={setShowModal}
          preview={preview}
          setPreview={setPreview}
        />
      )}

      {course.lessons && (
        <SingleCourseLessons
          lessons={course.lessons}
          setPreview={setPreview}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const { data } = await axios.get(`${process.env.API}/course/${slug}`);

  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;
