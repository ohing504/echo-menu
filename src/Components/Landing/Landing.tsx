import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { storage } from "../../shared/firebase/firebase";
import * as utils from "../../shared/utils";
import MenuImageCard from "../Menu/MenuImageCard";
import UploadFile from "../UploadFile/UploadFile";

@observer
class Landing extends React.Component {
  @observable
  private imageURL: string | undefined;

  @observable
  private isLoading: boolean;

  constructor(props: any) {
    super(props);
    this.fetchMenu();
  }

  public render() {
    return (
      <div>
        {this.isLoading && <p>Loading...</p>}
        {!this.isLoading && this.imageURL ? (
          <MenuImageCard imageURL={this.imageURL} />
        ) : !this.isLoading ? (
          <UploadFile />
        ) : (
          undefined
        )}
      </div>
    );
  }

  @action
  private fetchMenu = () => {
    this.isLoading = true;
    this.imageURL = undefined;
    const filename = utils.getWeekNumber().join("-");
    const fileRef = storage.ref("menus").child(filename);
    fileRef
      .getDownloadURL()
      .then((url: string) => {
        this.imageURL = url;
        this.isLoading = false;
      })
      .catch((error: Error) => {
        this.imageURL = undefined;
        this.isLoading = false;
      });
  };
}

export default Landing;
