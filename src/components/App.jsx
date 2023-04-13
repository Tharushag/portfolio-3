import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Work from './Work';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Work />} />
          <Route exact path="/work" element={<Work />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
