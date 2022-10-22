import { FC } from 'react';


interface IUpdateFreebookProps {
  id: string;
  title: string;
  accessToken: string;
}

export type UpdateFreebookProps = FC<IUpdateFreebookProps>;