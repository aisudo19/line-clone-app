import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import Line from './components/Line';
import { auth } from './firebase.js'

function App() {
  const [user, setUser] = useAuthState(auth);
  return (
    <div>
      { user ? <Line/> : <SignIn/>}
    </div>
  );
}

export default App;
