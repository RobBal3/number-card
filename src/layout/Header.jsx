import React from 'react';
import { useStyles } from './headerStyle';
import { mainContext } from '../context/ctx';
import { useContext } from 'react';

const Header = () => {
    const { addCard, sortCards } = useContext(mainContext);
    const classes = useStyles();
    return (
        <header className={classes.headerContainer}>
            <button className={classes.mainBtn} onClick={addCard}>
                Add
            </button>
            <button className={classes.mainBtn} onClick={sortCards}>
                Sort
            </button>
        </header>
    );
};

export default Header;
