import React from 'react';
import PlanList from './PlanList';
import plans from './plans';

const createList = (plan) => {
    return (
        <PlanList 
            name={plan.name}
            description={plan.description}
            key={plan.id}
        />
    );
}

export default function PlansScreen() {
    return (
        <div className='plansScreen'>
            {plans.map(createList)}
        </div>
    );
}
