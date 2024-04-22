const {sumValues, discountPrices} = require('../scripts/lab4');

describe('Testing sumValues...', () => {
    test('Adding 3 + 2...', () => {
        expect(sumValues(3, 2, true)).toBe(5);
    });
    
    test('Testing third paramter', () => {
        expect(sumValues(2, 4, false)).toBe(false);
    });
});

describe('Testing discountPrices...', () => {
    test('Testing 10% off...', () => {
        expect(discountPrices([10, 20, 30], 0.1)).toEqual([9, 18, 27]);
    });

    test('Testing 0% off...', () => {
        expect(discountPrices([10, 20, 30], 0)).toEqual([10, 20, 30]);
    });
    
    test('Testing empty array...', () => {
        expect(discountPrices([], 0.1)).toEqual(false);
    });

    test('Testing wrong type...', () => {
        expect(discountPrices([], 'hello')).toEqual(false)
        expect(discountPrices('i\'m not an array', 0.5)).toEqual(false)
    });
});



