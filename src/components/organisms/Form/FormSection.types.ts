import { FC, ReactNode } from 'react';

interface IFormSectionProps {
  title: string;
  form: ReactNode;
}

export type FormSectionProps = FC<IFormSectionProps>;
