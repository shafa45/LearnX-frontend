import { Modal } from 'antd';
import ReactPlayer from 'react-player';

const PreviewModal = ({ showModal, setShowModal, preview }) => {
  return (
    <>
      <Modal
        title='Course Preview'
        visible={showModal}
        onCancel={() => setShowModal(!showModal)}
        width={720}
        height={480}
        footer={null}
      >
        <div className='wrapper'>
          <ReactPlayer
            url={preview}
            playing={showModal}
            controls={true}
            width={720}
            height={480}
          />
        </div>
      </Modal>
    </>
  );
};

export default PreviewModal;
