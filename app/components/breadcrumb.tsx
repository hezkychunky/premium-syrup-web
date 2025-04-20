import { NavLink } from "react-router";

interface BreadcrumbProps {
  prefix: string;
  param1?: string | undefined;
  param2?: string | undefined;
}

const Breadcrumb = ({ prefix, param1, param2 }: BreadcrumbProps) => {
  return (
    <div className="text-sm sm:text-lg">
      <NavLink to={`/${prefix}`} className="hover:font-semibold" end>
        {prefix.toUpperCase()}
      </NavLink>{" "}
      /{" "}
      <NavLink
        to={`/${prefix}/${param1}`}
        className={({ isActive }) =>
          isActive ? "active-light" : "hover:font-semibold"
        }
        end
      >
        {param1?.toUpperCase()}
      </NavLink>{" "}
      {param2 && <span>/ </span>}
      {param2 && (
        <NavLink
          to={`/${prefix}/${param1}/${param2}`}
          className={({ isActive }) => (isActive ? "active-light" : "")}
          end
        >
          {param2?.toUpperCase()}
        </NavLink>
      )}
    </div>
  );
};

export default Breadcrumb;
