import { FC } from 'react';

interface IUploadFieldProps {
  imagePreview: string;
  handleChange: (e) => void;
  handleDelete: () => void;
}

export type UploadFieldProps = FC<IUploadFieldProps>;
