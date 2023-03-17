import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.scss";

const Volume = ({ data, volume }) => {
	const [chartData, setChartData] = useState(null);
	const [activeTab, setActiveTab] = useState("day");

	useEffect(() => {
		// Calculate volume by day, week, and month
		const volumeByDay = {};
		const volumeByWeek = {};
		const volumeByMonth = {};
		data?.forEach((item) => {
			const date = new Date(item.timestamp);
			const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
			const week = getWeekNumber(date);
			const month = date.getMonth(); // 0 (January) to 11 (December)
			volumeByDay[day] = (volumeByDay[day] || 0) + item.volume_24h;
			volumeByWeek[week] = (volumeByWeek[week] || 0) + item.volume_24h;
			volumeByMonth[month] = (volumeByMonth[month] || 0) + item.volume_24h;
		});

		// Prepare data for Highcharts
		const categories = {
			day: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
			week: Object.keys(volumeByWeek).map((week) => `Week ${week}`),
			month: [
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
			],
		};
		const chartData = {
			day: {
				categories: categories?.day,
				data: Object.values(volumeByDay),
			},
			week: {
				categories: categories?.week,
				data: Object.values(volumeByWeek),
			},
			month: {
				categories: categories?.month,
				data: Object.values(volumeByMonth),
			},
		};
		setChartData(chartData);
	}, [data]);

	const handleTabChange = (key) => {
		setActiveTab(key);
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
			<div className="volume-graph">
				<div className="graph-info">
					<div className="graph-title">Volume</div>
					<div className="graph-price">${volume}</div>
				</div>
				<Tabs
					onChange={handleTabChange}
					activeKey={[activeTab]}
					mode="horizontal"
					defaultActiveKey="day"
					className="comdex-tabs"
					type="card"
					items={tabItems}
				/>
			</div>
			{chartData && (
				<HighchartsReact
					highcharts={Highcharts}
					options={{
						chart: {
							type: "column",
						},
						title: {
							text: `Volume by ${activeTab}`,
						},
						xAxis: {
							categories: chartData[activeTab]?.categories,
						},
						yAxis: {
							title: {
								text: "Volume",
							},
						},
						series: [
							{
								name: "Volume",
								data: chartData[activeTab]?.data,
							},
						],
					}}
				/>
			)}
		</div>
	);
};

function getWeekNumber(date) {
	const onejan = new Date(date.getFullYear(), 0, 1);
	return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}

export default Volume;
