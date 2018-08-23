import * as React from "react";

const MenuCard = ({ imageURL }) => (
  <div>
    <p>{new Date().toLocaleDateString("ko-KR")}</p>
    <div>
      <img src={imageURL} />
    </div>
  </div>
);

export default MenuCard;
