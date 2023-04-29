import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from './global-style';
import Main from './view/Main/Main';
import MyLog from './view/MyLog/MyLog';
import WriteOrigin from './view/WriteOrigin/WriteOrigin';
import "./styles/common.css";
import Pending from './view/Pending/Pending.tsx';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
          <Route path="/my-log" element={<MyLog />}></Route>
          <Route path="/write-origin" element={<WriteOrigin />}></Route>
          <Route path="/pending" element={<Pending />}></Route>
				</Routes>
			</BrowserRouter>
    </ThemeProvider>
  );
}
