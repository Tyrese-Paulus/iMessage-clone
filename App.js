import React from 'react';
import './App.css';
import Imessage from './Imessage';
import { selectUser, login, logout } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispatch(login( {
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
      );
      } else {
        dispatch(logout())
      }
    });
  },[])

  return (
    <div className='app'>
      {user ? <Imessage /> :  <Login />}
    </div>
  );
}

export default App;
