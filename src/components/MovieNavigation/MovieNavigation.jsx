import { NavLink } from "react-router-dom";
import css from "./MovieNavigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieNavigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="cast" className={buildLinkClass}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={buildLinkClass}>
        Reviews
      </NavLink>
    </nav>
  );
};

export default MovieNavigation;