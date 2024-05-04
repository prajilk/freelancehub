import { CarouselPortfolio } from "./portfolio-slider";
import NewPortfolioDrawer from "../drawer/new-portfolio";

const Portfolio = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <NewPortfolioDrawer />
      </div>
      <CarouselPortfolio />
    </>
  );
};

export default Portfolio;
