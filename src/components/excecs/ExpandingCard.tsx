import { useState } from "react";

interface Props {
  maxLength?: number;
  children: string;
}

const ExpandingCard = ({ maxLength = 100, children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxLength) return <p>{children}</p>;

  const summury = expanded ? children : children.substring(0, maxLength);

  return (
    <p>
      {summury}...{" "}
      <button
        className="btn btn-primary"
        onClick={() => setExpanded(!expanded)}
      >
        Read {expanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandingCard;
