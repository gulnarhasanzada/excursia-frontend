import React from "react";
import { Link } from "react-router-dom";

interface MenuItemsProps {
    label: string,
    mode: string,
    type?: "submit" | "reset" | "button" | undefined;
}
const MenuItem: React.FC<MenuItemsProps> = ({ mode, label}) => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      <Link to={mode} className="font-semibold text-gray-900 no-underline">{label}</Link>    
    </div>
  )
};

export default MenuItem;
