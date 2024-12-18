interface IProps {
  title: string;
}

const HeaderSection = ({ title }: IProps) => {
  return (
    <header>
      <h1 className="text-xl md:text-2xl tracking-widest font-semibold font-bebas text-nowrap">
        {title}
      </h1>
    </header>
  );
};

export default HeaderSection;
