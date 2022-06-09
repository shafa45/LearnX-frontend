import { useState, useEffect } from 'react';
import axios from 'axios';
import InstructorRoute from '../../../components/routes/instructorRoute';
import CourseCreateForm from '../../../components/forms/CourseCreateFrom';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';

const CourseCreate = () => {
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
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState('');
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

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

  const handleImageRemove = async () => {
    // console.log('Remove Image');
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
      const { data } = await axios.post('/api/course', {
        ...values,
        image,
      });

      toast.success('Great! Now you can start adding lessons.');
      router.push('/instructor');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <InstructorRoute>
      <h1 className='jumbotron text-center square'>Create Course</h1>
      <div className='pt-3 pb-3'>
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          handleImageRemove={handleImageRemove}
        />
      </div>
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <pre>{JSON.stringify(image, null, 4)}</pre>
    </InstructorRoute>
  );
};

export default CourseCreate;
