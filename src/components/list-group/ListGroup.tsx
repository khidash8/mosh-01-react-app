import { MouseEvent, useState } from "react";

// ? props
interface Props {
  items: string[];
  heading: string;
  onSelectIndex: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectIndex }: Props) => {
  // ? hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // ? event handlers
  const handleClick = (event: MouseEvent, index: number, item: string) => {
    setSelectedIndex(index);
    onSelectIndex(item);
  };

  // ? map itesms
  const renderedItems = items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={(event) => handleClick(event, index, item)}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>{heading}</h1>
      <p>{items.length ? `No.of items: ${items.length}` : "No items"}</p>
      <ul className="list-group">{renderedItems}</ul>
    </>
  );
};

export default ListGroup;
