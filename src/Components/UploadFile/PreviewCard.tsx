import * as React from "react";

import * as util from "../../shared/utils";

interface IPreviewCard {
  preview: string;
  file: {
    name: string;
    size: number;
  };
}
const PreviewCard = ({ preview, file }: IPreviewCard) => (
  <div>
    <div>
      <img src={preview} title={file.name} />
      <div>
        <h3>{file.name}</h3>
        <p>{util.humanFileSize(file.size)}</p>
      </div>

      <div>
        <button color="primary">Upload</button>
      </div>
    </div>
  </div>
);

export default PreviewCard;
