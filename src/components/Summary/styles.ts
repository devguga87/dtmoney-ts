import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:3.2rem;
  margin-top:-16rem;

  div{
    background:var(--shape);
    padding:2.5rem 3.2rem;
    border-radius:0.25rem;
    color:var(--text-title)
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong{
    margin-top:1.6rem;
    font-size: 3.2rem;
    line-height: 4.8rem;
    font-weight: 500;
    display: block;
  }

  & .highlight-background{
    background-color: var(--green);
    color:#fff
  }
`