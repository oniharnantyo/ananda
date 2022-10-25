import { message } from 'antd';

const ErrorMessage = (err: unknown) => {
  let errorMessage = '';

  if (err instanceof Error) {
    errorMessage = err.message;
  }

  return message.error(errorMessage);
};

export default ErrorMessage;
