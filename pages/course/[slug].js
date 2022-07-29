import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SingleCourseJumbotron from '../../components/cards/SingleCourseJumbotron';
import PreviewModal from '../../components/modal/PreviewModal';
PreviewModal;

const SingleCourse = ({ course }) => {
  // state
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState('');

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      {/* <pre>{JSON.stringify(course,null,4)}</pre> */}

      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />

     { showModal &&  <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />
    }
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
