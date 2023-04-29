import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './view/Main/Main';
import MyLog from './view/MyLog/MyLog';
import WriteOrigin from './view/WriteOrigin/WriteOrigin';


export default function App() {
  return (
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
          <Route path="/my-log" element={<MyLog />}></Route>
          <Route path="/write-origin" element={<WriteOrigin />}></Route>
				</Routes>
			</BrowserRouter>
  );
}
