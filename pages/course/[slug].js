import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SingleCourseJumbotron from '../../components/cards/SingleCourseJumbotron';
import PreviewModal from '../../components/modal/PreviewModal';
PreviewModal;
import SingleCourseLessons from '../../components/cards/SingleCourseLessons';
import { Context } from '../../context';

const SingleCourse = ({ course }) => {
  // state
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  // context
  // const  {state} = useContext(Content);
  // const {user} = state;

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();
  const { slug } = router.query;

  const handlePaidEnrollment = () => {
    console.log('handlePaidEnrollment');
  };

  const handleFreeEnrollment = () => {
    console.log('handleFreeEnrollment');
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
