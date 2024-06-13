import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount, locked }) {
  const handleClick = (e) => {
    setCount((prev) => {
      if (type === "plus") {
        return prev >= 5 ? 5 : prev + 1;
      }

      return prev <= 0 ? 0 : prev - 1;
    });

    e.currentTarget.blur();
  };

  return (
    <button
      disabled={locked}
      className="count-btn"
      onClick={handleClick}>
      {type === "plus" ? <PlusIcon className="count-btn-icon" /> : <MinusIcon className="count-btn-icon" />}
    </button>
  );
}

export default CountButton;
