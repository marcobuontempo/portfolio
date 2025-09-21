type Props = {
  text: string;
  className?: string;
};

const AsciiText3d = ({ text, className }: Props) => {
  return <h1 className={className}>{text}</h1>;
};

export default AsciiText3d;
