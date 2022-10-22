import { FC } from 'react';

interface IUploadFieldProps {
  imagePreview: string;
  handleChange: (e: any) => void;
  handleDelete: () => void;
}

export type UploadFieldProps = FC<IUploadFieldProps>;
