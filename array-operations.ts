// Operations and shortcuts for arrays
export const empty = (providedArray: any[]) => {
    return Array.isArray(providedArray) && providedArray.length;
};

export const unique = (providedArray: any[]) => {
    return [...new Set(providedArray)];
};
