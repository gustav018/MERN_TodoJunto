import PersonCard from './componentes/PersonCard';
import './App.css';

function App() {
  

  return (
    <>
      <PersonCard
        firstName="Done"
        lastName="Jane"
        age={45}
        hairColor="Black" />
      <PersonCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor="Brown"
      />
    </>
  );
}

export default App;
