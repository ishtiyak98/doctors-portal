import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Navbar';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <h3 className="text-4xl text-center my-4 font-bold text-secondary">My Dashboard</h3>
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content space-y-4">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to={"/dashboard"}>My Appointment</NavLink></li>
                    <li><NavLink to={"review"}>My Review</NavLink></li>
                    {
                        admin && 
                        <>
                            <li><NavLink to={"add-doctor"}>Add Doctor</NavLink></li>
                            <li><NavLink to={"all-users"}>All Users</NavLink></li>
                        </>
                    }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashBoard;