// components/NavItems.tsx
import React from "react";
import { Link, NavLink } from "react-router"; // <-- fix
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

type Props = {
  handleClick?: () => void; // <-- optional now
};

const NavItems = ({ handleClick }: Props) => {
  const user = {
    name: "Naveen",
    email: "naveen@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };

  const onItemClick = handleClick ?? (() => {}); // safe fallback

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo" onClick={onItemClick}>
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>TourVisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }) => (
                <div
                  className={cn(
                    "group nav-item",
                    isActive && "bg-primary-100 !text-white"
                  )}
                  onClick={onItemClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "group-hover:brightness-0 group-hover:invert size-6", // fixed "sixe-0"
                      isActive && "brightness-0 invert"
                    )}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "David"}
            className="size-8 rounded-full object-cover"
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            type="button"
            onClick={() => console.log("logout")}
            className="cursor-pointer"
            aria-label="Logout"
          >
            <img src="/assets/icons/logout.svg" alt="" className="size-6" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
