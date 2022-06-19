import { Button, Progress, Tooltip } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadBtnText,
  handleVideo,
  progress,
  handleVideoRemove,
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
          placeholder='Content'
        />

        <div className='d-flex justify-content-center'>
          <label className='btn btn-dark btn-block text-left mt-3'>
            {uploadBtnText}
            <input type='file' accept='video/*' hidden onChange={handleVideo} />
          </label>

          {!uploading && values.video.Location && (
            <Tooltip title='Remove'>
              <span onClick={handleVideoRemove} className='pt-1 pl-3'>
                <CloseCircleFilled
                  style={{
                    fontSize: '20px',
                  }}
                  className='text-danger
                    justify-content-center pt-4 pointer'
                />
              </span>
            </Tooltip>
          )}
        </div>

        {progress > 0 && (
          <Progress
            className='d-flex justify-content-center pt-2'
            percent={progress}
            steps={10}
          />
        )}

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
