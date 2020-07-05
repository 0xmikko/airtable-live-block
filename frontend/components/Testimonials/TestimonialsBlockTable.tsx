import React from "react";
import { Container, Row, Col } from "reactstrap";
import {Testimonial} from "../../core/testimonial";
import {Block} from "../../core/block";
import {TestimonialsBlock} from "./TestimonialsBlock";


export const TestimonialsBlockTable: React.FC<Block> = ({tableId}) => {
  const data : Testimonial[] = [
    {
      name: "Henry McElyea",
      post: "Invoza User",
      desc:
        "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their most common words.",
    },
    {
      name: "Timothy Fairley",
      post: "Invoza User",
      desc:
        "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages of the resulting language",
    },
    {
      name: "James Brown",
      post: "Invoza User",
      desc:
        "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this it would be necessary.",
    },
    {
      name: "Jason Davis",
      post: "Invoza User",
      desc:
        "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their most common words.",
    },
    {
      name: "Rodney Tyler",
      post: "Invoza User",
      desc:
        "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.",
    },
  ];

  return (
        <Row>
          <Col lg={12}>
            <TestimonialsBlock data={data} />
          </Col>
        </Row>
  );
};
