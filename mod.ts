// Entrypoint file
import { empty, union, unique, without } from './array-operations.ts';

function getHelloWorld(): string {
    return 'Hello World';
}

const _ = {
    empty,
    getHelloWorld,
    union,
    unique,
    without,
};

export default _;
