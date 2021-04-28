import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 50px;
text-align: center;


.list__container{
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem;


}

.list__content{

    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: .3s
}

.list__content:hover{
    transform: scale(1.2);

}

.coin__logo{
    width: 3rem;
    height: 3rem;
}

button{
    outline: none;
    border: none;
    background: none;
    color: gray;
    cursor: pointer;
    font-size: 0.5rem;

}

button:hover {
    color: black;

}

a {
    text-decoration: none;
    color: black;
}

`;
