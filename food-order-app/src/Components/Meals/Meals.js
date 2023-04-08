import React from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

export default function Meals() {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
}
