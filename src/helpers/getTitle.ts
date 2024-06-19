

export const getTitle = (filter: any) => {
    switch (filter) {
        case 'today':
            return 'Total de ventas de hoy';
        case 'week':
            return 'Total de ventas de la semana';
        case 'month':
            return 'Total de ventas del mes de septiembre';
        default:
            return 'Total de ventas'; // Valor por defecto
    }
};