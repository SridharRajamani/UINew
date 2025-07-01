import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../utils/cn";

const buttonBaseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  borderRadius: "1rem",
  fontSize: "1rem",
  fontWeight: 700,
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  transition: "all 0.2s",
  border: "1px solid transparent",
  height: "3rem",
  padding: "0 1.5rem",
  outline: "none",
  cursor: "pointer",
  userSelect: "none",
};

const variantStyles = {
  default: {
    background: "#000",
    color: "#fff",
  },
  destructive: {
    background: "#dc2626",
    color: "#fff",
  },
  outline: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    color: "#222",
    fontWeight: 700,
  },
  secondary: {
    background: "#f3f4f6",
    color: "#111827",
  },
  ghost: {
    background: "transparent",
    color: "#2563eb",
  },
  link: {
    background: "none",
    color: "#2563eb",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    boxShadow: "none",
    border: "none",
    padding: 0,
  },
};

const sizeStyles = {
  default: {
    height: "3rem",
    padding: "0 1.5rem",
    fontSize: "1rem",
  },
  sm: {
    height: "2.5rem",
    borderRadius: "0.5rem",
    padding: "0 1rem",
    fontSize: "0.875rem",
  },
  lg: {
    height: "3.5rem",
    borderRadius: "1rem",
    padding: "0 2rem",
    fontSize: "1.125rem",
  },
  icon: {
    height: "3rem",
    width: "3rem",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const mergedStyle = {
      ...buttonBaseStyle,
      ...(variantStyles[variant] || variantStyles.default),
      ...(sizeStyles[size] || sizeStyles.default),
      ...(disabled
        ? {
            pointerEvents: "none",
            opacity: 0.6,
            background:
              variant === "outline" || variant === "link"
                ? "#f3f4f6"
                : "#e5e7eb",
            color: "#9ca3af",
          }
        : {}),
      ...style,
    };

    // Add hover style for default variant
    const handleMouseOver = (e) => {
      if (variant === "default" && !disabled) {
        e.currentTarget.style.background = "#222";
      }
    };
    const handleMouseOut = (e) => {
      if (variant === "default" && !disabled) {
        e.currentTarget.style.background = "#000";
      }
    };

    return (
      <Comp
        className={cn(className)}
        style={mergedStyle}
        ref={ref}
        disabled={disabled}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
