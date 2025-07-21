import { FC, ReactNode, memo } from "react";

interface IHeader {
  children: ReactNode;
  image: IImage;
}

interface IImage {
  src: string;
  alt: string;
}

const Header: FC<IHeader> = memo(({ image: { src, alt }, children }) => {
  console.log("RERENDER");

  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
});

export default Header;
