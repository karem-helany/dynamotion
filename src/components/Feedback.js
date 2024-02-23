import React from 'react'

const Feedback = () => {
    return (
        <div className='feedback' id='Feedback'>
            <p className='title'>
                Our work
            </p>
            <p className='subtitle'>
                Some of our previous projects were:
            </p>
            <div className="boxsCountainer">
                <div className="boxs">
                    <div className="box">
                        <p className='name'>
                            Kasih Food
                        </p>
                        <p className='location'>
                            (Amman, Jordan)
                        </p>
                        <p className='text'>
                            Tetrapack Aseptic TB3 full automation and motion control systems upgrade
                            Quality control vision inspection machine
                            MES system
                        </p>
                    </div>
                    <div className="box">
                        <p className='name'>
                            Dar Al Dawa Development and Investment Company
                        </p>
                        <p className='location'>
                            (Amman, Jordan)
                        </p>
                        <p className='text'>
                            Mediseal Klockner CP200 full upgrade of the automation and motion control system
                        </p>
                    </div>
                    <div className="box">
                        <p className='name'>
                            Hayat Pharmaceutical Industries Co
                        </p>
                        <p className='location'>
                            (Amman, Jordan)
                        </p>
                        <p className='text'>
                            Customized inline checkweigher for technomaco
                            Tablet filling machine
                            Label vision inspection solution for Technomaco labeling machine
                        </p>
                    </div>
                </div>
                <div className="boxs">
                    <div className="box" id='box2'>
                        <p className='name'>
                            Pharma International Co
                        </p>
                        <p className='location'>
                            (Amman, Jordan)
                        </p>
                        <p className='text'>
                            Mediseal Klockner blister inspection machine vision solution
                            Glatt granulation machine full upgrade of the automation and motion control system
                            Glatt tablet coating machine full upgrade of the automation and motion control system
                            Injectables quality control vision inspection machine
                        </p>
                    </div>
                    <div className="box" id='box2'>
                        <p className='name'>
                            MS Pharma
                        </p>
                        <p className='location'>
                            (Amman, Jordan)
                        </p>
                        <p className='text'>
                            Mediseal Klockner CP200 full upgrade of the automation and motion control system
                            FBD machine full upgrade of the automation and motion control system
                            Bottle labeling machine full upgrade of the automation and motion control system
                            IMA machine vision solution for IMA tube filling machine
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback