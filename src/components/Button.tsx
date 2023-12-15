import "./button.css";
type paramsT = {
  text: string;
  clase: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (params: paramsT) => {
  const { text, clase, handleClick } = params;
  return <button className={clase} onClick={handleClick}>{text}</button>;
};
