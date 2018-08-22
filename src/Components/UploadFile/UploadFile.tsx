import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import PreviewCard from "./PreviewCard";

@observer
class UploadFile extends React.Component {
  @observable
  private file: any;

  @observable
  private preview: any;

  public render() {
    return (
      <div>
        <input
          accept="image/*"
          id="flat-button-file"
          type="file"
          onChange={this.handleFiles}
        />

        {this.file && <PreviewCard preview={this.preview} file={this.file} />}
      </div>
    );
  }

  @action
  private revoke = () => URL.revokeObjectURL(this.preview);

  @action
  private handleFiles = (e: any) => {
    if (this.file === e.target.files[0]) {
      return;
    }

    if (e.target.files[0]) {
      this.file = e.target.files[0];
      this.revoke();
      this.preview = URL.createObjectURL(this.file);
    }
  };
}

export default UploadFile;
