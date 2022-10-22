import { FC } from 'react';

interface IUpdateEventProps {
  id: string;
  title: string;
  accessToken: string;
}

export type UpdateEventProps = FC<IUpdateEventProps>;
