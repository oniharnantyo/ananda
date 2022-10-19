import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { UploadFieldProps } from './UploadField.types';

const UploadField: UploadFieldProps = ({ imagePreview, handleChange, handleDelete }) => {
  const placeholderStyle = {
    height: '200px',
    backgroundImage: `url(${imagePreview})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
  };

  return (
    <>
      <label htmlFor="upload-button">
        <div className="relative">
          <div
            className="grid cursor-pointer place-items-center border-dashed border-gray-300"
            style={placeholderStyle}
          >
            {!imagePreview ? 'No Image Selected' : ''}
          </div>
          <div className="absolute bottom-4 right-4">
            <Button type="primary" icon={<DeleteOutlined />} danger onClick={handleDelete} />
          </div>
        </div>
      </label>
      <input
        type="file"
        id="upload-button"
        name="image"
        style={{ display: 'none' }}
        onChange={handleChange}
        accept={'image/*'}
      />
    </>
  );
};

export default UploadField;
