import { FC } from 'react';

interface ILogoImageProps {
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
}

export type LogoImageProps = FC<ILogoImageProps>;
