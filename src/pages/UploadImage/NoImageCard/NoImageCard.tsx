import * as React from "react";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Label
} from "reactstrap";
import noFood from "./no-food.svg";

const styles = {
  button: { backgroundColor: "#333", borderColor: "#333" },
  card: {
    backgroundColor: "#ff9800",
    color: "white",
    textAlign: "center" as "center"
  }
};

const NoImageCard = () => (
  <div>
    <img src={noFood} />

    <Card style={styles.card}>
      <CardBody>
        <CardTitle>데이터가 없습니다...</CardTitle>
        <CardSubtitle>
          <Label for="file-browser">주간 식단표를 업로드해주세요.</Label>
        </CardSubtitle>

        <Label for="file-browser">
          <Button style={styles.button}>사진 찾기</Button>
        </Label>
      </CardBody>
    </Card>
  </div>
);

export default NoImageCard;
