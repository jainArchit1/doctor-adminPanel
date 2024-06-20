const generics = () => {
  function identity<T>(numbers: T): T {
    console.log(numbers);
    return numbers;
  }
  // function findItem<T>(array: T[], numbers: T): number {

  // }
  function findItem<T>(array: T[], item: T): boolean {
    return array.includes(item);
  }
  const array: number[] = [1, 2, 3, 45];
  const item: number = 3;
  findItem(array, item);

  interface Book {
    title: string;

    auther: string;
    year: number;
    genre?: string;
  }

  return <div>{identity<number>(22)}</div>;
};

export default generics;
