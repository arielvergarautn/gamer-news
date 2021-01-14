//Components and pages
import Home from "./pages/Home";

//Style
import './style/app.scss'

//Route
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Route component={Home} path={['/game/{id}', '/']} />
    </div>
  );
}

export default App;
