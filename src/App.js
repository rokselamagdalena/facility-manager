import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FlashMessagesList from './components/FlashMessage/FlashMessageList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
      </div>
    </div>
  );
}

export default App;
