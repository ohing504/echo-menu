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

const styles = {
  card: { textAlign: "center" as "center" },
  fileButton: { backgroundColor: "#333", borderColor: "#333", margin: "5px" },
  uploadButton: {
    backgroundColor: "#ff9800",
    borderColor: "#ff9800",
    margin: "5px"
  }
};

const UploadImagePreviewCard = ({ file, preview, handleUpload }) => (
  <div>
    <Card style={styles.card}>
      <CardImg top={true} width="100%" src={preview} />

      <CardBody>
        <CardTitle>{file.name}</CardTitle>
        <CardSubtitle>
          <Label for="file-browser">{utils.humanFileSize(file.size)}</Label>
        </CardSubtitle>

        <Label for="file-browser">
          <Button style={styles.fileButton}>사진 찾기</Button>
        </Label>

        <Button onClick={handleUpload} style={styles.uploadButton}>
          Upload
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default UploadImagePreviewCard;
