import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInAnonymously,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import '../App.css';
import { auth } from "../config";
import { Link, useNavigate } from 'react-router-dom';
import { User as FirebaseUser } from "firebase/auth";

function App() {

  //const [user, setUser] = useSessionStorage('user', null);
  
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginGuest, setGuest] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (user?.isAnonymous) {
      navigate("/guestPage")
    } 
    //else if (!user?.isAnonymous) {
    //  navigate("/adminPage")
    //}
  }, [navigate, user])

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  const loginAsGuest = async () => {
    try {
      const user = await signInAnonymously(
        auth
      );
      updateProfile(user.user, {displayName: loginGuest})
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };


  const logout = async () => {
    await signOut(auth);
    if (user?.isAnonymous) {
      deleteUser(user)
    }
  };
    return (
      <div>
        <div>
        <h3> Login as Admin</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
        }}
        />

        <button onClick={login}> Login</button>
      </div>
      <h3>Login as Player: </h3>
      <div>
      <input
          placeholder="Guest Name..."
          onChange={(event) => {
            setGuest(event.target.value);
          }}
        />
        <button onClick={loginAsGuest}> Login</button>
      </div>
      <div> 
        <h4> User Logged In: </h4>
        {user?.uid}
        <h5> name </h5>
        {user?.displayName}
      </div>

      <button onClick={logout}> Sign Out </button>

      <Link to="/adminPage">  admin  </Link>
      <Link to="/guestPage">  guest</Link>
      </div>
    )
}

export default App;