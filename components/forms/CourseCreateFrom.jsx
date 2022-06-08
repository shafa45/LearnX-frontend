import { Button, Select } from 'antd';

const { Option } = Select;

const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
}) => (
  <form onSubmit={handleSubmit}>
    <div className='form-group pt-3'>
      <input
        type='text'
        name='name'
        className='form-control'
        placeholder='name'
        value={values.name}
        onChange={handleChange}
      />
    </div>

    <div className='form-group pt-3'>
      <textarea
        name='description'
        cols='7'
        rows='7'
        value={values.description}
        className='form-control'
        onChange={handleChange}
      ></textarea>
    </div>

    <div className='form-row pt-3'>
      <div className='col'>
        <div className='form-group'>
          <Select
            style={{ width: '100%' }}
            size='large'
            value={values.paid}
            onChange={(e) => setValues({ ...values, paid: !values.paid })}
          >
            <Option value={true}>Paid</Option>
            <Option value={false}>Free</Option>
          </Select>
        </div>
      </div>
    </div>

    <div className='form-row pt-3'>
      <div className='col'>
        <div className='form-group'>
          <label className='btn btn-outline-secondary btn-block text-left'>
            {values.loading ? 'Uploading...' : 'Upload Image'}
            <input
              type='file'
              name='image'
              onChange={handleImage}
              accept='image/*'
              hidden
            />
          </label>
        </div>
      </div>
    </div>

    <div className='row pt-3'>
      <div className='col'>
        <Button
          onClick={{ handleSubmit }}
          disabled={values.loading || values.uploading}
          loading={values.loading}
          type='primary'
          size='large'
          shape='round'
        >
          {values.loading ? 'Saving...' : 'Save & Continue'}
        </Button>
      </div>
    </div>
  </form>
);

export default CourseCreateForm;
