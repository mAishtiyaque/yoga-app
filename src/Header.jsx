import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react'
import './header.css'
import { useAuthValue } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function Header() {
    const { currentUser } = useAuthValue()
    const loggedin = currentUser?.email;
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