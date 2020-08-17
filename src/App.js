import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import img from './cryptomonedas.png';
import Form from './components/Form';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }

`;




function App() {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [result, setResult] = useState('');



  useEffect( () => {
    const quoteCurrency = async () => {
      if (currency === '') return
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const result = await axios.get(url);
      setResult(result.data.DISPLAY[cryptoCurrency][currency]);


     
    }
    quoteCurrency();
  
  }, [currency, cryptoCurrency])
  

  return (
    <Container>
      <div>
        <Image src={img} alt="Image crypto" />
      </div>
      <div>
        <Heading>Cotiza criptomnedas al instante</Heading>
        <Form
          setCurrency = {setCurrency}
          setCryptoCurrency = {setCryptoCurrency}
        />
      </div>


    </Container>

  );
}

export default App;
