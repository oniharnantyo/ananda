import { FC } from 'react';

interface ICreateArticleProps {
  title: string;
  accessToken: string;
}

export type CreateArticleProps = FC<ICreateArticleProps>;
