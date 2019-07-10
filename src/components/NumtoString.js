function NumtoString(num) {
    if (num < 9999) {
        return num;
    } else if (num < 99999999) {
        return (num / 10000).toFixed(2).toString() + "万";
    } else {
        return (num / 100000000).toFixed(2).toString() + "亿";
    }
}
export {NumtoString}