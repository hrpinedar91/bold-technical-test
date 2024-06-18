"use client";

import { useState, createContext, useEffect } from 'react';
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
    const [filteredTransactions, setFilteredTransactions] = useState<TransactionItem[]>([]);
    const [totalAmountTransaction, setTotalAmountTransaction] = useState<number>(0);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        // Agregar las transacciones iniciales al estado
        setTransactions(transactionsMovements);
        setFilteredTransactions(transactionsMovements);

        // Calcular el total de las transacciones
        const totalAmount = transactionsMovements.reduce((acc, transaction) => {
            const amount = parseInt(transaction.monto.total.replace(/\./g, ''), 10);
            return acc + amount;
        }, 0);

        setTotalAmountTransaction(totalAmount);
    }, []);

    const applyFilter = (filter: string) => {
        setFilter(filter);
        let filtered = transactions;

        const today = new Date();
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        switch (filter) {
            case "today":
                filtered = transactions.filter(transaction => {
                    const transactionDate = new Date(transaction.fecha_y_hora.split(' - ')[0].split('/').reverse().join('-'));
                    return transactionDate.toDateString() === new Date().toDateString();
                });
                break;
            case "week":
                filtered = transactions.filter(transaction => {
                    const transactionDate = new Date(transaction.fecha_y_hora.split(' - ')[0].split('/').reverse().join('-'));
                    return transactionDate >= startOfWeek && transactionDate <= new Date();
                });
                break;
            case "month":
                filtered = transactions.filter(transaction => {
                    const transactionDate = new Date(transaction.fecha_y_hora.split(' - ')[0].split('/').reverse().join('-'));
                    return transactionDate >= startOfMonth && transactionDate <= new Date();
                });
                break;
            case "cobroDatafono":
                filtered = transactions.filter(transaction => transaction.cobroDatafono);
                break;
            case "cobroLinkPagos":
                filtered = transactions.filter(transaction => transaction.cobroLinkPagos);
                break;
            default:
                filtered = transactions;
        }

        setFilteredTransactions(filtered);

        // Calcular el total de las transacciones filtradas
        const totalAmount = filtered.reduce((acc, transaction) => {
            const amount = parseInt(transaction.monto.total.replace(/\./g, ''), 10);
            return acc + amount;
        }, 0);

        setTotalAmountTransaction(totalAmount);
    };

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
