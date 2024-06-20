import React from "react";

const Interface = () => {
  interface name {
    name: string;
    age: number;
  }
  const name: name = {
    name: "Archit",
    age: 2,
  };
  interface car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
    features: string[];
  }
  const car: car = {
    make: "xyz",
    model: "xyz",
    year: 2023,
    isElectric: true,
    features: ["xyz", "xyz"],
  };
  return (
    <div>
      {name.name}
      {car.model}
    </div>
  );
};

export default Interface;
