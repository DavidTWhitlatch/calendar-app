import './style/app.css';
import Calendar from './component/Calendar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Calendar App</h3>
      </header>
      <div className='App-body'>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
