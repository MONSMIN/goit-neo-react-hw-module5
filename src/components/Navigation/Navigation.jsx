import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from 'clsx';


const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
}

const Navigation = () => {
	return (
		<nav className={css.nav}>
			<NavLink  to='/' className={buildActiveClass}>
				Home
			</NavLink>
			<NavLink to='/movies' className={buildActiveClass}>
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;