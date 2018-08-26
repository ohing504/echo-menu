import * as React from "react";

import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const options = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric"
};

const MenuCard = ({ imageURL }) => (
  <div>
    <Card style={{ margin: "10px" }}>
      <CardBody>
        <CardTitle>{new Date().toLocaleDateString("ko-KR", options)}</CardTitle>
      </CardBody>
      <CardImg bottom={true} width="100%" src={imageURL} alt="" />
    </Card>
  </div>
);

export default MenuCard;
