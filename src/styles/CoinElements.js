import styled from "styled-components";

export const CoinContainer = styled.div`
a{
    text-decoration: none;
}

`;

export const Container = styled.div`
width: 400px;
height: 180px;
background-color: white;
padding: 10px 20px;
color: black;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: center;
font-size: 0.5rem;
border-radius: 20px;
box-shadow: 1px 3px 4px 3px rgba(0, 0, 0, 0.2);
margin: 5px;

&:hover {
        transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 10px 10px 5px grey;
  

}
`;

export const CoinContents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
margin-left: 20px;

h1{
    font-size: 1.5rem;


}

.symbol {
    font-style: italic;
}

`;



export const CoinImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
img {
width: 80px;

}


`;

export const CurrentPrice = styled.p`
font-size: 1.2rem;

`;

export const CoinVolume = styled.p`

`;

export const PriceChange = styled.div`


`;


export const CoinMinus = styled.p`
color: rgb(239, 52, 52);
font-size: 0.9rem;

`;

export const CoinPlus = styled.p`
color: rgb(12, 207, 12);
font-size: 0.9rem;

`;

export const MarketCap = styled.div`

`;

