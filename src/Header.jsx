import { useNavigate } from 'react-router';
//import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
//import { userActions } from '../_actions';
import './header.css'
//import { EmailAuthCredential } from 'firebase/auth';
import { useAuthValue } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function Header() {
    const { currentUser } = useAuthValue()
    const loggedin = currentUser?.email;
    //const loggedin = currentUser?.emailVerified;
    const navigate = useNavigate();
    const [logg, setLogg] = useState("LOGIN");
    useEffect(() => {
        if (loggedin) setLogg("LOGOUT");
        else setLogg("LOGIN");
    }, [loggedin]);
    const handleLogins = () => {
        if (loggedin)
            {signOut(auth);
            navigate("/");}
        else
            navigate("/login");
    };
    return (

        <div className='header'>
            <div className='header_content'>
                <div >
                    <div>
                        <h2>Yoga App</h2>
                    </div>
                    <div className='nav_btn'>
                        <button className='btn_trans' onClick={() => navigate('/')}>Home</button>
                        <button className='btn_trans' onClick={() => navigate('/profile')}>Dashboard</button>
                        <button className='btn_trans' onClick={handleLogins}>{logg}</button>
                    </div>
                </div>
                <div>
                    <h2>EXPLORE THE YOGA</h2>
                    <p>
                        Explore our Yoga Plan
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;

function Nav() {
    const navigate = useNavigate();
    return (
        <div className='nav_btn'>
            <button className='btn_trans' onClick={() => navigate('/')}>Home</button>
            <button className='btn_trans' onClick={() => navigate('/profile')}>Dashboard</button>
        </div>
    )
}