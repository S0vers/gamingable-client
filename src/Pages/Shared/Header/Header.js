import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/logo/favicon.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blogs</Link></li>
        {user?.uid ?


            <>
                <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                <li className='font-semibold'><Link to='/addservices'>Add Services</Link></li>
                <li className='font-semibold'><button onClick={handleLogOut}>Log Out</button></li>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar h-20 bg-rose-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="w-10 rounded-full">
                    <img src={img} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-rose-600">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;