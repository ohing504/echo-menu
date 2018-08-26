import { UploadTaskSnapshot } from "@firebase/storage-types";
import * as loadImage from "blueimp-load-image";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { Progress } from "reactstrap";
import "./UploadFile.css";

import { storage } from "../../shared/firebase/firebase";
import * as utils from "../../shared/utils";
import NoUploadFileCard from "./NoUploadFileCard/NoUploadFileCard";
import UploadFilePreview from "./UploadFilePreviewCard/UploadFilePreviewCard";

@observer
class UploadFilePage extends React.Component {
  @observable
  private file: File;

  @observable
  private preview: string;

  @observable
  private completed: number = 0;

  @observable
  private isUploading: boolean = false;

  public render() {
    return (
      <div>
        {this.isUploading && (
          <Progress
            style={{
              borderRadius: 0,
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 999
            }}
            value={this.completed}
          />
        )}

        <input
          accept="image/*"
          className="input-file"
          id="file-browser"
          multiple={false}
          type="file"
          onChange={this.handleFile}
        />

        {this.file ? (
          <UploadFilePreview
            file={this.file}
            preview={this.preview}
            handleUpload={this.handleUpload}
          />
        ) : (
          <NoUploadFileCard />
        )}
      </div>
    );
  }

  @action
  private revoke = () => URL.revokeObjectURL(this.preview);

  @action
  private handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.revoke();
      loadImage.parseMetaData(this.file, data => {
        if (data.exif && data.exif.get("Orientation")) {
          loadImage(
            this.file,
            canvas => (this.preview = canvas.toDataURL(this.file.type)),
            { orientation: data.exif.get("Orientation") }
          );
        } else {
          this.preview = URL.createObjectURL(this.file);
        }
      });
    }
  };

  @action
  private handleUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!this.file) {
      return;
    }

    this.isUploading = true;
    this.completed = 0;

    const filename = utils.getWeekNumber().join("-");
    const fileRef = storage.ref("menus").child(filename);
    const uploadTask = fileRef.put(this.file);
    uploadTask.on("state_changed", this.handleUploadProgress);
  };

  @action
  private handleUploadProgress = (snapshot: UploadTaskSnapshot) => {
    this.completed = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if (snapshot.bytesTransferred === snapshot.totalBytes) {
      this.handleUploadCompleted();
    }
  };

  @action
  private handleUploadCompleted = () => {
    this.isUploading = false;
  };
}

export default UploadFilePage;
