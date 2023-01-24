import React from 'react';
import '../styles/PlanList.css';

const PlanList = (props) => {
    return (
        <div className='plansScreen_plan'>
            <div className='plansScreen_info'>
                <h5>{props.name}</h5>
                <h6>{props.description}</h6>
            </div>
            <button className='plansScreen_subscribeButton'>Subscribe</button>
        </div>
    );
}

export default PlanList;