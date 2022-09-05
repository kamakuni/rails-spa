import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../store';

function Nav() {

    const dispatch = useAppDispatch()

    const { isSuccess, isAuthenticated } = useAppSelector((state) => state.auth)

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(logout())
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset());
        }
    }, [])

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            {
                isAuthenticated ? <NavLink to="/logout" onClick={(e) => handleLogout(e)}>Logout</NavLink>
                    : <NavLink to="/login">Login</NavLink>
            }
            <NavLink to="/signup">Signup</NavLink>
        </nav>
    )
}

export default Nav;