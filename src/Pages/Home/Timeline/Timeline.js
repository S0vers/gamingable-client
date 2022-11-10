import React from 'react';

const Timeline = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">Timeline</h1>
            <ul className="steps steps-vertical lg:steps-horizontal ">
                <li data-content=" " className="step text-center step-secondary text-red-600 text-bold"><div>
                    <p>Release monthly Vlog</p>
                    <small>11/01/2022</small>
                </div></li>
                <li data-content=" " className="step step-secondary text-red-600 text-bold"><div>
                    <p>30 Million Sub celebration</p>
                    <small className=''>11/10/2022</small>
                </div></li>
                <li data-content=" " className="step text-red-600 text-bold"><div>
                    <p>LiveStream</p>
                    <small>11/11/2022</small>
                </div></li>
                <li data-content=" " className="step text-red-600 text-bold"><div>
                    <p>Client Meeting</p>
                    <small>11/15/2022</small>
                </div></li>
            </ul>
        </div>
    );
};

export default Timeline;