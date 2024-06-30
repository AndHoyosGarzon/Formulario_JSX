import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";

type Props = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant} mx-2`}>
      {children}
    </button>
  );
}

export default Button;
