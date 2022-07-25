import { useState, useEffect } from 'react';
import axios from 'axios';
import InstructorRoute from '../../../../components/routes/instructorRoute';
import CourseCreateForm from '../../../../components/forms/CourseCreateForm';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Item from 'antd/lib/list/Item';
import { Avatar, List, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import UpdateLessonForm from '../../../../components/forms/updateLessonForm';

const CourseEdit = () => {
  // state

  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '9.99',
    uploading: false,
    paid: true,
    loading: false,
    imagePreview: '',
    category: '',
    lessons: [],
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState('');
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

  // state for lesson update
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({});
  const [uploadVideoBtnText, setVideoUploadBtnText] = useState('Upload Video');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setValues(data);
    if (data && data.image) setImage(data.image);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    // resize
    Resizer.imageFileResizer(file, 720, 500, 'JPEG', 100, 0, async (url) => {
      try {
        let { data } = await axios.post('/api/courses/upload-image', {
          image: url,
        });

        // console.log('Image uploaded', data);
        // set image in state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast.error('Image upload failed. Try Later.');
      }
    });
  };

  const handleImageRemove = async (e) => {
    // console.log('Remove Image');
    e.preventDefault();
    try {
      setValues({ ...values, loading: true });
      const res = await axios.post('/api/courses/remove-image', { image });

      setImage({});
      setPreview('');
      setUploadButtonText('Upload Image');
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast.error('Image remove failed. Try Later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });

      toast.success('Course Updated!');
      // router.push('/instructor');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const handleDrag = (e, index) => {
    // console.log('ON DRAG =>', index);
    e.preventDefault();
    e.dataTransfer.setData('itemIndex', index);
  };

  const handleDrop = async (e, index) => {
    // console.log('ON DROP =>', index);
    e.preventDefault();
    const dragItemIndex = e.dataTransfer.getData('itemIndex');
    const targetItemIndex = index;
    let allLessons = values.lessons;

    let dragItem = allLessons[dragItemIndex]; // get the item being dragged
    allLessons.splice(dragItemIndex, 1); // remove it from the list
    allLessons.splice(targetItemIndex, 0, dragItem); // add it to the new location

    setValues({ ...values, lessons: [...allLessons] });
    // save the newly ordered lesson into DB
    const { data } = await axios.put(`/api/course/${slug}`, {
      ...values,
      image,
    });
    console.log('Lesson REARRANGED RES =>', data);
    toast.success('Lesson rearrange successfully');
  };

  const handleDelete = async (index) => {
    const answer = window.confirm('Are you sure you want to delete?');
    if (!answer) return;

    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    // console.log(removed);
    setValues({ ...values, lessons: allLessons });

    // send request to backend
    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log(`Lesson deleted: `, data);
  };

  /**
   * lesson update functions
   */

  const handleVideo = async (e) => {
    // remove previous video
    e.preventDefault();

    if (current.video && current.video.Location) {
      const res = await axios.post(
        `/api/course/video-remove/${values.instructor._id}`,
        current.video
      );

      console.log('REMOVED => ', res);
    }

    // upload new video
    const file = e.target.files[0];
    setVideoUploadBtnText(file.name);
    setUploading(true);
    // send video as form data
    const videoData = new FormData();
    videoData.append('video', file);
    videoData.append('courseId', values._id);
    // save progress bar and send video data to backend
    const { data } = await axios.post(
      `/api/course/video-upload/${values.instructor._id}`,
      videoData,
      {
        onUploadProgress: (e) =>
          setProgress(Math.round((e.loaded * 100) / e.total)),
      }
    );

    console.log(data);
    setCurrent({ ...current, video: data });
    setUploading(false);
  };

  const handleUpdateLesson = async (e) => {
    // console.log('handle update lesson');
    e.preventDefault();
    const { data } = await axios.put(
      `/api/course/lesson/${slug}/${current._id}`,
      current
    );
    setVideoUploadBtnText('Upload Video');
    setVisible(false);
    toast.success('Lesson updated');
    setCourse(data);
  };

  return (
    <InstructorRoute>
      <h1 className='jumbotron text-center square'>Update Course</h1>
      {/* {JSON.stringify(values)} */}
      {/* {JSON.stringify(slug)} */}
      <div className='pt-3 pb-3'>
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleImageRemove={handleImageRemove}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          editPage={true}
        />
      </div>
      {/* <pre>{JSON.stringify(values, null, 4)}</pre>
      <pre>{JSON.stringify(image, null, 4)}</pre> */}
      <hr />
      <div className='row pb-5'>
        <div className='col lesson-list'>
          <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
          <List
            onDragOver={(e) => e.preventDefault()}
            itemLayout='horizontal'
            dataSource={values && values.lessons}
            renderItem={(item, index) => (
              <Item
                draggable={true}
                onDragStart={(e) => handleDrag(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                actions={[
                  <DeleteOutlined
                    className='text-danger'
                    onClick={() => handleDelete(index)}
                  />,
                ]}
              >
                <Item.Meta
                  onClick={() => {
                    setVisible(true);
                    setCurrent(item);
                  }}
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                ></Item.Meta>
              </Item>
            )}
          ></List>
        </div>
      </div>

      <Modal
        title='Update lesson'
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        Update lesson form
        {/* <pre>{JSON.stringify(current, null, 4)}</pre>
        
        */}
        <UpdateLessonForm
          current={current}
          setCurrent={setCurrent}
          handleVideo={handleVideo}
          handleUpdateLesson={handleUpdateLesson}
          uploadVideoBtnText={uploadVideoBtnText}
          progress={progress}
          uploading={uploading}
        />
      </Modal>
    </InstructorRoute>
  );
};

export default CourseEdit;
