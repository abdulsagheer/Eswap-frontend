import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";
import { Col, Row } from "../../common";

const Liquidity = ({ data, liquidity }) => {
	const [activeTab, setActiveTab] = useState("price");
	const [activeFilter, setActiveFilter] = useState("all");

	const handleChangeTab = (key) => {
		setActiveTab(key);
	};

	const handleChangeFilter = (key) => {
		setActiveFilter(key);
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
	const getFilteredData = (data) => {
		switch (activeFilter) {
			case "day":
				return data.slice(-1);
			case "week":
				return data.slice(-7);
			case "month":
				return data.slice(-30);
			default:
				return data;
		}
	};

	const getPriceOptions = () => {
		const filteredData = getFilteredData(data);
		const options = {
			title: {
				text: "Price Graph",
			},
			xAxis: {
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
					name: "Price",
					data: filteredData.map((d) => ({ x: d.x, y: d.price })),
				},
			],
		};
		return options;
	};

	const getLiquidityOptions = () => {
		const filteredData = getFilteredData(sampleData);
		const options = {
			title: {
				text: "Liquidity Graph",
			},
			xAxis: {
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
					name: "Liquidity",
					data: filteredData.map((d) => ({ x: d.x, y: d.liquidity })),
				},
			],
		};
		return options;
	};

	const options =
		activeTab === "price" ? getPriceOptions() : getLiquidityOptions();

	return (
		<div className="liquidity">
			<div className="graph-tabs">
				<div className="graph-info">
					<div className="graph-title">Liquidity</div>
					<div className="graph-price">${liquidity}</div>
				</div>
				<div className="filter">
					<Row className="tabs">
						<Col className="tabs-col">
							<Tabs
								defaultActiveKey="price"
								className="comdex-tabs"
								onChange={handleChangeTab}
								activeKey={activeTab}
								type="card"
								items={priceAndliquidity}
							/>
						</Col>
						<Col>
							<Tabs
								defaultActiveKey="day"
								className="tabs-col-1"
								onChange={handleChangeFilter}
								activeKey={activeFilter}
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

export default Liquidity;
