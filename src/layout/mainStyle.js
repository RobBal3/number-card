import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    mainContainer: {
        display: 'Grid',
        height: '100vh',
        overflow: 'scroll',
        gap: '1rem',
        gridTemplateColumns: '200px 200px',
        margin: {
            top: '1.2rem',
            left: '2rem',
        },
    },
    card: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        background: '#a3a0a5',
        fontSize: '3rem',
    },
    trash: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        fontSize: '2rem',
        cursor: 'pointer',
    },
});
