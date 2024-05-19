import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PortfolioDrawer from "../drawer/portfolio-drawer";
import { usePortfolios } from "../../api/get-portfolios";
import PortfolioCardSkeleton from "../skeletons/portfolio-card";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolio } from "../../redux/portfolioSlice";

export function CarouselPortfolio() {
  const { data, isLoading } = usePortfolios();
  const portfolios = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  React.useEffect(() => {
    data && dispatch(setPortfolio(data));
  }, [data]);

  return (
    <>
      {portfolios?.length > 0 ? (
        <Carousel className="relative mx-auto mt-5 w-full max-w-[18rem] pb-12 md:max-w-2xl lg:max-w-full">
          <CarouselContent className="-ml-3">
            {isLoading ? (
              <>
                <CarouselItem className="pl-3 md:basis-1/3">
                  <PortfolioCardSkeleton />
                </CarouselItem>
                <CarouselItem className="pl-3 md:basis-1/3">
                  <PortfolioCardSkeleton />
                </CarouselItem>
                <CarouselItem className="pl-3 md:basis-1/3">
                  <PortfolioCardSkeleton />
                </CarouselItem>
              </>
            ) : (
              portfolios?.map((portfolio, i) => (
                <CarouselItem key={i} className="pl-3 md:basis-1/3">
                  <PortfolioDrawer portfolio={portfolio} />
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute -bottom-3 left-auto right-14 top-auto" />
          <CarouselNext className="absolute -bottom-3 left-auto right-3 top-auto" />
        </Carousel>
      ) : (
        <div className="flex items-center justify-center py-10">
          <span className="text-sm text-muted-foreground">
            No Portfolio is added!
          </span>
        </div>
      )}
    </>
  );
}
