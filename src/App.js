import './App.css';
import Content from './components/Content1';
import ContentNew from './components/ContentNew';
import Footer from './components/Footer';
import Header from './components/Header';
import {QueryClientProvider, Query} from 'react-query'

function App() {
  return (
    <div className="App">
      <Header />
      <ContentNew />
      <Footer />
    </div>
  );
}

export default App;
