import React from "react";
import {Counter} from "../../core/counter";
import {Block} from "../../core/block";
import CounterBlock from "./CounterBlock";



export const CounterBlockTable: React.FC<Block> = ({tableId}) => {
  const data: Counter[] = [
    { icon: "bookmark", title: "Projects", start: 10, end: 2581 },
    { icon: "user-plus", title: "No. of Clients", start: 2, end: 800 },
    { icon: "shopping-cart", title: "Cups of coffee", start: 608, end: 128 },
    { icon: "award", title: "Awards", start: 6, end: 47 },
  ];
  return <CounterBlock data={data} />
};
