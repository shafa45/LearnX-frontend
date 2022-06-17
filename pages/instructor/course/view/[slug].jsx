import { CheckOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal, Tooltip } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InstructorRoute from '../../../../components/routes/instructorRoute';
import ReactMarkdown from 'react-markdown';
import AddLessonForm from '../../../../components/forms/AddLessonForm';
import { toast } from 'react-toastify';

const CourseView = () => {
  const [course, setCourse] = useState({});
  // for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: '',
    content: '',
    video: {},
  });

  const [uploading, setUploading] = useState(false);
  const [uploadBtnText, setUploadBtnText] = useState('Upload Video');
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  // Function for adding lessons
  const handleAddLesson = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.post(
        `/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      console.log(data);
      setValues({ ...values, title: '', content: '', video: {} });
      setVisible(false);
      setUploadBtnText('Upload video');
      setCourse(data);
      toast.success('Lesson added');
    } catch (err) {
      console.log(err);
      toast.error('Lesson addition failed.');
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadBtnText(file.name);
      setUploading(true);

      const videoData = new FormData();
      videoData.append('video', file);
      // save progressbar and send video as form data to backend
      const { data } = await axios.post(
        `/api/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          onUploadProgress: (e) => {
            setProgress(Math.round((e.loaded * 100) / e.total));
          },
        }
      );
      // once response is received
      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.error('Video upload failed');
    }
  };

  const handleVideoRemove = async () => {
    try {
      // console.log('Handle Video Remove');
      setUploading(true);
      const { data } = await axios.post(
        `/api/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setValues({ ...values, video: {} });
      setUploading(false);
      setUploadBtnText('Upload another video');
    } catch (err) {
      setUploading(false);
      console.log(err);
      toast.error('Video remove failed');
    }
  };

  return (
    <InstructorRoute>
      <div className='container-fluid pt-3'>
        {/* <p>view {slug}</p>
         */}
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
        {course && (
          <div className='container-fluid pt-2'>
            <div className='media pt-2 '>
              <Avatar
                size={80}
                src={course.image ? course.image.Location : '/course.png'}
              />
              <div className='media-body pl-2'>
                <div className='row'>
                  <div className='col '>
                    <h5 className='mt-2 text-primary'> {course.name}</h5>
                    <p style={{ marginTop: '-10px' }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: '-15px', fontSize: '10px' }}>
                      {course.category}
                    </p>
                  </div>
                  <div className='d-flex pt-4'>
                    <Tooltip title='Edit '>
                      <EditOutlined className='h5 pointer text-warning mr-4' />
                    </Tooltip>
                    <Tooltip title='Publish '>
                      <CheckOutlined className='h5 pointer text-danger ' />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className='row'>
              <div className='col'>
                <ReactMarkdown children={course.description} />
              </div>
            </div>

            <div className='row'>
              <Button
                onClick={() => setVisible(true)}
                className='col-md-6 off-set-md-3 text-center'
                type='primary'
                shape='round'
                icon={<UploadOutlined />}
                size='large'
              >
                Add Lesson
              </Button>
            </div>
            <hr />
            <Modal
              title='+ Add Lesson'
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadBtnText={uploadBtnText}
                handleVideo={handleVideo}
                progress={progress}
                handleVideoRemove={handleVideoRemove}
              />
            </Modal>
          </div>
        )}
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
