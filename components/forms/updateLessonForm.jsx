import { Button, Progress, Tooltip } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

const UpdateLessonForm = ({
  current,
  setCurrent,
  handleUpdateLesson,
  uploading,
  uploadVideoBtnText,
  handleUpload,
  progress,
}) => {
  return (
    <div className='container pt-3 '>
      <form onSubmit={handleUpdateLesson}>
        <input
          type='text'
          className='form-control square'
          onChange={(e) => setValues({ ...current, title: e.target.value })}
          value={current.title}
          autoFocus
          required
        />

        <textarea
          className='form-control mt-3'
          cols='7'
          rows='7'
          onChange={(e) => setValues({ ...current, content: e.target.value })}
          value={current.content}
        />

        <div className='d-flex justify-content-center'>
          <label className='btn btn-dark btn-block text-left mt-3'>
            {uploadVideoBtnText}
            <input
              type='file'
              accept='video/*'
              hidden
              onChange={handleUpload}
            />
          </label>

          {!uploading && current.video && current.video.Location && (
            <div className='pt-2 d-flex justify-content-center'>
              {/* show video player on react player */}
            </div>
          )}
        </div>

        {progress > 0 && (
          <Progress
            className='d-flex justify-content-center pt-2'
            percent={progress}
            steps={10}
          />
        )}

        <div className='d-flex justify-content-between pt-2'>
          <span className='pt-3 badge'>Preview</span>
        </div>

        <Button
          onClick={handleUpdateLesson}
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

export default UpdateLessonForm;
