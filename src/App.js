import './App.css';
import Content from './components/Content1';
import ContentNew from './components/ContentNew';
import Footer from './components/Footer';
import Header from './components/Header';
import {QueryClientProvider, Query} from 'react-query'
import Ajax from './components/Ajax';

import {BrowserRouter as Switch,Routes, Link, Route, Router} from 'react-router-dom'
import UsestateUse from './components/UsestateUse';
import QueryItem from './components/QueryItem';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Header />
      <ContentNew />
      <Ajax />
      <Footer />
    </div>
      // <>
      
    //   {/* <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //           <Link to='/super-heroes'>Traditional Super Heroes</Link>
    //         </li>
    //         <li>
    //           <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path='/super-heroes'>
    //         <UsestateUse />
    //       </Route>
    //       <Route path='/rq-super-heroes'>
    //         <QueryItem />
    //       </Route>
    //       <Route path='/'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    //    */}
      
    //   // </>
  );
}

export default App;
