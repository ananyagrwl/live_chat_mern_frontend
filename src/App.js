import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { MainContainer } from './screens/MainContainer';
import Welcome from './components/Welcome';
import { ChatArea } from './components/ChatArea';
import { Provider } from 'react-redux';
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
