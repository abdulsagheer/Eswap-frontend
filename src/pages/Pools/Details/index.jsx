import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Upwards from "../../../assets/images/upwards.svg";
import Downwards from "../../../assets/images/downwards.svg";
import Cmdx from "../../../assets/images/cmdx.png";
import { Col, Row } from "../../../components/common";
import Liquidity from "../../../components/Charts/Liquidity";
import Volume from "../../../components/Charts/Volume";
import { fetchPoolById, fetchPoolsHistory } from "../../../redux/pools/slice";
import { useSelector, useDispatch } from "react-redux";

const PoolDetails = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const poolsDetails = useSelector((state) => state.pools.pools?.data);
	const poolsHistory = useSelector((state) => state.pools?.history?.data);

	useEffect(() => {
		dispatch(fetchPoolById(id));
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPoolsHistory());
	}, [dispatch]);

	console.log("pools Details", poolsDetails);
	console.log("pools History", poolsHistory);

	const totalLiquidity = Math.round(poolsDetails?.total_liquidity * 100) / 100;
	const liquidity = poolsDetails?.total_liquidity_24h_change;
	const volumeChange = poolsDetails?.total_volume_24h_change;
	const volumeColor = volumeChange < 0;
	const price =
		Math.round(
			(poolsDetails?.total_volume_24h / poolsDetails?.total_liquidity) * 100
		) / 100;

	let poolsGraphData = poolsHistory?.map(
		({ timestamp, liquidity, volume_24h }) => {
			return {
				price: volume_24h / liquidity,
				tvl: liquidity * price,
				volume_24h,
				timestamp,
			};
		}
	);

	console.log("poolsGraphData", poolsGraphData);

	return (
		<section>
			<h1 className="header">Pool Overview</h1>
			<div className="pool-values">
				<div className="pool-coins">
					<img src={Cmdx} alt={"pool"} width="100" />
					<span className="pool-token">{poolsDetails?.pair_symbol}</span>
					<span className="pool-price">1 CMDX = 0.093064 CMST</span>
				</div>
				<div className="statistics">
					<div className="pool-value">
						<div className="pool-header">Liquidity</div>
						<div className="price">${totalLiquidity}</div>
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
					<Liquidity
						data={poolsGraphData}
						liquidity={totalLiquidity}
						price={price}
					/>
				</Col>
				<Col>
					<Volume
						data={poolsHistory}
						volume={Math.round(poolsDetails?.base_volume_24h * 100) / 100}
					/>
				</Col>
			</Row>
		</section>
	);
};

export default PoolDetails;
