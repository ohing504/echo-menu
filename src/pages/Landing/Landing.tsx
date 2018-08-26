import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import * as routes from "../../constants/routes";
import { storage } from "../../shared/firebase/firebase";
import * as utils from "../../shared/utils";
import MenuImageCard from "../MenuImage/MenuImageCard";

interface ILandingProps {
  history?: any;
}

@observer
class Landing extends React.Component<ILandingProps> {
  @observable
  private imageURL: string;

  @observable
  private isLoading: boolean;

  constructor(props: ILandingProps) {
    super(props);
    this.fetchMenu();
  }

  public render() {
    return (
      <div>
        {this.isLoading ? (
          <p>Loading...</p>
        ) : (
          <MenuImageCard imageURL={this.imageURL} />
        )}
      </div>
    );
  }

  @action
  private fetchMenu = () => {
    this.isLoading = true;
    const filename = utils.getWeekNumber().join("-");

    storage
      .ref("menus")
      .child(filename)
      .getDownloadURL()
      .then((url: string) => {
        this.imageURL = url;
        this.isLoading = false;
      })
      .catch((error: Error) => this.props.history.push(routes.UPLOAD));
  };
}

export default Landing;
