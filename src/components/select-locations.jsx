import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MapPin } from "lucide-react";
import { country_list } from "../lib/countries";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../redux/filterSlice";

export function SelectLocations() {
  const location = useSelector((state) => state.filter.location);
  const dispatch = useDispatch();

  return (
    <Select
      defaultValue={location}
      onValueChange={(value) => dispatch(updateLocation(value))}
    >
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-1 font-medium text-muted-foreground">
          <MapPin size={15} />
          <SelectValue placeholder="Filter by Country" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {country_list.map((country, i) => (
            <SelectItem value={country} key={i}>
              {country}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
