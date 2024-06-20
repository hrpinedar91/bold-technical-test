
import { numberFormat } from '../../helpers/numberFormat'; 

describe('numberFormat', () => {
    it('formats a number without decimals correctly', () => {
        const result = numberFormat(1234567);
        expect(result).toBe('$1.234.567');
    });

    it('formats a number with decimals correctly', () => {
        const result = numberFormat(1234567.89);
        expect(result).toBe('$1.234.567.89');
    });

    it('formats a large number correctly', () => {
        const result = numberFormat(1234567890);
        expect(result).toBe('$1.234.567.890');
    });

    it('throws an error for NaN', () => {
        expect(() => numberFormat(NaN)).toThrow('Invalid number');
    });

    it('throws an error for non-number input', () => {
        expect(() => numberFormat('1234567' as any)).toThrow('Invalid number');
    });

    it('formats a small number correctly', () => {
        const result = numberFormat(123);
        expect(result).toBe('$123');
    });

    it('formats a number with commas correctly', () => {
        const result = numberFormat(1000000);
        expect(result).toBe('$1.000.000');
    });

    it('formats a number with different decimal lengths correctly', () => {
        const result = numberFormat(1000000.123);
        expect(result).toBe('$1.000.000.123');
    });
});
