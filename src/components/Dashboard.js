import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import axios from 'axios';
import Coin from './Coin';

import {
    Container,
    Search,
    Coins
} from '../styles/DashboardElements';

SwiperCore.use([Navigation, Keyboard]);

const Dashboard = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');


    const getCoinData = async () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
        await axios.get(url)
            .then(res => {
                const data = res.data
                console.log(data)
                setCoins(data);

            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getCoinData();
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <Container>
            <Search>
                <h1 style={{ fontSize: "3rem" }}>Welcome to My Crypto world!</h1>
                <h4 style={{ marginBottom: "1rem", color: "gray" }}>"Search any crypto currency and get the related news !"</h4>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </Search>
            <Coins>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    keyboard={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {filteredCoins.map((coin, index) => {
                        return (<SwiperSlide key={index}>
                            <Coin
                                graph={`/coin/${coin.id}`}
                                name={coin.name}
                                price={coin.current_price}
                                symbol={coin.symbol}
                                volume={coin.total_volume}
                                marketcap={coin.market_cap}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        </SwiperSlide>
                        )
                    })}

                </Swiper>

            </Coins>




        </Container>
    )
}

export default Dashboard
