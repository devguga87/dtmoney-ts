import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 112rem;
  width: 100%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:3.2rem 1.6rem 16rem;

  button{
    font-size: 1.6rem;
    color:#fff;
    background-color: var(--blue-light);
    padding:0 3.2rem;
    border:0;
    border-radius: 0.25rem;
    height: 4.8rem;
    transition: filter 0.2s;

    &:hover{
      filter:brightness(.9)
    }
  }
`