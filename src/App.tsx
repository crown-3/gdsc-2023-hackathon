import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from './global-style';
import Main from './view/Main/Main';
import MyLog from './view/MyLog/MyLog';
import WriteOrigin from './view/WriteOrigin/WriteOrigin';
import "./styles/common.css";
import Pending from './view/Pending/Pending.tsx';
import SignIn from './view/SignIn/SignIn.tsx';
import SignUp from './view/SignUp/SignUp.tsx';
import { CookiesProvider } from 'react-cookie';
import Specific from "./view/Specific/Specific.tsx";
import Feed from "./view/Feed/Feed.tsx";

export default function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/inbox" element={<Main />}></Route>
            <Route path="/my-log" element={<MyLog />}></Route>
            <Route path="/write-origin" element={<WriteOrigin />}></Route>
            <Route path="/" element={<Pending />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/specific" element={<Specific />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}
