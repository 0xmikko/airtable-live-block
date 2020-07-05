import React from "react";
import {ServiceBlock} from "./ServiceBlock";
import {Service} from "../../core/service";

export interface ServiceBlockTableProps {
  tableId: string;
}

export const ServiceBlockTable: React.FC<ServiceBlockTableProps> = ({tableId}) => {
  const services: Service[] = [
    {
      icon: "grid",
      title: "Bootstrap UI based",
      desc: "To an English person, it will seem like English as skeptical.",
    },
    {
      icon: "edit",
      title: "Easy to customize",
      desc: "If several languages coalesce, the grammar of the language.",
    },
    {
      icon: "headphones",
      title: "Awesome Support",
      desc: "The languages only differ in their grammar their pronunciation",
    },
    {
      icon: "layers",
      title: "Creative Design",
      desc: "Everyone realizes why a new common would be desirable.",
    },
    {
      icon: "code",
      title: "Quality Code",
      desc: "To achieve this, it would be necessary to have uniform.",
    },
    {
      icon: "tablet",
      title: "Responsive layout",
      desc: "Their separate existence is a myth. For science, music, etc.",
    },
  ];

  return <ServiceBlock data={services} />
};
