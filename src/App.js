import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 50px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 50px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width 200px;
  background-color: coral;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${Emoji}{ // DOM targeting
    
    &:hover{
      font-size: 100px;
    }
  }
`
function App() {
  return (
    <Wrapper>
      <Box>
          <Emoji>
            😂
          </Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
