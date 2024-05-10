const NoData = ({ children }) => {
  return (
    <div className="my-20 flex flex-col items-center gap-10">
      <img
        src="/no_data.svg"
        alt="No data"
        className="size-1/3 md:size-1/4 lg:size-1/5"
      />
      <span className="text-xl font-medium text-primary">{children}</span>
    </div>
  );
};

export default NoData;
