import { FC } from 'react';

interface ICreateFreebookProps {
  title: string;
  accessToken: string;
}

export type CreateFreebookProps = FC<ICreateFreebookProps>;
