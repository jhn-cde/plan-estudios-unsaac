import styled from "styled-components"

const Div = styled.div`
  box-sizing: border-box;
  max-width: 350px;
  width: 94%;
  box-sizing: border-box;
  margin: 10px 15px;

  @media screen and (min-width: 35em) {
    flex: 0 1 calc(50% - 1em);
    margin: 10px 15px;
  }
  @media screen and (min-width: 60em) {
    flex: 0 1 calc(33% - 1em);
  }
`

const Container = ({children}) => {
  return (
    <Div className="cardContainer">
      {children}
    </Div>
  );
}

export default Container;