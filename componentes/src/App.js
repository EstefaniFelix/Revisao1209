import './App.css';
import DigaMeuNome from './componentes/DigaMeuNome';

function App() {
  return (
    <div className="Container">
 
 <h1>Qual é meu nome?</h1>
 <DigaMeuNome nome="Estefani" idade="15" profissão="Encanadora"/>
    </div>
  );
}

export default App;
