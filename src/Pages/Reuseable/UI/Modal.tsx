import ReactDom from "react-dom";

interface CustomProps {
  open?: boolean;
  children?: any;
}

const Modal: React.FC<CustomProps> = ({ open, children }) => {
  if (open) {
    document.body.classList.add("body-active-modal");
  } else {
    document.body.classList.remove("body-active-modal");
  }

  if (!open) return null;
  return ReactDom.createPortal(
    <>{children}</>,
    document.getElementById("portal")
  );
};

export default Modal;
