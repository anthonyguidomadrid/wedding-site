export const Hello: React.FC<{ greeting?: string }> = ({ greeting }) => {
  return <h2>{greeting}</h2>;
};
