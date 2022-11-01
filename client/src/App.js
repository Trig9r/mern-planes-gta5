import { Route, Routes } from 'react-router-dom';
import routesConfig from './routes/routesConfig';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
