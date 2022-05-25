import styled from "styled-components";
import logo from "../../Assets/trackIt-logo-pequena.svg";
import placeholder from "../../Assets/placeholder-cow.jpg"

export default function Header () {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <UserImg>
                <img src={placeholder} alt="" />
            </UserImg>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0px;
left: 0px;
padding: 1rem;
`
const UserImg = styled.div`
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
`