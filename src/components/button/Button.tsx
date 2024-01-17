interface Props {
  children: string;
  onClick?: () => void;
  color: "primary" | "secondary" | "danger" | "success";
}

const Button = ({
  children = "Click me",
  onClick,
  color = "primary",
}: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
