import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Upwards from "../../../assets/images/upwards.svg";
import Downwards from "../../../assets/images/downwards.svg";
import Cmdx from "../../../assets/images/cmdx.png";
import { Col, Row } from "../../../components/common";
import Liquidity from "../../../components/Charts/Liquidity";
import Volume from "../../../components/Charts/Volume";
import { fetchPoolById } from "../../../redux/pools/slice";
import { useSelector, useDispatch } from "react-redux";

const sampleData = [
	{ x: 1, price: 10, liquidity: 5 },
	{ x: 2, price: 20, liquidity: 10 },
	{ x: 3, price: 30, liquidity: 15 },
	{ x: 4, price: 25, liquidity: 12 },
	{ x: 5, price: 35, liquidity: 20 },
	{ x: 6, price: 45, liquidity: 25 },
	{ x: 7, price: 50, liquidity: 30 },
];

const SampleData = {
	day: {
		data: [1, 2, 3, 4, 5, 6, 7],
		categories: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
	},
	week: {
		data: [10, 20, 30, 40, 50, 60],
		categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
	},
	month: {
		data: [100, 200, 300, 400, 500],
		categories: ["January", "February", "March", "April", "May"],
	},
};

const PoolDetails = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const poolsDetails = useSelector((state) => state.pools.pools?.data);

	useEffect(() => {
		dispatch(fetchPoolById(id));
	}, [dispatch]);

	console.log("poolsDetails", poolsDetails);
	const totalLiquidity = poolsDetails?.total_liquidity;
	const liquidity = poolsDetails?.total_liquidity_24h_change;
	const volumeChange = poolsDetails?.total_volume_24h_change;
	const volumeColor = volumeChange < 0;

	return (
		<section>
			<h1 className="header">Pool Overview</h1>
			<div className="pool-values">
				<div>
					<img src={Cmdx} alt={"pool"} width="100" />
					<span className="pool-token">{poolsDetails?.pair_symbol}</span>
					<span className="pool-price">1 CMDX = 0.093064 CMST</span>
				</div>
				<div className="statistics">
					<div className="pool-value">
						<div className="pool-header">Liquidity</div>
						<div className="price">
							${Math.round(totalLiquidity * 100) / 100}
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Liquidity(24h) change</div>
						<div className="price">
							<span
								className="percentage"
								style={{ color: `${liquidity < 0 ? "red" : "green"}` }}>
								<img
									src={liquidity < 0 ? Downwards : Upwards}
									alt="upwards"
									width={20}
									height={30}
								/>
								{Math.round(liquidity * 100) / 100}%
							</span>
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Volume(24h)</div>
						<div className="price">
							${Math.round(poolsDetails?.total_volume_24h * 100) / 100}
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Volume(24h) change</div>
						<div className="price">
							<span
								className="percentage"
								style={{ color: `${volumeColor ? "red" : "green"}` }}>
								<img
									src={volumeChange < 0 ? Downwards : Upwards}
									alt="upwards"
									width={20}
									height={30}
								/>
								{Math.round(volumeChange * 100) / 100}%
							</span>
						</div>
					</div>
					<div className="pool-value">
						<div className="pool-header">Fees</div>
						<div className="price">0.2%</div>
					</div>
				</div>
			</div>
			<div className="header">CMDX - Volume & Liquidity</div>
			<Row className="graphs">
				<Col>
					<Liquidity sampleData={sampleData} />
				</Col>
				<Col>
					<Volume SampleData={SampleData} />
				</Col>
			</Row>
		</section>
	);
};

export default PoolDetails;
