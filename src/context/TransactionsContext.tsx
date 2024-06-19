"use client";

import { useState, createContext, useEffect, useMemo, useCallback } from 'react';
import { transactionsMovements } from '@/config/transactions';

interface Props {
    children: React.ReactNode;
}

interface TransactionItem {
    transaccion: string;
    fecha_y_hora: string;
    metodo_de_pago: string;
    id_transaccion_bold: string;
    cobroDatafono: boolean;
    cobroLinkPagos: boolean;
    monto: {
        total: string;
        deduccion: string;
        comision: string;
    };
}

interface TransactiontypeContext {
    transactions: TransactionItem[];
    filteredTransactions: TransactionItem[];
    totalAmountTransaction: number;
    filter: string;
    setFilter: (filter: string) => void;
    applyFilter: (filter: string) => void;
}

export const transactionsContext = createContext({} as TransactiontypeContext);

const TransactionProvider = ({ children }: Props) => {
    const [transactions, setTransactions] = useState<TransactionItem[]>([]);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        // Agregar las transacciones iniciales al estado
        setTransactions(transactionsMovements);
    }, []);

    const filteredTransactions = useMemo(() => {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const lastYear = today.getFullYear() - 1;
        const startOfSeptemberLastYear = new Date(lastYear, 8, 1);  // September is month 8 (0-indexed)
        const endOfSeptemberLastYear = new Date(lastYear, 8, 30, 23, 59, 59);

        switch (filter) {
            case "today":
                
                return transactions.filter(transaction => {
                    const [day, month, year] = transaction.fecha_y_hora.split(' - ')[0].split('/');
                    const transactionDate = new Date(Number(year), Number(month) - 1, Number(day));
                    return (
                        transactionDate.getDate() === today.getDate() &&
                        transactionDate.getMonth() === today.getMonth() &&
                        transactionDate.getFullYear() === today.getFullYear()
                    );
                });
            case "week":
                return transactions.filter(transaction => {
                    const transactionDate = new Date(transaction.fecha_y_hora.split(' - ')[0].split('/').reverse().join('-'));
                    return transactionDate >= startOfWeek && transactionDate <= new Date();
                });
                case "month":
                    return transactions.filter(transaction => {
                        const [day, month, year] = transaction.fecha_y_hora.split(' - ')[0].split('/');
                        const transactionDate = new Date(Number(year), Number(month) - 1, Number(day));
                        return transactionDate >= startOfSeptemberLastYear && transactionDate <= endOfSeptemberLastYear;
                    });
                    case "cobroDatafono":
                        return transactions.filter(transaction => transaction.cobroDatafono === true);
                    case "cobroLinkPagos":
                        return transactions.filter(transaction => transaction.cobroLinkPagos === true);
            default:
                return transactions;
        }
    }, [transactions, filter]);

    const totalAmountTransaction = useMemo(() => {
        return filteredTransactions.reduce((acc, transaction) => {
            const amount = parseInt(transaction.monto.total.replace(/\./g, ''), 10);
            return acc + amount;
        }, 0);
    }, [filteredTransactions]);

    const applyFilter = useCallback((filter: string) => {
        setFilter(filter);
    }, []);

    return (
        <transactionsContext.Provider value={{
            transactions,
            filteredTransactions,
            totalAmountTransaction,
            filter,
            setFilter,
            applyFilter
        }}>
            {children}
        </transactionsContext.Provider>
    );
};

export default TransactionProvider;
