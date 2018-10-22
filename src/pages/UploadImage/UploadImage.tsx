import { UploadTaskSnapshot } from "@firebase/storage-types";
import * as loadImage from "blueimp-load-image";
import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";
import * as React from "react";

import { Progress } from "reactstrap";

import * as routes from "../../constants/routes";
import { storage } from "../../shared/firebase/firebase";
import * as utils from "../../shared/utils";
import { IMenuStore } from "../../stores/types";
import ImagePreviewCard from "./ImagePreviewCard/ImagePreviewCard";
import NoImageCard from "./NoImageCard/NoImageCard";

const styles = {
  fileInput: {
    display: "none"
  },
  progress: {
    borderRadius: 0,
    left: 0,
    position: "fixed" as "fixed",
    top: 0,
    width: "100%",
    zIndex: 999
  }
};

interface IUploadImageProps {
  history?: any;
  menuStore?: IMenuStore;
}

@inject("menuStore")
@observer
class UploadImage extends React.Component<IUploadImageProps> {
  @observable
  private file: File;

  @observable
  private preview: string;

  @observable
  private completed: number;

  @observable
  private isUploading: boolean = false;

  public render() {
    return (
      <div>
        {this.isUploading && (
          <Progress style={styles.progress} value={this.completed} />
        )}

        <input
          accept="image/*"
          id="file-browser"
          type="file"
          multiple={false}
          style={styles.fileInput}
          onChange={this.handleFile}
        />

        {this.file ? (
          <ImagePreviewCard
            file={this.file}
            preview={this.preview}
            handleUpload={this.handleUpload}
          />
        ) : (
          <NoImageCard />
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
        loadImage(
          this.file,
          action(
            (canvas: any) => (this.preview = canvas.toDataURL(this.file.type))
          ),
          {
            canvas: true,
            orientation: data.exif ? data.exif.get("Orientation") : null
          }
        );
      });
    }
  };

  @action
  private handleUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.file) {
      this.isUploading = true;
      this.completed = 0;

      const filename = utils.getWeekNumber().join("-");
      const fileRef = storage.ref("menus").child(filename);
      const uploadTask = fileRef.putString(this.preview, "data_url");
      uploadTask.on("state_changed", this.handleUploadProgress);
    }
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
    this.props.history.push(routes.LANDING);
  };
}

export default UploadImage;
