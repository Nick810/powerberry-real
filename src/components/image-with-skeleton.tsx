'use client';

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from "react-loading-skeleton";

type ImageProps = {
  src: string | StaticImageData;
  alt?: string;
  className: string;
  quality?: number;
}

const ImageWithSkeleton: React.FC<ImageProps> = ({ src, alt, className, quality = 100 }) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <Skeleton
          width="100%"
          height="100%"
          containerClassName="absolute inset-0 w-full h-full"
          style={{ lineHeight: 1 }}
        />
      )}
      <Image
        src={src}
        alt={alt || ''}
        fill
        quality={quality}
        loading="lazy"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`${className} transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
export default ImageWithSkeleton