import { FC } from 'react';

interface ICreateEventProps {
  title: string;
  accessToken: string;
}

export type CreateEventProps = FC<ICreateEventProps>;
