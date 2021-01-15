//Components and pages
import Home from "./pages/Home";
import Nav from './components/Nav'
//Style
import './style/app.scss'

//Route
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Nav />
      <Route component={Home} path={['/game/{id}', '/']} />
    </div>
  );
}

export default App;
