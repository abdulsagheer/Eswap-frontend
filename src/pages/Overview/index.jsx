import { useEffect } from "react";
import "./index.scss";
import Swap from "../../assets/images/cSwap-light-logo.svg";
import Upwards from "../../assets/images/upwards.svg";
import { Col, Row } from "../../components/common";
import Volume from "../../components/Charts/Volume";
import Liquidity from "../../components/Charts/Liquidity";
import { fetchOverview } from "../../redux/overview/slice";
import { useSelector, useDispatch } from "react-redux";

const Overview = () => {
	const dispatch = useDispatch();
	const overviewData = useSelector((state) => state.overview.overview?.data);

	useEffect(() => {
		dispatch(fetchOverview());
	}, [dispatch]);

	console.log("overview", overviewData);
	const totalValueLocked = overviewData?.total_value_locked;
	const volume24 = overviewData?.voume_24h;
	const fee = overviewData?.fee_distributed;
	const volume24change = overviewData?.volume_24h_change;

	return (
		<section>
			<h1 className="header">Overview - cSwap</h1>
			<div className="stats-values">
				<div>
					<img src={Swap} alt="swap" width={100} />
				</div>
				<div className="statistics">
					<div className="stats-value">
						<div className="stat-header">Total Value Locked</div>
						<div className="price">
							{Math.round(totalValueLocked * 100) / 100}
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">24 hrs volume</div>
						<div className="price">
							${Math.round(volume24 * 100) / 100}
							<span className="percentage">
								<img src={Upwards} alt="upwards" />
								5.02%
							</span>
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">CMDX Price</div>
						<div className="price">
							${Math.round(fee * 100) / 100}
							<span className="percentage">
								<img src={Upwards} alt="upwards" />
								5.02%
							</span>
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">24 hrs volume change</div>
						<div className="price">
							${Math.round(volume24change * 100) / 100}
						</div>
					</div>
					<div className="stats-value">
						<div className="stat-header">Interchain Transfers</div>
						<div className="price">{overviewData?.intechain_transfers_24h}</div>
					</div>
				</div>
			</div>
			<div className="header">CMDX - Volume & Liquidity</div>
			<Row className="graphs">
				<Col>
					<Liquidity />
				</Col>
				<Col>
					<Volume />
				</Col>
			</Row>
		</section>
	);
};

export default Overview;
