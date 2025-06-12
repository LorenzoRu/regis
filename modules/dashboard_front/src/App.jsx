import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
function App() {
  return (
  <Router>

      <Layout/>

          <Routes>
            <Route path='/' />
            <Route path='/obs' />
            <Route path='/twitch' />
            <Route path='/settings' />
          </Routes>

  </Router>
  );
}

export default App;
