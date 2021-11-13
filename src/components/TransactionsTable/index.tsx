import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import * as Styled from './styles'

type Transaction = {
  id:number;
  title:string;
  type:string;
  category:string;
  amount:number;
  createdAt:string;
}

export function TransactionsTable () {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  },[])
  
  return(
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          { transactions.map(transaction => {
           return (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                  style:'currency',
                  currency:'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td> {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(transaction.createdAt))}</td>
            </tr>
           )
          })}
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          */}
        </tbody>
      </table>
    </Styled.Container>
  )
}