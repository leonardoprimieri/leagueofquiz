import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
  }

  body {
    overflow-y: hidden;
    background-image: url('https://images4.alphacoders.com/600/thumb-1920-600528.png') ;
    background-size: cover;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  .animeLeft {
    animation: animeLeft 400ms forwards;
  }

  @keyframes animeLeft {
    from {
      opacity: 0;
      transform: translateX(-10rem);
    } to {
      opacity: initial;
      transform: initial;
    }
  }

  .animeTop {
    animation: animeTop 400ms forwards;
  }


  @keyframes animeTop {
    from {
      opacity: 0;
      transform: translateY(-10rem);
    } to {
      opacity: initial;
      transform: initial;
    }
  }

  html {
    @media (max-width: 640px) {
      font-size: 90%;
    }

    @media (max-width: 576px) {
      font-size: 80%;
    }
    @media (max-width: 515px) {
      font-size: 70%;
    }
  }


`;
