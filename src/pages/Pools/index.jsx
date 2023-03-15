import React, { useState, useEffect } from "react";
import "./index.scss";
import { Table, Input } from "antd";
import Cmdx from "../../assets/images/cmdx.png";
import Upwards from "../../assets/images/upwards.svg";
import Downwards from "../../assets/images/downwards.svg";
import { Col, Row, SvgIcon } from "../../components/common";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchPools } from "../../redux/pools/slice";

const Pools = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const poolsData = useSelector((state) => state.pools.pools?.data);

	useEffect(() => {
		dispatch(fetchPools());
	}, [dispatch]);

	console.log("poolsData", poolsData);

	const pools = poolsData?.map((pool) => pool?.pair_id);
	console.log("pools", pools);

	const data = [
		{
			key: "1",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "2",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "3",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "4",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "5",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "6",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "7",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "8",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "9",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
		{
			key: "10",
			pool: "CMDX/CMST",
			liquidity: "$481,997.4",
			volume: "$20,571.23",
			volumeChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			liquidityChange: (
				<span style={{ color: "green" }}>
					<img
						src={Upwards}
						alt="upwards"
						width={15}
						style={{ margin: "5px" }}
					/>
					5.75%
				</span>
			),
			fees: "$0.06",
		},
	];

	const columns = [
		{
			title: "Pool",
			dataIndex: "pool",
			key: "pool",
			render: (text, record) => (
				<div
					onClick={() => navigate(`/pools/${record?.key}`)}
					style={{ cursor: "pointer" }}>
					<>
						<img src={Cmdx} alt={"pool"} width="50" />
					</>
					<span>{text}</span>
				</div>
			),
		},
		{
			title: "Liquidity",
			dataIndex: "liquidity",
		},
		{
			title: "Volume",
			dataIndex: "volume",
		},
		{
			title: "Volume Change",
			dataIndex: "volumeChange",
		},
		{
			title: "Liquidity Change",
			dataIndex: "liquidityChange",
		},
		{
			title: "Fees",
			dataIndex: "fees",
		},
	];

	const [searchKey, setSearchKey] = useState();

	const onSearchChange = (searchKey) => {
		setSearchKey(searchKey.trim().toLowerCase());
	};

	return (
		<section className="pools-section">
			<h1 className="header">All Pools</h1>
			<Row>
				<Col className="assets-search-section">
					<Input
						placeholder="Search Pools.."
						onChange={(event) => onSearchChange(event.target.value)}
						suffix={<SvgIcon name="search" viewbox="0 0 18 18" />}
					/>
				</Col>
			</Row>
			<div className="custom-table pools-table">
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

export default Pools;
