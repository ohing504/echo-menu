import { action, observable } from "mobx";
import { storage } from "../shared/firebase/firebase";
import * as utils from "../shared/utils";
import { IMenuStore } from "./types";

class MenuStore implements IMenuStore {
  public rootStore;

  @observable
  public isLoading;

  @observable
  public isExist;

  @observable
  public imageURL;

  private filename = utils.getWeekNumber().join("-");

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.isLoading = false;
    this.isExist = true;
    this.imageURL = "";
  }

  @action
  public fetchMenu = () => {
    this.isLoading = true;
    storage
      .ref("menus")
      .child(this.filename)
      .getDownloadURL()
      .then(
        action((url: string) => {
          this.imageURL = url;
          this.isLoading = false;
        })
      )
      .catch(
        action((error: Error) => {
          this.isExist = false;
          this.isLoading = false;
        })
      );
  };
}

export default MenuStore;
