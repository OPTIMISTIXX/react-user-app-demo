import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Users, UserDetails, NotFound } from "./pages/index";
import { RoutesEnum } from './constants/RoutesEnum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path={RoutesEnum.Root} element={<Navigate to={RoutesEnum.About} />} />
          
          <Route path={RoutesEnum.About} element={<About />} />
          <Route path={RoutesEnum.Users} element={<Users />} />
          <Route path={RoutesEnum.UserDetails} element={<UserDetails />} />

          <Route path={RoutesEnum.NotFound} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
