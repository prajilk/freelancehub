import * as React from "react";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PortfolioDrawer from "../drawer/portfolio-drawer";

export function CarouselPortfolio() {
  return (
    <Carousel className="relative mx-auto mt-5 w-full max-w-[18rem] pb-12 md:max-w-2xl lg:max-w-full">
      <CarouselContent className="-ml-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-3 md:basis-1/3">
            <PortfolioDrawer />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -bottom-3 left-auto right-14 top-auto" />
      <CarouselNext className="absolute -bottom-3 left-auto right-3 top-auto" />
    </Carousel>
  );
}
