import { Button, Progress, Switch } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import ReactPlayer from 'react-player';

const UpdateLessonForm = ({
  current,
  setCurrent,
  handleUpdateLesson,
  uploading,
  uploadVideoBtnText,
  handleVideo,
  progress,
}) => {
  return (
    <div className='container pt-3 '>
      {/* {JSON.stringify(current, null, 4)} */}
      <form onSubmit={handleUpdateLesson}>
        <input
          type='text'
          className='form-control square'
          onChange={(e) => setCurrent({ ...current, title: e.target.value })}
          value={current.title}
          autoFocus
          required
        />

        <textarea
          className='form-control mt-3'
          cols='7'
          rows='7'
          onChange={(e) => setCurrent({ ...current, content: e.target.value })}
          value={current.content}
        />

        <div className='d-flex justify-content-center flex-column '>
          {!uploading && current.video && current.video.Location && (
            <div className='pt-2 d-flex justify-content-center'>
              {/* show video player on react player */}
              <ReactPlayer
                url={current.video.Location}
                width='100%'
                height='100%'
                controls={true}
              />
            </div>
          )}

          <label className='btn btn-dark btn-block text-left mt-3'>
            {uploadVideoBtnText}
            <input type='file' accept='video/*' hidden onChange={handleVideo} />
          </label>
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
          <Switch
            className='float-right mt-2'
            disabled={uploading}
            defaultChecked={current.free_preview}
            name='free_preview'
            onChange={(e) => setCurrent({ ...current, free_preview: e })}
          />
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
