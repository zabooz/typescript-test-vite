export const test = () => {
  const cars: { name: string; model?: string; year: number } = {
    name: "Toyota",
    // model: "Corolla",
    year: 2020,
  };

  console.log(cars);
};

export const test2 = (a: number, b: number = 2, c?: number) => {
  const result = a ** b + (c || 0);

  console.log(result);
};

export const test3 = ({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}) => {
  console.log(dividend / divisor);
};
