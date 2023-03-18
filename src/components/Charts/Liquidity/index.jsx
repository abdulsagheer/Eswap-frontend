import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";
import { Col, Row } from "../../common";

const Liquidity = ({ data, liquidity, price }) => {
	const [activeTab, setActiveTab] = useState("price");
	const [activeFilter, setActiveFilter] = useState("day");

	const handleTabChange = (key) => {
		console.log(activeTab);
		setActiveTab(key);
	};

	const handleFilterChange = (key) => {
		setActiveFilter(key);
	};

	const filteredData = data?.slice(-30).map((d) => {
		const date = new Date(d.timestamp);
		const day = date.toLocaleString("default", { weekday: "long" });
		const week = `Week ${getWeekNumber(date)}`;
		const month = date.toLocaleString("default", { month: "long" });
		return {
			day,
			week,
			month,
			price: d.tvl,
			liquidity: d.volume_24h,
		};
	});

	const getOptions = (dataKey) => {
		const options = {
			title: {
				text: `${dataKey.charAt(0).toUpperCase() + dataKey.slice(1)} Graph`,
			},
			xAxis: {
				categories: filteredData?.map((d) => d[activeFilter]),
				title: {
					text: "X-Axis",
				},
			},
			yAxis: {
				title: {
					text: "Y-Axis",
				},
			},
			series: [
				{
					name: `${dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}`,
					data: filteredData?.map((d) => d[dataKey]),
				},
			],
		};
		return options;
	};

	const tabItems = [
		{
			label: "Day",
			key: "day",
		},
		{
			label: "Week",
			key: "week",
		},
		{ label: "Month", key: "month" },
	];
	const priceAndliquidity = [
		{
			label: "Price",
			key: "price",
		},
		{
			label: "Liquidity",
			key: "liquidity",
		},
	];
	const options =
		activeTab === "price" ? getOptions("price") : getOptions("liquidity");

	return (
		<div className="liquidity">
			<div className="graph-tabs">
				<div className="graph-info">
					<div className="graph-title">
						{activeTab === "liquidity" ? "Liquidity" : "Price"}
					</div>
					<div className="graph-price">
						${activeTab === "liquidity" ? liquidity : price}
					</div>
				</div>
				<div className="filter">
					<Row className="tabs">
						<Col className="tabs-col">
							<Tabs
								defaultActiveKey="price"
								className="comdex-tabs"
								onChange={handleTabChange}
								activeKey={activeTab}
								type="card"
								items={priceAndliquidity}
							/>
						</Col>
						<Col>
							<Tabs
								defaultActiveKey="day"
								className="tabs-col-1"
								onChange={handleFilterChange}
								selectedKeys={[activeFilter]}
								type="card"
								items={tabItems}
							/>
						</Col>
					</Row>
				</div>
			</div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

function getWeekNumber(date) {
	const onejan = new Date(date.getFullYear(), 0, 1);
	return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}

export default Liquidity;
