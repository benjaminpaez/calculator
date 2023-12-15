import { useState } from "react";
import { Button } from "./Button";
import "./calculator.css";
import { Switch } from "./Switch";

export const App = () => {
  const [data, setData] = useState({ operation: "", result: "" });

  const write = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.currentTarget as HTMLButtonElement).innerText;
    const isOperation =
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%";

    if (data.operation.length >= 10) return;
    if (value === "+/-" && data.operation === "") return;
    if (value === "%" && data.operation.includes("%")) return;

    if (data.operation.includes("Error")) {
      setData({ ...data, operation: value });
    } else if (data.result !== "" && data.operation === "" && isOperation) {
      setData({ ...data, operation: `${data.result}` + value });
    } else if (value === "+/-" && data.operation !== "") {
      if (data.operation.slice(0, 1) === "-") {
        setData({
          ...data,
          operation: `${data.operation.slice(1, data.operation.length)}`,
        });
      } else {
        setData({
          ...data,
          operation: `-${data.operation}`,
        });
      }
    } else {
      setData({
        ...data,
        operation: `${data.operation}` + value,
      });
    }
  };
  const deleteChar = () => {
    setData({
      ...data,
      operation: data.operation.slice(0, data.operation.length - 1),
    });
  };
  const resetAll = () => {
    setData({ operation: "", result: "" });
  };

  const getResult = () => {
    try {
      let result = "";
      if (data.operation.includes("%")) {
        const values = data.operation.split("%");
        result = eval(`${values[1]}*(${values[0]}/100)`);
      } else {
        result = eval(data.operation);
      }
      setData({ ...data, result, operation: "" });
    } catch (error) {
      setData({ ...data, operation: "Error" });
    }
  };
  return (
    <main>
      <Switch />
      <span className="result">{data.result}</span>
      <span className="display">{data.operation}</span>
      <Button text="C" clase="gray" handleClick={resetAll} />
      <Button text="+/-" clase="gray" handleClick={write} />
      <Button text="%" clase="gray" handleClick={write} />
      <Button text="/" clase="operation" handleClick={write} />
      <Button text="7" clase="number" handleClick={write} />
      <Button text="8" clase="number" handleClick={write} />
      <Button text="9" clase="number" handleClick={write} />
      <Button text="*" clase="operation" handleClick={write} />
      <Button text="4" clase="number" handleClick={write} />
      <Button text="5" clase="number" handleClick={write} />
      <Button text="6" clase="number" handleClick={write} />
      <Button text="-" clase="operation" handleClick={write} />
      <Button text="1" clase="number" handleClick={write} />
      <Button text="2" clase="number" handleClick={write} />
      <Button text="3" clase="number" handleClick={write} />
      <Button text="+" clase="operation" handleClick={write} />
      <Button text="." clase="number" handleClick={write} />
      <Button text="0" clase="number" handleClick={write} />
      <Button text="◀" clase="number" handleClick={deleteChar} />
      <Button text="=" clase="operation" handleClick={getResult} />
    </main>
  );
};
