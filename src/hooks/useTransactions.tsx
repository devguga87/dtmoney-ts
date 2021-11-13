import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type TransactionsProviderProps  = {
  children:React.ReactNode
}

type Transaction = {
  id:number;
  title:string;
  type:string;
  category:string;
  amount:number;
  createdAt:string;
}

type TransactionInput = {
  title:string;
  type:string;
  category:string;
  amount:number;
}

type TransactionsContextData = {
  transactions:Transaction[];
  createTransaction:(transaction:TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({children}:TransactionsProviderProps) =>{
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(()=>{
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  },[])

  async function createTransaction(transactionInput:TransactionInput){
    const response = await api.post('/transactions',{
      ...transactionInput,
      createdAt:new Date()
    } )
    const { transaction }  = response.data

    setTransactions([...transactions, transaction])
  }

  return(
    <TransactionsContext.Provider value={{transactions , createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}