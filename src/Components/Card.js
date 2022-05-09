import styled from "styled-components"

const Div = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  background: #f5f5f5;
  box-sizing: border-box;
`

const Card = ({children}) => {
  return (
    <Div className="Card">
      {children}
    </Div>
  );
}

export default Card;