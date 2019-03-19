import React from 'react';
import classes from './buildControls.css';
import BuildControl from './BuildControl/buildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]

const buidControls  = (props)=>(
    <div className = {classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
                remove={()=>props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />))}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.ordered}>Order Now</button>
    </div>
);

export default buidControls;