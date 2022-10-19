import { FC } from 'react';

interface IUpdateArticleFormProps {
  id: string;
  accessToken: string;
}

export type UpdateArticleFormProps = FC<IUpdateArticleFormProps>;
