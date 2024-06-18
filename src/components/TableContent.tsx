'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calculator, Link } from 'lucide-react'
import { Icons } from './Icons'
// import { transactions }  from '@/config/transactions'
import { useContext } from 'react'
import { transactionsContext } from '@/context/TransactionsContext'



interface Props {
    range: string
}

const TableContent = ({range}: Props) => {

    const {transactions} = useContext(transactionsContext)
    return (
        <div className='w-full'>
            <div className='bg-custom-gradient-table px-12 py-2 rounded-t-xl'>
                <p className='text-white text-2xl'>Tus ventas de {range}</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Transacción</TableHead>
                        <TableHead>Fecha y hora</TableHead>
                        <TableHead>Método de pago</TableHead>
                        <TableHead>ID Transacción Bold</TableHead>
                        <TableHead>Monto</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='bg-white'>
                    {transactions.map((dato, index) => (
                        <TableRow key={index}>
                            <TableCell className='flex gap-2.5 text-[#353C60]'>
                                {dato.transaccion === 'Cobro exitoso' ? <Link fill='white' className='h-5 w-5' />  : <Calculator fill='white' className='h-5 w-5' />}
                                {dato.transaccion}
                            </TableCell>
                            <TableCell>{dato.fecha_y_hora}</TableCell>
                            <TableCell className='flex gap-2.5'>
                                <Icons.masterCard className='h-5 w-5' />
                                {dato.metodo_de_pago}
                            </TableCell>
                            <TableCell>{dato.id_transaccion_bold}</TableCell>
                            <TableCell>{dato.monto.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableContent