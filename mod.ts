// Entrypoint file
import { empty, groupBy, union, unique, without } from './array-operations.ts';

function getHelloWorld(): string {
    return 'Hello World';
}

const _ = {
    empty,
    getHelloWorld,
    groupBy,
    union,
    unique,
    without,
};

export default _;
