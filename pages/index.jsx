import axios from 'axios';
import { useState, useEffect } from 'react';
import CourseCard from '../components/cards/courseCard';

const Index = () => {
  const [courses, setCourses] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get('/api/courses');
      setCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  // console.log(courses);

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>
        Online Education Marketplace
      </h1>
      {/* <p>NextJs</p> */}
      {!isLoading && (
        <div className='container-fuid'>
          <div className='row'>
            {courses.length > 0 &&
              courses.map((course) => (
                <div key={course._id} className='col-md-4'>
                  <CourseCard key={course._id} course={course} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
