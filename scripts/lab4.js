/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} add 
 * @returns Sum of two numbers or false if add is false
 */
function sumValues(num1, num2, add) {
    if (add) {
        const result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return !add;
    }
}

/**
 * 
 * @param {*} prices 
 * @param {*} discount 
 * @returns An array of each price's new price. If prices array is empty, return false.
 */
function discountPrices(prices, discount) {
    const discounted = []
    const length = prices.length;
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice += prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};