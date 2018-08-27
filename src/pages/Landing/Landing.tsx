import { inject, observer } from "mobx-react";
import * as React from "react";
import { compose } from "recompose";

import MenuImageCard from "../MenuImage/MenuImageCard";
import UploadImage from "../UploadImage/UploadImage";

const Landing = ({ menuStore }) => (
  <div>
    {menuStore.isLoading ? (
      <p>Loading...</p>
    ) : !menuStore.isLoading && menuStore.isExist ? (
      <MenuImageCard menuStore={menuStore} />
    ) : !menuStore.isLoading && !menuStore.isExist ? (
      <UploadImage />
    ) : (
      undefined
    )}
  </div>
);

export default compose(
  inject("menuStore"),
  observer
)(Landing);
