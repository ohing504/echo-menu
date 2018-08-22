import * as React from "react";

import * as util from "../../shared/utils";

type IOnSubmit = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface IPreviewCard {
  preview: string;
  file: { name: string; size: number };
  onSubmit: IOnSubmit;
}

const PreviewCard = ({ preview, file, onSubmit }: IPreviewCard) => (
  <div>
    <div>
      <img src={preview} title={file.name} />
      <div>
        <h3>{file.name}</h3>
        <p>{util.humanFileSize(file.size)}</p>
      </div>

      <div>
        <button onClick={onSubmit}>Upload</button>
      </div>
    </div>
  </div>
);

export default PreviewCard;
