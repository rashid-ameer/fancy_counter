import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  const keyListener = (e) => {
    if (e.code !== "Space") {
      return;
    }
    setCount((prev) => {
      return prev >= 5 ? 5 : prev + 1;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", keyListener);

    return () => window.removeEventListener("keydown", keyListener);
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton
          type={"minus"}
          setCount={setCount}
          locked={locked}
        />
        <CountButton
          type={"plus"}
          setCount={setCount}
          locked={locked}
        />
      </ButtonContainer>{" "}
    </div>
  );
}

export default Card;
