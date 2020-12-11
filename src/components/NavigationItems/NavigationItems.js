import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem  link="/" exact>Main</NavigationItem>
        <NavigationItem link="/search" >Search the track</NavigationItem>
    </ul>
);

export default navigationItems;