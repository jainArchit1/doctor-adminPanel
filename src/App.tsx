import Interface from "./Interface";

function App() {
  const name: string = "Archit Jain";
  const myName: string = "Archit Jain";
  const bools: boolean = true;
  const num: number = 12;
  const h1: null = null;
  const numbers: number[] = [1, 2, 3, 5, 6];
  const array: string[] = ["a", "b", "c", "d"];

  const objectName: {
    name: string;
    age: number;
    bool: boolean;
  } = {
    name: "Archit",
    age: 12,
    bool: true,
  };
  const personalDetails: {
    name: string;
    age: number;
    hobbie: string[];
    address: {
      street: string;
      city: string;
    };
    istudent: boolean;
    score: number[];
    extrainfo: null;
  } = {
    name: "Archit",
    age: 1,
    hobbie: ["play"],
    address: {
      street: "xyz",
      city: "xyz",
    },
    istudent: true,
    score: [1, 23, 3],
    extrainfo: null,
  };
  return (
    <div>
      {name}
      {myName}
      {bools}
      {num}
      {h1}
      {numbers}
      {array}
      {objectName.name}
      {personalDetails.age}
      <Interface></Interface>
    </div>
  );
}

export default App;
