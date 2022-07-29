import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Badge, Modal } from 'antd';
import { currencyFormatter } from '../../utils/helpers';
import ReactPlayer from 'react-player';

const SingleCourse = ({ course }) => {

// state
const [showModal, setShowModal] = useState(false);
const [preview, setPreview]  = useState("")

  const router = useRouter();
  const { slug } = router.query;

  const {
    name,
    description,
    instructor,
    updatedAt,
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
          <Badge
            count={category}
            style={{ backgroundColor: '#87d068' }}
            className='pb-2 mr-2'
          />
          {/* {author} */}
          <p>Created by {instructor.name}</p>
          {/* {updated at} */}
          <p>Last updated  {new Date(updatedAt).toLocaleDateString()}</p>
          {/* {price} */}
          <h4 className='text-light'>
            {paid
              ? currencyFormatter({ currency: 'USD', amount: price })
              : 'Free'}
          </h4>
        </div>
        <div className='col-md-4'>
          {/* show video preview of course image */}

          {lessons && lessons.length > 0 && lessons[0].video &&lessons[0].video.Location ? (
            <div onClick={() => {
                setPreview(lessons[0].video.Location)
                setShowModal(!showModal)
            }}>
              <ReactPlayer
                className='react-player-div'
                url={lessons[0].video.Location}
                width='100%'
                light={image.Location}
                height='275px'
                controls={true}
              />
            </div>
          ) : (
            <img src={image.Location} alt={name} className='img-fluid' />
          )}

          {/* enroll button */}
        </div>
      </div>

      {showModal ? 
     
      course.lessons[0].video.Location: "don'show" }
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
