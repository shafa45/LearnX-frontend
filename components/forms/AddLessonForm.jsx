import { Button } from 'antd';

const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadBtnText,
  handleVideo,
}) => {
  return (
    <div className='container pt-3 '>
      <form onSubmit={handleAddLesson}>
        <input
          type='text'
          className='form-control square'
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          autoFocus
          required
          placeholder='Title'
        />

        <textarea
          className='form-control mt-3'
          cols='7'
          rows='7'
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          value={values.content}
        />

        <label className='btn btn-dark btn-block text-left mt-3'>
          {uploadBtnText}
          <input type='file' accept='video/*' hidden onChange={handleVideo} />
        </label>

        <Button
          onClick={handleAddLesson}
          className='col mt-3'
          size='large'
          type='primary'
          loading={uploading}
          shape='round'
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddLessonForm;
