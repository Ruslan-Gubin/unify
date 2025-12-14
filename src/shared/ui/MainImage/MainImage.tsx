import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  classContainer?: string;
  classImage?: string;
};

const MainImage = ({
  src,
  alt,
  priority,
  classImage,
  classContainer,
}: Props) => {
  return (
    <div className={classContainer}>
      <Image
        fill
        className={classImage}
        src={src}
        alt={alt}
        sizes="100%"
        priority={priority}
      />
    </div>
  );
};

export { MainImage };
