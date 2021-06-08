// Entrypoint file
import { empty, union, unique } from './array-operations.ts';

function getHelloWorld(): string {
    return 'Hello World';
}

const _ = {
    empty,
    getHelloWorld,
    union,
    unique,
};

export default _;
