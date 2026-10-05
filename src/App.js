import logo from './logo.svg';
import './App.css';
import MyButton from './components/clickMeButton.js';
import Welcome from './components/welcome.js';
import Profile from './components/profile.js';
import { keyboard } from '@testing-library/user-event/dist/keyboard/index.js';
function App() {
  return (
  <div>
   <Welcome/>
   <Profile/>
   <MyButton/>
  </div>
  );
}

export default App;