import img1 from '../images/Dynamotion_Images-01.png'
import img2 from '../images/Dynamotion_Images-02.png'
import img3 from '../images/Dynamotion_Images-03.png'
import img4 from '../images/Dynamotion_Images-04.png'
import img5 from '../images/Dynamotion_Images-05.png'
import img6 from '../images/Dynamotion_Images-06.png'
import img7 from '../images/Dynamotion_Images-07.png'
import img8 from '../images/Dynamotion_Images-08.png'

const Robots = () => {
    return (
        <div className="robotos" id='Robots'>
            {/* <p className="title">
                Free Your Workforce <br />
                and Let Robots Do It
            </p>
            <p className="subtitle">
                With GrayMatter Robotics’ proprietary GMR-AI™ rapidly automate your high-mix, high-variability manufacturing surface finishing needs.
            </p>
            <div className="box">
                <ul>
                    <li>
                        <i class="fa-solid fa-brain"></i>
                        <p>Autonomous <br /> Operation</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-hand-lizard"></i>
                        <p>Superhuman <br /> Performance</p>
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <p>24/7 Support</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-chart-line"></i>
                        <p>Instant ROI</p>
                    </li>
                </ul>
            </div> */}
            <div className="cards">
                <div>
                    <img src={img1} alt="img" />

                </div>
                <div>
                    <img src={img2} alt="img" />

                </div>
                <div>
                    <img src={img3} alt="img" />

                </div>
                <div>
                    <img src={img4} alt="img" />

                </div>
            </div>
            <div className="cards">
                <div>
                    <img src={img5} alt="img" />

                </div>
                <div>
                    <img src={img6} alt="img" />

                </div>
                <div>
                    <img src={img7} alt="img" />

                </div>
                <div>
                    <img src={img8} alt="img" />

                </div>
            </div>
            {/* <div className='box2'>
                <div>
                    <p>Explore all of our automated surface treatment solutions</p>
                </div>
                <div>
                    <button>
                        Go <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

            </div> */}
        </div>
    )
}

export default Robots