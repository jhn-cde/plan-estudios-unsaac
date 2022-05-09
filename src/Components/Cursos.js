import styled from "styled-components"

const Div = styled.div`
  border-radius: 5px;
  padding: 10px 15px;
  background: #fff;
  height: 300px;
  box-sizing: border-box;
  overflow-y: auto;
  font-size: .8em;
  text-align: left;
`
const Th = styled.th`
  padding: 5px;
  border-bottom: 1px double #888;
`
const Td = styled.td`
  padding: 5px;
  border-bottom: 1px solid #bbb;
`

const Cursos = ({cursos, handleChecked, isChecked, filter}) => {
  return (
    <Div className="Cursos">
      <table>
        <thead>
          <tr>
            <Th>  </Th>
            <Th> Cod. </Th>
            <Th> Cred. </Th>
            <Th> Curso </Th>
          </tr>
        </thead>
        <tbody>
          {cursos.filter(curso =>
            (curso.name.toUpperCase().includes(filter.toUpperCase()) ||
            curso.attributes.title.toUpperCase().includes(filter.toUpperCase())
            )).map((curso) => 
              <tr className="curso" key={curso.name}>
                <Td>
                  <input 
                    type={"checkbox"}
                    id={curso.name}
                    value={curso.attributes.creditos}
                    checked={isChecked.includes(curso.name)}
                    onChange={handleChecked}
                  />
                </Td>
                <Td> {curso.name} </Td>
                <Td> {curso.attributes.creditos} </Td>
                <Td> {curso.attributes.title} </Td>
              </tr>
          )}
        </tbody>
      </table>
    </Div>
  );
}

export default Cursos;