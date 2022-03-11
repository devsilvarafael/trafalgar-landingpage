interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button>{ text }</button>;
};
