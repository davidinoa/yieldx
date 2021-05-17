import React from "react";

function renderStepIcon(
  type: "large" | "small",
  status: "active" | "disabled" | "complete"
) {
  let color = "#015CFF";
  if (status === "disabled") color = "#192B4A";
  if (status === "active") color = "white";
  if (type === "large" && status === "complete")
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <circle
          cx="7.81372"
          cy="7.86328"
          r="7"
          transform="rotate(90 7.81372 7.86328)"
          fill="#03132F"
          stroke={color}
        />
        <circle
          cx="7.81365"
          cy="7.86329"
          r="4.08161"
          transform="rotate(90 7.81365 7.86329)"
          fill={color}
        />
      </svg>
    );
  if (type === "large")
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <circle
          cx="8.81372"
          cy="8.25781"
          r="7.5"
          transform="rotate(90 8.81372 8.25781)"
          fill="#03132F"
          stroke={color}
        />
      </svg>
    );

  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 1 }}
    >
      <circle
        cx="3.81401"
        cy="4.25728"
        r="3.28365"
        transform="rotate(90 3.81401 4.25728)"
        fill={color}
      />
    </svg>
  );
}

export default renderStepIcon;
