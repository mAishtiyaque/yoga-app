import './HomePage.css'

function HomePage() {
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
                <img src="https://drive.google.com/uc?export=view&id=1wG0KGh3nRJ3k1B1pKybmxEdQpO2Lx5cT" alt="side yoga"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage
//https://drive.google.com/file/d/1wG0KGh3nRJ3k1B1pKybmxEdQpO2Lx5cT/view?usp=sharing