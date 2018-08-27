import { configure } from "mobx";
import MenuStore from "./menuStore";

configure({ enforceActions: true });

class RootStore {
  public menuStore;

  constructor() {
    this.menuStore = new MenuStore(this);
    this.menuStore.fetchMenu();
  }
}

const rootStore = new RootStore();

export default rootStore;
