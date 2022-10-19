import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

const DeleteModal = (onOk: (id: string) => void, onCancel: () => void) => {
  return confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Data will be deleted permanently',
    onOk,
    onCancel,
  });
};

export default DeleteModal;
