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
        </div>
    )
}

export default Robots