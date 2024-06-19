

export const getTitle = (filter: any) => {
    switch (filter) {
        case 'today':
            return 'Total de ventas de hoy';
        case 'week':
            return 'Total de ventas de la semana';
        case 'month':
            return 'Total de ventas de septiembre';
        default:
            return 'Total de ventas'; // Valor por defecto
    }
};