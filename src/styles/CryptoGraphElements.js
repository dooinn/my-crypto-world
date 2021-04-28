import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem;

img {
    width: 80px;
}


`;

export const ContainerBox = styled.div`
margin: 50px;
width: 90%;
height: auto;
border-radius: 25px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
padding: 40px 20px;

.save__btn{
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
    justify-content: center;
    align-items: center;
}

.save__btn:hover{
    text-decoration: underline;
}

.days__btn{
    background: none;
    outline:none;
    border: none;
    cursor: pointer;
    margin-right: 0.3rem;
}

.days__btn:hover{
    text-decoration: underline;
}


`;

export const Chart = styled.div`

width: 100%;
height: auto;
display: flex;
justify-content: center;


`;

export const Articles = styled.div`


width: 100%;
    display: flex;
    align-items: center;

    overflow: auto;

`;


export const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: auto;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    text-align: right;
    justify-content: center;
    margin-bottom: 30px;





    img {
width: 20rem;    
        height: 200px;
        object-fit: fill;
        object-position: top;
        margin-top: 1rem;
        
    }

    a {
        text-decoration: none;
        color: black;
    }

    .content{
        display: flex;
        justify-content: center;
        padding: 20px;
        text-align: justify;
        width: 100%;
        height: auto;
        text-overflow: hidden;
        overflow: hidden;
        margin-bottom: 20px;
    }


`;
