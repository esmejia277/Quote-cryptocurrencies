import React from "react";
import styled from '@emotion/styled';

const ResultDiv = styled.div`
	color: #FFF;
	font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
	font-size: 18px;

	span {
		font-weight: bold;
	}
`;

const Price = styled.span`
	font-size: 30px;
`;


const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
	console.log(result)
  return (
    <ResultDiv>
      <Info>
        El precio es:
        <Price>{result.PRICE}</Price>
      </Info>
			<Info>
        Precio más alto del día:
        <span>{result.HIGHDAY}</span>
      </Info>
			<Info>
        Precio mas bajo del día:
        <span>{result.LOWDAY}</span>
      </Info>
			<Info>
        Variación últimas 24 Hrs: 
        <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
			<Info>
        Última Actualización:
        <span>{result.LASTUPDATE}</span>
      </Info>


    </ResultDiv>
  );
};

export default Quotation;
