import React from 'react'
import { Link } from 'react-router-dom'
import {
    CoinContainer,
    Container,
    CoinImage,
    CoinContents,
    CurrentPrice,
    CoinVolume,
    PriceChange,
    CoinMinus,
    CoinPlus,
    MarketCap

} from '../styles/CoinElements';

const Coin = ({
    graph,
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <CoinContainer>
            <Link to={graph}>
                <Container>
                    <CoinImage>
                        <img src={image} alt='crypto' />
                    </CoinImage>
                    <CoinContents>
                        <h1>{name}</h1>
                        <p className="symbol">{symbol}</p>
                        <CurrentPrice>${price}</CurrentPrice>
                        <CoinVolume>Volume:${volume.toLocaleString()}</CoinVolume>
                        <PriceChange>
                            {priceChange < 0 ? (
                                <CoinMinus>{priceChange.toFixed(2)}%</CoinMinus>
                            ) : (
                                    <CoinPlus>{priceChange.toFixed(2)}%</CoinPlus>
                                )}
                        </PriceChange>
                        <MarketCap>
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </MarketCap>
                    </CoinContents>
                </Container>
            </Link>
        </CoinContainer>


    )
}

export default Coin
