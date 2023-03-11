import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";

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

const Volume = () => {
	const [activeKey, setActiveKey] = useState("day");
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		setChartData({
			chart: {
				type: "column",
			},
			title: {
				text: "Sample Data",
			},
			xAxis: {
				categories: SampleData[activeKey].categories,
			},
			yAxis: {
				title: {
					text: "Value",
				},
			},
			series: [
				{
					name: "Sample Data",
					data: SampleData[activeKey].data,
				},
			],
		});
	}, [activeKey]);

	const handleTabChange = (tab) => {
		setActiveKey(tab);
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

	return (
		<div className="volume">
			<Tabs
				defaultActiveKey="day"
				className="comdex-tabs"
				onChange={handleTabChange}
				activeKey={activeKey}
				type="card"
				items={tabItems}
			/>
			<HighchartsReact highcharts={Highcharts} options={chartData} />
		</div>
	);
};

export default Volume;
