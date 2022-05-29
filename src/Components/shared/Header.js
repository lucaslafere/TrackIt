import styled from "styled-components";
import { useContext } from "react";
import logo from "../../Assets/trackIt-logo-pequena.svg";
import ImageContext from "../../contexts/ImageContext";

export default function Header () {
    const { image, name } = useContext(ImageContext);

    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <UserImg>
                <img src={image} alt="" />
            </UserImg>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0px;
left: 0px;
padding: 1rem;
z-index: 1;
`
const UserImg = styled.div`
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
`