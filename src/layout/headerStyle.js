import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        borderBottom: '1px solid #333',
    },
    mainBtn: {
        fontSize: '1.2rem',
        width: '150px',
        height: '60%',
        cursor: 'pointer',
        marginLeft: '1rem',
        borderRadius: '7px',
        background: '#cac9cb',
    },
});
