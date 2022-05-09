import styled from "styled-components"
import { PieChart } from "react-minimal-pie-chart"

const Container = styled.div`
  display: flex;
  margin: 0px;
  box-sizing: border-box;
`
const Chart = styled.div`
  width: ${props => props.primary ? '50%': '20%' };
  margin: auto;
  margin-bottom: 0;
  padding: 10px 0;
`
const Label = styled.div`
  width: ${props => props.primary ? '40%': '60%' };
  margin: auto;
  margin-left: 0;
  margin-bottom: 5px;
  font-size: .8em;
`

const Area = ({creditos, primary}) => {
  return (
    <Container className="Chart" primary>
      <Chart primary={primary}>
        <PieChart
          data={[
            {
              title: 'Acumulado',
              value: creditos.acumulado,
              color:'green'},
            {
              title: 'Requerido',
              value: creditos.requerido - creditos.acumulado > 0 ? creditos.requerido - creditos.acumulado : 0,
              color:'#ccc'}]
            }
          lineWidth={35}
        />
      </Chart>
      <Label primary={primary}>
        <p><span style={{color: "green"}}><b>Total acumulado: {creditos.acumulado}</b></span><br/>
        <span style={{color: "gray"}}><b>Requerido: {creditos.requerido}</b></span></p>
      </Label>
    </Container>
  );
}

export default Area;