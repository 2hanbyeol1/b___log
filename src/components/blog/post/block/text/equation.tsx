interface EquationProps {
  formula: string;
}

function Equation({ formula }: EquationProps) {
  const parts = formula.split(/(\^\d+)/);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("^")) {
          return <sup key={i}>{part.slice(1)}</sup>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export default Equation;
