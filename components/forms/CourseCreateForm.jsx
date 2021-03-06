import { Avatar, Button, Select, Badge } from 'antd';

const { Option } = Select;

const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
  preview,
  uploadButtonText,
  handleImageRemove,
  editPage = false,
}) => {
  const children = [];
  for (let i = 9.99; i <= 100.99; i++) {
    children.push(<Option key={i.toFixed(2)}>{i.toFixed(2)}</Option>);
  }

  return (
    <>
      {values && (
        <form onSubmit={handleSubmit}>
          <div className='form-group pt-3'>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Name'
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
              placeholder='Description'
              onChange={handleChange}
            ></textarea>
          </div>

          <div className='form-row d-flex gap-3 pt-3'>
            <div className='col-md-8'>
              <div className='form-group'>
                <Select
                  style={{ width: '100%' }}
                  size='large'
                  value={values.paid}
                  onChange={(e) =>
                    setValues({ ...values, paid: e, price: e ? '9.99' : '0' })
                  }
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>
              </div>
            </div>
            <div className='col-md-3'>
              {values.paid && (
                <div className='form-group'>
                  <Select
                    defaultValue={9.99}
                    style={{ width: '100%' }}
                    size='large'
                    value={values.price}
                    onChange={(e) => setValues({ ...values, price: e })}
                    tokenSeparators={[',']}
                  >
                    {children}
                  </Select>
                </div>
              )}
            </div>
          </div>

          <div className='form-group pt-3'>
            <input
              type='text'
              name='category'
              className='form-control'
              placeholder='Category'
              value={values.category}
              onChange={handleChange}
            />
          </div>

          <div className='form-row pt-3 d-flex'>
            <div className='col'>
              <div className='form-group'>
                <label className='btn btn-outline-secondary btn-block text-left w-100'>
                  {uploadButtonText}
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

            {preview ? (
              <div className='col'>
                <Badge
                  count='X'
                  onClick={handleImageRemove}
                  className='pointer'
                >
                  <Avatar width={200} src={preview} />
                </Badge>
              </div>
            ) : (
              <div className='col'></div>
            )}

            {editPage && values.image && (
              <Avatar width={200} src={values.image.Location} />
            )}
          </div>

          <div className='row pt-3'>
            <div className='col'>
              <Button
                onClick={handleSubmit}
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
      )}
    </>
  );
};

export default CourseCreateForm;
