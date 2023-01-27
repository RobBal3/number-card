import React, { useContext } from 'react';
import { mainContext } from '../context/ctx';
import { useStyles } from './mainStyle';
import { FaTrash } from 'react-icons/fa';

const Main = () => {
    const { cards, deleteCard } = useContext(mainContext);

    const classes = useStyles();

    return (
        <main className={classes.mainContainer}>
            {cards.map((card) => {
                return (
                    <div className={classes.card}>
                        <div>{card.number}</div>
                        <div
                            className={classes.trash}
                            onClick={() => deleteCard(card.id)}
                        >
                            <FaTrash />
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default Main;
