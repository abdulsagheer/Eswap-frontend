import "./index.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cSwap-light-logo.svg";

const Header = () => {
	return (
		<>
			<div>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<Menu mode="horizontal" className="navbar">
					<Menu.Item key="overview" className="navbar-item">
						<Link to="/">Overview</Link>
					</Menu.Item>
					<Menu.Item key="pools" className="navbar-item">
						<Link to="/pools">Pools</Link>
					</Menu.Item>
					<Menu.Item key="tokens" className="navbar-item">
						<Link to="/tokens">Tokens</Link>
					</Menu.Item>
				</Menu>
				<div className="wallet">
					<button>Connect Wallet</button>
				</div>
			</div>
		</>
	);
};

export default Header;
