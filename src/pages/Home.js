import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="Home-header">
        <h2>All Category</h2>
      </header>
      <Card />  
    </div>
    
  );
}

export default Home;
