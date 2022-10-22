import styled from "@emotion/styled";
import Button from "./components/Button";
import Input from "./components/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Button size="lg">Large Button</Button>
        <Button>Default Button</Button>
        <Button size="sm">Small Button</Button>
      </Wrapper>
      <Wrapper>
        <Button size="lg" disabled>
          Large Button
        </Button>
        <Button disabled>Default Button</Button>
        <Button size="sm" disabled>
          Small Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Input
          label="Default Input style"
          LeftDescription="This is Left Description"
        ></Input>
      </Wrapper>
      <Wrapper>
        <Input
          label="Error Input style"
          variant="error"
          value="Error"
          LeftDescription="This is Left Description"
        ></Input>
      </Wrapper>
      <Wrapper>
        <Input
          label="Disabled Input style"
          value="My Folio"
          disabled
          LeftDescription="This is Left Description"
        ></Input>
      </Wrapper>
    </div>
  );
}

export default App;
