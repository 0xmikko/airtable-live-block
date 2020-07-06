import React from "react";
import {Card, CardBody, Col, Media, Row} from "reactstrap";
import { Testimonial } from "../../core/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";

export interface TestimonialsBlockProps {
  data: Testimonial[];
}

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({
  data,
}) => {
  return (
      <Row>
        <Col lg={12}>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((client, key) => (
        <SwiperSlide>
          <Card>
            <CardBody className="p-4">
              <p className="mb-4">" {client.desc} "</p>
              <Media className="pt-3">
                <div className="avatar-md mr-3">
                  <span className="avatar-title rounded-circle bg-soft-primary text-primary font-16">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <Media body className="align-self-center">
                  <h5 className="font-16">{client.name}</h5>
                  <span>- {client.post}</span>
                </Media>
                <div className="text-muted ml-2 align-self-end d-none d-lg-block">
                  <i className="mdi mdi-star text-warning"></i>
                  <i className="mdi mdi-star text-warning ml-1"></i>
                  <i className="mdi mdi-star text-warning ml-1"></i>
                  <i className="mdi mdi-star text-warning ml-1"></i>
                  <i className="mdi mdi-star ml-1"></i>
                </div>
              </Media>
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
        </Col>
      </Row>
  );
};
