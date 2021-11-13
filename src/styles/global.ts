import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#f0f2f5;
    --red: #e52e4d;
    --blue:#5429cc;
    --green:#33CC95;
    --blue-light:#6933ff;

    --text-title:#363f5f;
    --text-body:#969cb3;

    --background:#f0f2f5;
    --shape:#FFFFFF
  }
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background:var(--background);
    font-size: 1.6rem;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1 ,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    background-color:rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
  } 

  .react-modal-content{
    width:100%;
    max-width: 57.6rem;
    background-color: var(--background);
    padding:4.8rem;
    position: relative;
    border-radius: .4rem;
  }

  .react-modal-close{
    position: absolute;
    top:2.4rem;
    right:2.4rem;
    border:0;
    background-color: transparent;
    transition:filter .2s;

    &:hover{
      filter:brightness(.8)
    }
  }

`;