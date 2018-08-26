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

const NoUploadFileCard = () => (
  <div>
    <img src={noFood} />

    <div>
      <Card className="card" inverse={true} color="danger">
        <CardBody>
          <CardTitle>데이터가 없습니다...</CardTitle>
          <CardSubtitle>
            <Label for="file-browser">주간 식단표를 업로드해주세요.</Label>
          </CardSubtitle>

          <Label for="file-browser">
            <Button style={{ backgroundColor: "#333", borderColor: "#333" }}>
              사진 찾기
            </Button>
          </Label>
        </CardBody>
      </Card>
    </div>
  </div>
);

export default NoUploadFileCard;
