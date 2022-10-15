import TableInformation from './Components/Table/TableInformation';
import Navbar from './Components/Table/views/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path="/" element={<TableInformation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
