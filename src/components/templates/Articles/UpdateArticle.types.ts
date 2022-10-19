import { FC } from 'react';


interface IUpdateArticleProps {
  id: string;
  title: string;
  accessToken: string;
}

export type UpdateArticleProps = FC<IUpdateArticleProps>;