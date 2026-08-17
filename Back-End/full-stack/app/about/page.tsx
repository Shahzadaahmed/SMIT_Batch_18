import React from 'react';
import Image from 'next/image';
import AppleImg from "@/public/assets/images/apple.webp";

const AboutScreen = () => {
  return (
    <div>
      <h1> About Screen! </h1>
      <Image
        alt='Apple'
        height={200}
        width={200}
        src={AppleImg}
        priority={true}
      />
    </div>
  );
};

export default AboutScreen;