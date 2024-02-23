import logo from "../images/dyna-01.png"
const fottre = () => {
    return (
        <div className='fotter' id="fotter">
            <div className="fotterContainer">
                <img src={logo} />
                <span></span>
                <div>
                    Tel: +1 437 326 4334 <br />
                    <a href="tarek@dyna-motion.com">tarek@dyna-motion.com</a> <br />
                    <p className="detalis">Toronto, Ontario</p>
                </div>
            </div>
        </div>
    )
}

export default fottre