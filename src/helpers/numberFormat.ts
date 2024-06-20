

// export function numberFormat(number: number): string {
//     if (typeof number !== 'number' || isNaN(number)) {
//         throw new Error('Invalid number');
//     }

//     let numberStr = number.toString();    
//     let [integerPart, decimalPart] = numberStr.split('.');

//     integerPart = integerPart.replace(/\B(?=(\d{6})+(?!\d))/g, "′");
//     integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, function(match, offset, string) {        
//         return string[offset - 1] === "′" ? match : ".";
//     });

//     numberStr = decimalPart ? integerPart + '.' + decimalPart : integerPart;

//     return "$" + numberStr;
// }


export function numberFormat(number: number): string {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Invalid number');
    }

    let numberStr = number.toString();
    let [integerPart, decimalPart] = numberStr.split('.');

    // Insert thousands separators ('.')
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    numberStr = decimalPart ? integerPart + '.' + decimalPart : integerPart;

    return "$" + numberStr;
}
