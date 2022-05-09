import Cards from './Components/Cards'

import * as myData from './Utils/tree_plan_de_estudios.json'

function App() {
  return (
    <div className="App">
      <h1>Plan de Estudios {myData.default.title}</h1>
      <Cards data={myData.default}/>
    </div>
  );
}

export default App;