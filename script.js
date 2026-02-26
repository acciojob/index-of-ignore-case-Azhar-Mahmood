function indexOfIgnoreCase(str: string, subStr: string): number {
    // If subStr is empty, return 0 (same as default indexOf behavior)
    if (subStr.length === 0) return 0;

    // If str is empty but subStr is not, return -1
    if (str.length === 0) return -1;

    // Convert both to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    return lowerStr.indexOf(lowerSubStr);

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
