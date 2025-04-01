import { useState } from "react";
import { NavLink, useLocation } from "react-router";

type ExpandableNavItemProps = {
  drawer: string;
  children: { title: string; to: string }[];
  onItemClick: () => void;
};

export default function ExpandableNavItem({
  drawer,
  children,
  onItemClick,
}: ExpandableNavItemProps) {
  const pageLocation = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isNavLinkActive = (to: string) => {
    // override NavLink's default active class behavior
    return `py-1 ${pageLocation.pathname === to ? "active" : ""}`;
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"} {drawer.toUpperCase()}
      </button>
      <div
        className={`flex flex-col overflow-hidden expandable-children ${
          isOpen ? "open" : "close"
        }`}
      >
        {children.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            className={() => isNavLinkActive(item.to)}
            onClick={onItemClick}
            viewTransition
          >
            {item.title.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </>
  );
}
