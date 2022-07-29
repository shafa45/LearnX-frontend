import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Badge } from 'antd';
import { currencyFormatter } from '../../utils/helpers';

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    name,
    description,
    instructor,
    updateAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course;

  return (
    <>
      {/* <pre>{JSON.stringify(course,null,4)}</pre> */}
      <div className='jumbotron bg-primary square'>
        <div className='col-md-8'>
          {/* {title} */}
          <h1 className='text-light font-weight-bold'>{name}</h1>
          {/* {description} */}
          <p className='lead'>
            {description && description.substring(0, 100)}...
          </p>
          {/* {category} */}
          <Badge count={category} style={{backgroundColor: '#87d068'}}
          className='pb-2 mr-2'
          />
          {/* {author} */}
          <p>Created by {instructor.name}</p>
          {/* {updated at} */}
            <p>Updated at {new Date(updateAt).toLocaleDateString()}</p>
          {/* {price} */}
          <h4 className="text-light">
          {
          paid ?
          currencyFormatter({currency: 'USD', amount: price})
        : "Free"
        }
          </h4>
        </div>
        <div className='col-md-4'>
          {/* show video preview of course image */}
          <p>show course image</p>
          <p>show enroll button</p>

          {/* enroll button */}
        </div>
      </div>
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
