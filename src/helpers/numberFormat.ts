export function numberFormat(number: number): string {
    let numberStr = number.toString();    
    let [integerPart, decimalPart] = numberStr.split('.');


    integerPart = integerPart.replace(/\B(?=(\d{6})+(?!\d))/g, "′");    
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, function(match, offset, string) {        
        return string[offset - 1] === "′" ? match : ".";
    });

    numberStr = decimalPart ? integerPart + '.' + decimalPart : integerPart;

 
    return "$" + numberStr;
}