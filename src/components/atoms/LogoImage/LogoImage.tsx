import Image from 'next/image';

const LogoImage = () => {
  return (
    <>
      <Image
        src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp"
        alt="logo vidyasena"
        className="mx-auto flex h-36 rounded-lg"
        height="500"
        width="300"
        max-width={'40%'}
      />
    </>
  );
};

export default LogoImage;
