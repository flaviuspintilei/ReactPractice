import '../App.css';

import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App">

      <Footer />
      <MainContent />
      <Header />

      <input type="checkbox" />
      <span>Cheese</span>

      <input type="checkbox" />
      <span>Cheese</span>

      <input type="checkbox" />
      <span>Cheese</span>

    </div>
  );
}

export default App;
