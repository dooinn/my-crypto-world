import styled from 'styled-components';

export const Nav = styled.div`
width: 100%;
height: 90px;
max-height: 100px;
align-items: center;
display: flex;
padding: 0 30px;
position: relative;
border-bottom: solid 3px black;


.logo {
    font-size: 2rem;
    font-weight: 700;
}

a{
    text-decoration: none;
    color: black;
}

.mylist-nav{
    position: absolute;
    top:40%;
    right: 3%;
}

.mylist-nav:hover{
    text-decoration: underline;
}
`;

export const NavOptions = styled.div`
display: flex;
position: absolute;
right: 10%;



`;