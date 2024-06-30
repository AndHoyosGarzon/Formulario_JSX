import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  children: ReactNode;
  name: string;
};

function Input({ children, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type="text"
        className="form-control"
        id={name}
      />
      {error?.message && <div className="text-danger fw-bolder">{error?.message}</div>}
    </div>
  );
}

export default Input;
