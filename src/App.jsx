import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Overview from "./pages/Overview";
import Pools from "./pages/Pools";
import PoolDetails from "./pages/Pools/Details";
import Tokens from "./pages/Tokens";
import TokenDetails from "./pages/Tokens/Details";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Overview />} />
				<Route path="/pools" element={<Pools />} />
				<Route path="/pools/:id" element={<PoolDetails />} />
				<Route path="/tokens" element={<Tokens />} />
				<Route path="/tokens/:id" element={<TokenDetails />} />
			</Routes>
		</div>
	);
}

export default App;
