import karem from "../Video/Dayna motion_Montage.mp4"
const video = () => {
    return (
        <div className='video' id="Video">
            <p className="title">See our Solution in Action</p>
            <video width="750" height="500" controls >
                <source src={karem} type="video/mp4" />
            </video>
        </div>
    )
}

export default video