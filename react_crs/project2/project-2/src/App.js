import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/dataObj'

function App() {
  const cardElements = data.map(data => {
    return <Card 
      key={data.id}
      item = {data}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--container">
        {cardElements}
      </div>
    </div>
  );
}

export default App;