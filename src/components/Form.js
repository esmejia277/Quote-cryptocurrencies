import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from 'axios';

import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';


const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }

`;

const Form = () => {

  const [listCrypto, setListCrypto] = useState([]);

  const CURRENCIES = [
    {code: 'USD',name: 'Dolar de Estados Unidos'},
    {code: 'MXS',name: 'Peso Mexicano'},
    {code: 'EUR',name: 'Euro'},
    {code: 'GBP',name: 'Libra Esterlina'},
  ]

  const [currency, SelectCurrency] = useCurrency('Elije tu moneda', '', CURRENCIES);
  const [cryptoCurrency, SelectCrypto] = useCryptocurrency('Elije tu criptomoneda', '', listCrypto);

  useEffect( () => {
    const fetchCryptoCurrencies = async () => {
      const data = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
      setListCrypto(data.data.Data);
      
    }
    fetchCryptoCurrencies();
  }, [])

  return (
    <form>
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="Calcular" />


    </form>
  );
};

export default Form;
