// getTitle.test.ts
import { getTitle } from '../../helpers/getTitle'; // Ajusta la ruta según la ubicación de tu archivo

describe('getTitle', () => {
    it('returns the correct title for "today"', () => {
        const result = getTitle('today');
        expect(result).toBe('Total de ventas de hoy');
    });

    it('returns the correct title for "week"', () => {
        const result = getTitle('week');
        expect(result).toBe('Total de ventas de la semana');
    });

    it('returns the correct title for "month"', () => {
        const result = getTitle('month');
        expect(result).toBe('Total de ventas de septiembre');
    });

    it('returns the default title for an unknown filter', () => {
        const result = getTitle('unknown');
        expect(result).toBe('Total de ventas');
    });

    it('returns the default title when no filter is provided', () => {
        const result = getTitle(undefined);
        expect(result).toBe('Total de ventas');
    });
});
