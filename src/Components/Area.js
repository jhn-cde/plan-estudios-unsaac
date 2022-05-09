import { useEffect, useState } from "react";
import styled from "styled-components"

import Cursos from './Cursos'
import Chart from './Chart'
import useCreditos from '../Hooks/useCreditos';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  font-size: .8em;
`
const InputContainer = styled.div`
  max-width: 40%;
`
const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #bbb;
  padding: 5px;
  border-raius: 5px;
  width: 100%;
`

const Area = ({area, cambiarAcumuladoTotal}) => {
  const [creditos, handleChange] = useCreditos({acumulado: 0, requerido: area.requerido})
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    setList(area.Children)
  }, [list])

  const handleSelectAll = (event) => {
    setIsCheckAll(!isCheckAll)
    let tmpIsCheck = list.map(li => li.name)
    setIsCheck(tmpIsCheck)

    const tmpAcumulado = creditos.acumulado
    const sum = area.Children.reduce((prev, cur) => prev + cur.attributes.creditos, 0)
    if(isCheckAll){
      tmpIsCheck = []
      setIsCheck(tmpIsCheck)
      cambiarAcumuladoTotal(0 - tmpAcumulado, tmpIsCheck)
      handleChange({name:"acumulado", value: 0})
    }
    else{
      cambiarAcumuladoTotal(sum - tmpAcumulado, tmpIsCheck)
      handleChange({name:"acumulado", value: sum})
    }
  }

  const handleChecked = (event) => {
    const {id, checked} = event.target
    let tmpIsCheck = [...isCheck, id]
    setIsCheck(tmpIsCheck)

    let tmp = parseInt(event.target.value)
    if(!checked){
      tmpIsCheck = isCheck.filter(item => item !== id)
      setIsCheck(tmpIsCheck)
      tmp = tmp*(-1)
    }
    handleChange({name: "acumulado", value: creditos.acumulado + tmp})
    cambiarAcumuladoTotal(tmp, tmpIsCheck)
  }
  const handleSearch = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="Area">
      <h3>Area Curricular {area.name}</h3>
      <h5>Cursos</h5>
      <Div>
        <div className='SelectAll'>
          <input 
            type={"checkbox"}
            onChange={handleSelectAll}
            checked={creditos.allChecked}
          />
          <label> Seleccionar todo</label>
        </div>
        <InputContainer className='Search'>
          <Input 
              type={"text"}
              placeholder={"Buscar"}
              onChange={handleSearch}
            />
        </InputContainer>
      </Div>
      <Cursos
        cursos={area.Children}
        handleChecked={handleChecked}
        isChecked={isCheck}
        filter={filter}
      />
      <Chart creditos={creditos}/>
    </div>
  );
}

export default Area;