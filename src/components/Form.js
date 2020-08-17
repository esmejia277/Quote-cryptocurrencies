import React from "react";
import styled from "@emotion/styled";

import useCurrency from '../hooks/useCurrency';

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

  const CURRENCIES = [
    {code: 'USD',name: 'Dolar de Estados Unidos'},
    {code: 'MXS',name: 'Peso Mexicano'},
    {code: 'EUR',name: 'Euro'},
    {code: 'GBP',name: 'Libra Esterlina'},
  ]

  const [currency, SelectCurrency] = useCurrency('Elije tu moneda', '', CURRENCIES);

  return (
    <form>
      <SelectCurrency />
      <Button type="submit" value="Calcular" />


    </form>
  );
};

export default Form;
