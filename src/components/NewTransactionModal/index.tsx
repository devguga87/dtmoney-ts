import * as Styled from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

type NewTransactionModalProps = {
  isModalOpen: boolean;
  onRequestCloseModal: () => void
}

export function NewTransactionModal({isModalOpen,onRequestCloseModal}:NewTransactionModalProps) {
  const {createTransaction} = useTransactions();
  
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    await createTransaction({
      type,
      amount,
      category,
      title
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestCloseModal()
  }

  return( 
      <Modal
        isOpen={isModalOpen} 
        onRequestClose={onRequestCloseModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      > 
        <button 
          type='button' 
          onClick={onRequestCloseModal} 
          className='react-modal-close'
        >
          <img src={closeImg} alt="Close modal button" />
        </button>

        <Styled.Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          
          <input 
            type="text" 
            placeholder='Titulo'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />

          <input 
            type="number" 
            placeholder='Valor'
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.value))}
          />

          <Styled.TransactionTypeContainer>
            <Styled.RadioBox 
              type='button' 
              className={type === 'deposit' ? 'active' : ''}
              onClick={()=>setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </Styled.RadioBox>

            <Styled.RadioBox 
              type='button' 
              onClick={()=>setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </Styled.RadioBox>
          </Styled.TransactionTypeContainer>

          <input 
            type="text" 
            placeholder='Categoria'
            value={category}
            onChange={e=>setCategory(e.target.value)}
          />

          <button type='submit'>Cadastrar</button>

        </Styled.Container>
      </Modal>
  )
}