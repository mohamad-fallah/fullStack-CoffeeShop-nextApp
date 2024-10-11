"use client";
import { Tooltip } from "leaflet";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function SaleChart() {
  const data = [
    {
      date: "02/1/1",
      sale: 2000,
    },
    {
      date: "02/1/2",
      sale: 3000,
    },
    {
      date: "02/1/3",
      sale: 3800,
    },
    {
      date: "02/1/4",
      sale: 2900,
    },
    {
      date: "02/1/5",
      sale: 4000,
    },
    {
      date: "02/1/6",
      sale: 3500,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="92.7%">
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />

        <Area type="monotone" dataKey="sale" stroke="#000" fill="#711D1C" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SaleChart;
