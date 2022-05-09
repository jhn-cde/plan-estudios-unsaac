import styled from 'styled-components'
import Card from './Card'
import CardContainer from './CardContainer'
import Area from './Area'
import Chart from './Chart'

import useCreditos from '../Hooks/useCreditos';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Cards = ({data}) => {
  const requerido = data.children.reduce((prev, cur) => prev + cur.requerido, 0)
  const [creditos, handleChange] = useCreditos({acumulado: 0, requerido: requerido})

  const cambiarAcumulado = (cred, cursos) => {
    handleChange({name:"acumulado", value: creditos.acumulado+cred})
  }

  return (
    <Div className="Cards">
      {data.children.map(area => 
        <CardContainer key = {area.name}>
          <Card>
            <Area
              area = {area}
              cambiarAcumuladoTotal = {cambiarAcumulado}
            />
          </Card>
        </CardContainer>
      )}
      <CardContainer key = {"total"}>
        <Card>
          <div className="Area">
            <h3>Total asginaturas</h3>
            <Chart primary={true} creditos={creditos}/>
          </div>
        </Card>
      </CardContainer>
    </Div>
  );
}

export default Cards;