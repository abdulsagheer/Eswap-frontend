import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";
import { Col, Row } from "../../common";

const Liquidity = ({ data, liquidity, price }) => {
	// Initialize state variables
	const [timeFrame, setTimeFrame] = useState("day");
	const [dataType, setDataType] = useState("price");

	// Prepare data for the graph
	const priceData = [];
	const liquidityData = [];

	// Loop through the data and add to the arrays based on selected time frame
	const priceByDay = {};
	const priceByWeek = {};
	const priceByMonth = {};
	const liquidityByDay = {};
	const liquidityByWeek = {};
	const liquidityByMonth = {};
	data?.forEach((item) => {
		const date = new Date(item.timestamp);
		const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
		const week = getWeekNumber(date);
		const month = date.getMonth(); // 0 (January) to 11 (December)
		priceByDay[day] = item.tvl;
		priceByWeek[week] = item.tvl;
		priceByMonth[month] = item.tvl;
		liquidityByDay[day] = item.volume_24h / item.tvl;
		liquidityByWeek[week] = item.volume_24h / item.tvl;
		liquidityByMonth[month] = item.volume_24h / item.tvl;
	});

	// Get selected data based on time frame and data type
	let selectedData = [];
	let categories = [];
	switch (timeFrame) {
		case "day":
			selectedData =
				dataType === "price"
					? Object.values(priceByDay)
					: Object.values(liquidityByDay);
			categories = Object.keys(priceByDay).map(
				(day) =>
					[
						"Sunday",
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
					][day]
			);
			break;
		case "week":
			selectedData =
				dataType === "price"
					? Object.values(priceByWeek)
					: Object.values(liquidityByWeek);
			categories = Object.keys(priceByWeek).map((week) => `Week ${week}`);
			break;
		case "month":
			selectedData =
				dataType === "price"
					? Object.values(priceByMonth)
					: Object.values(liquidityByMonth);
			categories = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];
			break;
		default:
			break;
	}

	// Create Highcharts options
	const options = {
		title: {
			text: "Price and Liquidity",
		},
		xAxis: {
			categories,
			title: {
				text: "Time",
			},
		},
		yAxis: {
			title: {
				text: dataType === "price" ? "Price" : "Liquidity",
			},
		},
		series: [
			{
				name: dataType === "price" ? "Price" : "Liquidity",
				data: selectedData,
			},
		],
	};

	// Handle menu tab selection
	const handleTimeFrameSelect = (key) => {
		setTimeFrame(key);
	};

	// Handle menu tab selection
	const handleDataTypeSelect = (key) => {
		setDataType(key);
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

	return (
		<div className="liquidity">
			<div className="graph-tabs">
				<div className="graph-info">
					<div className="graph-title">
						{dataType === "liquidity" ? "Liquidity" : "Price"}
					</div>
					<div className="graph-price">
						${dataType === "liquidity" ? liquidity : price}
					</div>
				</div>
				<div className="filter">
					<Row className="tabs">
						<Col className="tabs-col">
							<Tabs
								defaultActiveKey="price"
								className="comdex-tabs"
								onChange={handleDataTypeSelect}
								activeKey={dataType}
								type="card"
								items={priceAndliquidity}
							/>
						</Col>
						<Col>
							<Tabs
								defaultActiveKey="day"
								className="tabs-col-1"
								onChange={handleTimeFrameSelect}
								selectedKeys={[timeFrame]}
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
