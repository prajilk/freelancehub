import { CarouselPortfolio } from "./portfolio-slider";
import NewPortfolioDrawer from "../drawer/new-portfolio";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const viewMode = useSelector((state) => state.profileViewMode);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        {!viewMode && <NewPortfolioDrawer />}
      </div>
      <CarouselPortfolio />
    </>
  );
};

export default Portfolio;
