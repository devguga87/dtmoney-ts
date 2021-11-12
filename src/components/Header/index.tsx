import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import * as Styled from './styles'
import Modal from 'react-modal'

type HeaderProps = {
  onOpenNewTransactionModal :() => void
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
  return ( 
    <Styled.Container>
      <Styled.Content>
      <img src={logoImg} alt="Dt money" />
      <button type='button' onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
      </Styled.Content>
    </Styled.Container>
  )
}