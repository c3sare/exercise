import * as React from "react";
const MenuIcon = (props: React.HTMLAttributes<HTMLOrSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={21}
    fill="none"
    {...props}
  >
    <g fill="#172B4D">
      <path d="M.75 0h25v3.5h-25V0ZM.75 8.75h25v3.5h-25v-3.5ZM.75 17.5h25V21h-25v-3.5Z" />
    </g>
  </svg>
);
export default MenuIcon;
