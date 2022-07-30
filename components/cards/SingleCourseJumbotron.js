import { currencyFormatter } from '../../utils/helpers';
import { Badge, Modal, Button } from 'antd';
import { LoadingOutlined, SafetyOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  user,
  loading,
  handlePaidEnrollment,
  handleFreeEnrollment,
}) => {
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
        <p>Last updated {new Date(updatedAt).toLocaleDateString()}</p>
        {/* {price} */}
        <h4 className='text-light'>
          {paid
            ? currencyFormatter({ currency: 'USD', amount: price })
            : 'Free'}
        </h4>
      </div>
      <div className='col-md-4'>
        {/* show video preview of course image */}

        {lessons &&
        lessons.length > 0 &&
        lessons[0].video &&
        lessons[0].video.Location ? (
          <div
            onClick={() => {
              setPreview(lessons[0].video.Location);
              setShowModal(!showModal);
            }}
          >
            <ReactPlayer
              className='react-player-div'
              url={lessons[0].video.Location}
              width='100%'
              light={image.Location}
              height='275px'
              //   controls={true}
            />
          </div>
        ) : (
          <img src={image.Location} alt={name} className='img-fluid' />
        )}

        {/* enroll button */}
        {loading ? (
          <div className='flex justify-content-center'>
            <LoadingOutlined className='h1 text-danger' spin />
          </div>
        ) : (
          <Button
            className='mb-3'
            type='danger'
            block
            shape='round'
            icon={<SafetyOutlined />}
            size='large'
            disabled={loading}
            onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
          >
            {user ? 'Enroll' : 'Login to enroll'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SingleCourseJumbotron;
