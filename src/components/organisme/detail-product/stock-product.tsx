const StockProduct = ({stock}: {stock: number}) => {
  return (
    <h1 className="font-semibold mt-4 tracking-tight md:col-start-2 md:row-start-4">
      <span> Stock :</span>{" "}
      <span className="text-muted-foreground">{stock}</span>
    </h1>
  );
};

export default StockProduct;
