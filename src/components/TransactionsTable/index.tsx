import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import * as Styled from './styles'

export function TransactionsTable () {
  const [] = useState([])

  useEffect(()=>{
    // fetch('http://localhost:3000/api/transactions')
    //   .then(response=>response.json())
    //   .then(data => console.log(data))
    api.get('/transactions').then(response => console.log(response.data))
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
          <tr>
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
         
        </tbody>
      </table>
    </Styled.Container>
  )
}