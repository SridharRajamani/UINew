"use client"

import * as React from "react"

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', height: 20, width: 20 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onCheckedChange?.(e.target.checked)}
        ref={ref}
        className={className}
        style={{
          appearance: 'none',
          width: 22,
          height: 20,
          border: '2px solid #e0e0e0',
          borderRadius: 6,
          background: checked ? '#2563eb' : '#fff',
          transition: 'background 0.2s, border 0.2s',
          display: 'inline-block',
          position: 'relative',
          outline: checked ? '2px solid #2563eb' : 'none',
        }}
        {...props}
      />
      {checked && (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          style={{
            position: 'absolute',
            left: 2,
            top: 2,
            width: 16,
            height: 16,
            pointerEvents: 'none',
          }}
        >
          <polyline points="4,10 8,15 16,5" />
        </svg>
      )}
    </label>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
