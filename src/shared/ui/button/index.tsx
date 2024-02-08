interface ButtonProps {
  icon: React.ReactElement;
  onClick?: () => void;
}

function Button({ icon, onClick }: ButtonProps) {
  return <button onClick={onClick}>{icon}</button>;
}

export { Button };
