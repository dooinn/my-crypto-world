import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Container } from '../styles/HomeElements'
import { Link } from 'react-router-dom';

const Home = () => {


    const { mylist, removeCoinFromMylist } = useContext(GlobalContext);


    return (
        <Container>
            <h3>My Coin List</h3>
            {
                mylist.length > 0 ?
                    <>
                        <div className="list__container">

                            {mylist.map((coin, index) => (

                                <div className="list__content" key={index}>
                                    <Link to={"/coin/" + coin.id}>
                                        <img className="coin__logo" src={coin.image.small}></img>
                                        <h3>{coin.name}</h3>
                                    </Link>
                                    <button onClick={() => removeCoinFromMylist(coin.id)}>Delete</button>
                                </div>

                            ))}

                        </div>
                    </>
                    :
                    <p style={{ color: "gray" }}>ADD COINS AND MAKE YOUR OWN LIST</p>
            }

        </Container>
    )
}

export default Home
