import { v4 as uuidv4 } from 'uuid';

function generateRandomNumber() {
    return { id: uuidv4(), number: Math.floor(Math.random() * 100) + 1 };
}

export default generateRandomNumber;
