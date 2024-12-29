import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onButtonClicked: (command: string) => void;
}

const Alert = (prop: Props) => {
  return (
    <>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        {prop.children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => prop.onButtonClicked("close")}
        ></button>
      </div>
    </>
  );
};

export default Alert;
