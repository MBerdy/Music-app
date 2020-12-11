import React from 'react'; 

import classes from './ErrorMessage.module.css';

const errorMessage = (props) => (
<div className={classes.ErrorMessage}>Oopps! Something went wrong...</div>
)

export default errorMessage;