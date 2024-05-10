import HashLoader from "react-spinners/HashLoader";

const PageLoading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[rgb(247,250,252)]">
      <HashLoader color="#258D60" />
    </div>
  );
};

export default PageLoading;
