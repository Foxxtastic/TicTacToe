import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar';
import { GamePage } from './components/GamePage';
import { appBarMenu } from './config';

function App() {
  return (
    <Router>
      <AppBar appBarItems={appBarMenu} />
      <Switch>
        <Route path="/" exact component={GamePage} />
      </Switch>
    </Router>
  );
}

export default App;
