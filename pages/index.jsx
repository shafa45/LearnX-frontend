import axios from 'axios';
import { useState, useEffect } from 'react';

const Index = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get('/api/courses');
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>
        Online Education Marketplace
      </h1>
      {/* <p>NextJs</p> */}

      <div className='container-fuid'>
        <div className='row'>
          {courses.map((course) => (
            <div key={course._id} className='col-md-4'>
              {<pre>{JSON.stringify(course, null, 4)}</pre>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
