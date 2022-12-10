import './HomePage.css'
import { useAuthValue } from './AuthContext'
import { useNavigate } from 'react-router-dom'


function HomePage() {
    const { currentUser } = useAuthValue()
    const navigate = useNavigate();
    return (
        <div className="center">
            <div className='home_main'>
                <div>
                    <div>
                        <h1 style={{lineHeight: '58px'}}>
                            <span style={{fontWeight:'700', fontSize: '55px',fontStyle: 'normal'}}>
                                <span style={{color: 'rgb(33, 33, 33)'}}>
                                    Welcome To The Best Yoga Classes
                                </span>
                            </span>
                        </h1>
                    </div>
                     <div style={{height: "auto"}}>
                        <h1 style={{lineHeight: '26px'}}>
                            <span style={{fontWeight: '400', fontFamily: 'Roboto', fontSize: '18px', fontStyle: 'normal', color: 'rgb(85, 85, 85)'}}>
                            Meditation brings wisdom, lack of meditation leaves ignorance. Know well what leads you forward and what holds you back, and choose the path that leads to wisdom.
                            </span>
                        </h1>
                    </div>
                 <button>
                        <span>
                            Learn More
                        </span>
                    </button> 
                </div>
                <div className="home_main_img">
                    <img src="right.jpg" alt="" />
                </div>
                {/* <p><strong>Email: </strong>{currentUser?.email}</p>
                <p>
                    <strong>Email verified: </strong>
                    {`${currentUser?.emailVerified}`}
                </p> */}
            </div>
        </div>
    )
}

export default HomePage
