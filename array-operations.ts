// Operations and shortcuts for arrays (using pure JS/TS)
export const empty = (providedArray: any[]) => {
    return Array.isArray(providedArray) && providedArray.length;
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
