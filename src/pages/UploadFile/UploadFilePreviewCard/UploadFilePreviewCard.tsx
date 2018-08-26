import * as React from "react";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Label
} from "reactstrap";

import * as utils from "../../../shared/utils";

const UploadFilePreviewCard = ({ file, preview, handleUpload }) => (
  <div>
    <Card className="card">
      <CardImg top={true} width="100%" src={preview} />

      <CardBody>
        <CardTitle>{file.name}</CardTitle>
        <CardSubtitle>
          <Label for="file-browser">{utils.humanFileSize(file.size)}</Label>
        </CardSubtitle>

        <Label for="file-browser">
          <Button style={{ backgroundColor: "#333", borderColor: "#333" }}>
            사진 찾기
          </Button>
        </Label>

        <Button
          onClick={handleUpload}
          style={{ backgroundColor: "#ff9800", borderColor: "#ff9800" }}
        >
          Upload
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default UploadFilePreviewCard;
