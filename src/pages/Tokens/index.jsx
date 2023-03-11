import React, { useState } from "react";
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
import { Col, Row, SvgIcon } from "../../components/common";
import { useNavigate } from "react-router";

const data = [
	{
		key: "1",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "2",
		token: "HARBOR",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "3",
		token: "CMST",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "4",
		token: "ATOM",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "5",
		token: "OSMO",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "1",
		token: "AKT",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "6",
		token: "JUNO",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "7",
		token: "JUNO",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "8",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "9",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "10",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "1",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
	{
		key: "11",
		token: "CMDX",
		price: "$0.0999",
		price24: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		volume24: "$244, 567.90",
		volume24change: (
			<span style={{ color: "green" }}>
				<img src={Upwards} alt="upwards" width={15} style={{ margin: "5px" }} />
				5.75%
			</span>
		),
		liquidity: "$21.65M",
	},
];

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
					dataSource={data}
					columns={columns}
					className="custom-table pools-table"
					pagination={{
						total: 10,
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
