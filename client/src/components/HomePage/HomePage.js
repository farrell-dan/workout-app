import Quotes from "./Quotes";
import styled from "styled-components";

const HomePage = () => {
return (
    <Container>
    <h1>Welcome!</h1>
    <Quotes/>
    </Container>
)
}

export default HomePage;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center
`;