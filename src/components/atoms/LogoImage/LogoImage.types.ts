import { FC } from 'react';

interface ILogoImageProps {
  height?: number;
  width?: number;
  alt?: string;
  isResponsive?: boolean;
  className?: string;
}

export type LogoImageProps = FC<ILogoImageProps>;
