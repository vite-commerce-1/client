interface IProps {
  title: string;
}

const TextHeaderSection = ({ title }: IProps) => {
  return (
    <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
      {title}
    </h1>
  );
};

export default TextHeaderSection;
