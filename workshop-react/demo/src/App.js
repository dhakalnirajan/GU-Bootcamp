import './App.css';
import Card from './card/card';

function App () {
  const cards = ['Pokhara', 'Kathmandu', 'Butwal'];

  return (
    <div className="App">
      {cards.map (item => {
        return <Card item={item} />;
      })}
    </div>
  );
}

export default App;
