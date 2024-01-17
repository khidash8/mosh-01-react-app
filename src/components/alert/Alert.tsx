interface Props {
  children?: string;
  onClose: () => void;
}

const Alert = ({ children = "Holy guacamole!", onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
