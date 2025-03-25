import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';

type ExpandableNavItemProps = {
  drawer: string;
  children: { title: string, to: string }[];
};

export default function ExpandableNavItem({ drawer, children }: ExpandableNavItemProps) {
  const pageLocation = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const active = pageLocation.pathname.startsWith('/' + drawer.replace(/\s/, '-'))
    ? 'active'
    : '';

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={active}
      >
        {isOpen ? '-' : '+'} {drawer.toUpperCase()}
      </button>
      <div className={`flex flex-col overflow-hidden expandable-children ${isOpen ? 'open' : 'close'}`}>
        {
          children.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) => (isActive ? "active py-1" : "py-1")}
              viewTransition
            >
              {item.title.toUpperCase()}
            </NavLink>
          ))
        }
      </div>
    </>
  );
}
