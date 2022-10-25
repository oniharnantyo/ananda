import Image from 'next/image';

import logo from '@assets/images/vs-logo.svg';

import { LogoImageProps } from './LogoImage.types';

const LogoImage: LogoImageProps = ({ alt, width, height, isResponsive, className }) => {
  return (
    <Image
      src={logo}
      alt={alt}
      layout={isResponsive ? 'responsive' : 'fixed'}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default LogoImage;
