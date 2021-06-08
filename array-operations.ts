// Operations and shortcuts for arrays (using pure JS/TS)
export const empty = (providedArray: any[]) => {
    return Array.isArray(providedArray) && providedArray.length;
};

export const groupBy = (providedArray: any[], key: string) => {
    return providedArray.reduce((result: Object, element: any) => {
        (result[element[key]] = result[element[key]] || []).push(element);
        return result;
    }, {});
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
