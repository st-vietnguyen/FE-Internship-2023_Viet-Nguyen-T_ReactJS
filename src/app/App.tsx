import { Route, Routes } from 'react-router-dom';
import routes from './app.routes';
import Home from './pages/home';
import '../stylesheet/scss/style.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.name} path={item.path} element={item.component} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
