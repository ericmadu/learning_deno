// Operations and shortcuts for arrays (using pure JS/TS)
export const empty = (providedArray: any[]) => {
    return Array.isArray(providedArray) && providedArray.length;
};

export const groupBy = (providedArray: any[], key: string) => {
    return providedArray.reduce((result: any, element: any) => {
        (result[element[key]] = result[element[key]] || []).push(element);
        return result;
    }, {});
};

export const negate = function (predicate: Function) {
    if (typeof predicate !== 'function') {
        throw new Error("expected a function")
    }
    return function (...args: any) {
        return !predicate.apply(this, args);
    }
}

export const countBy = (providedArray: any[], key: string) => {
    const accumulator: any = {};
    providedArray.forEach((currentValue) => {
        accumulator[currentValue[key]] = (accumulator[currentValue[key]] || 0) + 1;
    });
    return accumulator;
};

export const sortBy = (providedArray: any[], key: string) => {
    return providedArray.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));
};

export const filter = (providedArray: any[], predicate: Function) => {
    let index = -1;
    let resIndex = 0;
    const length = providedArray == null ? 0 : providedArray.length;
    const result = [];

    while (++index < length) {
        const value = providedArray[index];
        if (predicate(value, index, providedArray)) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export const filterObject = (object: any, predicate: Function) => {
    object = Object(object);
    const result: any[] = [];

    Object.keys(object).forEach((key) => {
        const value = object[key];
        if (predicate(value, key, object)) {
            result.push(value);
        }
    });
    return result;
};

export const reject = (providedArray: any[], predicate: Function) => {
    const func = Array.isArray(providedArray) ? filter : filterObject;
    return func(providedArray, negate(predicate));
};

export const unique = (providedArray: any[]) => {
    return [...new Set(providedArray)];
};

export const union = (...arrays: any[]) => {
    return [...new Set(arrays.flat())];
};

export const without = (array: any[], ...toRemove: any) => {
    return array.filter(e => !toRemove.includes(e));
};
