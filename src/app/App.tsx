import Home from './pages/home';
import Header from './shared/components/Header';
import '../stylesheet/scss/style.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="main">
        <Home/>
      </div>
    </div>
  );
}

export default App;
