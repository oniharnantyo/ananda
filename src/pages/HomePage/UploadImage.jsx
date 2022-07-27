import { Space, Col, Row, Typography,Modal, Input, DatePicker, message, Upload } from "antd";
import { format, intervalToDuration } from "date-fns";
import { InboxOutlined, PlusOutlined } from '@ant-design/icons'
import { id } from 'date-fns/locale';
import { useState, useEffect } from "react";
import moment from 'moment'
import styled from 'styled-components'

const CustomUpload = styled(Upload)`
div.ant-upload{
    width: 100%;
}
.ant-upload-list-item{
    width: 200%;
}
`

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

export const UploadImage = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://media.tenor.com/images/cc08ed2e7adedd03210a3738c9e00df3/tenor.gif',
      },
    ]);

    const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div style={{
        width:'230',
      }}>
      <PlusOutlined />
      <div>
        Upload
      </div>
    </div>
  );

    return (
        <>
        <CustomUpload
        multiple={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        style={{width:200}}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </CustomUpload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel} style={{top:20}}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
      </>
    );
};
