import * as React from "react"
import { cn } from "../../utils/cn"

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  fontSize: "1rem",
  outline: "none",
  background: "#fff",
  color: "#222",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
  marginTop: "4px",
  marginBottom: "4px",
};

const Input = React.forwardRef(({ className, style, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(className)}
      style={{ ...inputStyle, ...style }}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input"

export { Input }
