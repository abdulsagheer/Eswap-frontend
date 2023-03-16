import React, { useState, useEffect } from "react";
import "./index.scss";
import { Table, Input } from "antd";
import cmdx from "../../assets/images/tokens/cmdx.svg";
import atom from "../../assets/images/tokens/atom.svg";
import akt from "../../assets/images/tokens/akt.svg";
import cmst from "../../assets/images/tokens/cmst.svg";
import harbor from "../../assets/images/tokens/harbor.svg";
import juno from "../../assets/images/tokens/juno.svg";
import osmo from "../../assets/images/tokens/osmo.svg";
import Upwards from "../../assets/images/upwards.svg";
import Downwards from "../../assets/images/downwards.svg";
import { Col, Row, SvgIcon } from "../../components/common";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokens } from "../../redux/tokens/slice";

const images = {
	CMDX: cmdx,
	ATOM: atom,
	AKT: akt,
	CMST: cmst,
	HARBOR: harbor,
	JUNO: juno,
	OSMO: osmo,
};

const Tokens = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const tokenData = useSelector((state) => state.tokens?.tokens?.data);

	useEffect(() => {
		dispatch(fetchTokens());
	}, [dispatch]);

	console.log("tokens", tokenData);

	const tokens = tokenData?.map(
		({
			rank,
			symbol,
			price,
			price_24h_change,
			total_volume_24h,
			total_volume_24h_change,
			liquidity,
		}) => {
			return {
				key: rank,
				token: symbol,
				price: `$${Math.round(price * 100) / 100}`,
				price24: (
					<span
						style={{
							color: `${price_24h_change < 0 ? "red" : "green"}`,
						}}>
						<img
							src={price_24h_change < 0 ? Downwards : Upwards}
							alt="upwards"
							width={15}
							style={{ margin: "5px" }}
						/>
						{Math.round(price_24h_change * 100) / 100}%
					</span>
				),
				volume24: `$${Math.round(total_volume_24h * 100) / 100}`,
				volume24change: (
					<span
						style={{
							color: `${total_volume_24h_change < 0 ? "red" : "green"}`,
						}}>
						<img
							src={total_volume_24h_change < 0 ? Downwards : Upwards}
							alt="upwards"
							width={15}
							style={{ margin: "5px" }}
						/>
						{Math.round(total_volume_24h_change * 100) / 100}%
					</span>
				),
				liquidity: `$${Math.round(liquidity * 100) / 100}`,
			};
		}
	);

	const columns = [
		{
			title: "Token",
			dataIndex: "token",
			key: "token",
			render: (text, record) => (
				<div
					onClick={() => navigate(`/tokens/${record?.token}`)}
					style={{ cursor: "pointer" }}>
					<img
						src={images[text]}
						alt="coin"
						width="50"
						style={{ margin: "0 10px" }}
					/>
					<span>{text}</span>
				</div>
			),
		},
		{
			title: "Price",
			dataIndex: "price",
		},
		{
			title: "Price(24h)",
			dataIndex: "price24",
		},
		{
			title: "Volume(24h)",
			dataIndex: "volume24",
		},
		{
			title: "Volume(24)change",
			dataIndex: "volume24change",
		},
		{
			title: "Liquidity",
			dataIndex: "liquidity",
		},
	];
	const [searchKey, setSearchKey] = useState();

	const onSearchChange = (searchKey) => {
		setSearchKey(searchKey.trim().toLowerCase());
	};

	return (
		<section className="token-section">
			<h1 className="header">All Tokens</h1>
			<Row>
				<Col className="assets-search-section">
					<Input
						placeholder="Search Tokens.."
						onChange={(event) => onSearchChange(event.target.value)}
						suffix={<SvgIcon name="search" viewbox="0 0 18 18" />}
					/>
				</Col>
			</Row>
			<div className="custom-table token-table">
				<Table
					dataSource={tokens}
					columns={columns}
					className="custom-table pools-table"
					pagination={{
						total: 20,
						showSizeChanger: true,
						defaultPageSize: 5,
						pageSizeOptions: ["5", "10", "20", "50"],
					}}
				/>
			</div>
		</section>
	);
};
export default Tokens;
