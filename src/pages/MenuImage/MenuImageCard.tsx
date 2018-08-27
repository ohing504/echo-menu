import * as React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const options = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric"
};

const MenuImageCard = ({ menuStore }) => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>{new Date().toLocaleDateString("ko-KR", options)}</CardTitle>
      </CardBody>
      <CardImg bottom={true} width="100%" src={menuStore.imageURL} />
    </Card>
  </div>
);

export default MenuImageCard;
