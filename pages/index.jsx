import axios from 'axios';
import { useState, useEffect } from 'react';
import CourseCard from '../components/cards/courseCard';

const Index = ({ courses }) => {
  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>
        Online Education Marketplace
      </h1>
      {/* <p>NextJs</p> */}

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
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
