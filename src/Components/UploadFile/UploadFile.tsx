import { UploadTaskSnapshot } from "@firebase/storage-types";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { storage } from "../../shared/firebase/firebase";
import * as utils from "../../shared/utils";
import PreviewCard from "./PreviewCard";

@observer
class UploadFile extends React.Component {
  @observable
  private file: any;

  @observable
  private preview: string;

  @observable
  private completed: number = 0;

  @observable
  private isUploading: boolean = false;

  public render() {
    return (
      <div>
        <h3>데이터가 없습니다...</h3>

        <input
          accept="image/*"
          id="flat-button-file"
          type="file"
          onChange={this.handleFiles}
        />

        {this.file && (
          <PreviewCard
            preview={this.preview}
            file={this.file}
            onSubmit={this.handleUpload}
          />
        )}

        {this.isUploading && <p>{this.completed} %</p>}
      </div>
    );
  }

  @action
  private revoke = () => URL.revokeObjectURL(this.preview);

  @action
  private handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.revoke();
      this.preview = URL.createObjectURL(this.file);
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

export default UploadFile;
