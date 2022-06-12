import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InstructorRoute from '../../../../components/routes/instructorRoute';

const CourseView = () => {
  const [course, setCourse] = useState({});

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  return (
    <InstructorRoute>
      <div className='container-fluid pt-3'>
        {/* <p>view {slug}</p>
         */}
        <pre>{JSON.stringify(course, null, 4)}</pre>
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
