import React from 'react';
import classes from './buildControl.css';

const buidControl  = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buidControl;