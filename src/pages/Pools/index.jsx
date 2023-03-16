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

	const pools = poolsData?.map(
		({
			pair_id,
			pair_symbol,
			total_liquidity,
			total_volume_24h,
			total_volume_24h_change,
			total_liquidity_24h_change,
			base_coin_price,
		}) => {
			return {
				key: pair_id,
				pool: pair_symbol,
				liquidity: `$${Math.round(total_liquidity * 100) / 100}`,

				volume: `$${Math.round(total_volume_24h * 100) / 100}`,
				volumeChange: (
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
				liquidityChange: (
					<span
						style={{
							color: `${total_liquidity_24h_change < 0 ? "red" : "green"}`,
						}}>
						<img
							src={total_liquidity_24h_change < 0 ? Downwards : Upwards}
							alt="upwards"
							width={15}
							style={{ margin: "5px" }}
						/>
						{Math.round(total_liquidity_24h_change * 100) / 100}%
					</span>
				),
				fees: `$${Math.round(base_coin_price * 100) / 100}`,
			};
		}
	);

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
					dataSource={pools}
					columns={columns}
					className="custom-table pools-table"
					pagination={{
						total: 30,
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
