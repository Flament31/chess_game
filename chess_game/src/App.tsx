import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Black from './black';
import White from './white';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<White />} />,
        <Route path="/black" element={<Black />} />,
      </Routes>
    </Router>
  );
};

export default App;
