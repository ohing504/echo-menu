export const humanFileSize = (size: number, si: boolean = true) => {
  const thresh = si ? 1000 : 1024;
  const prefix = si ? "kMGTPEZY" : "KMGTPEZY";
  const postfix = si ? "B" : "iB";

  if (size === 0 || size < thresh) {
    return size.toFixed() + " Bytes";
  }

  const i = Math.floor(Math.log(size) / Math.log(thresh));
  return (
    (size / Math.pow(thresh, i)).toFixed(2) + " " + prefix[i - 1] + postfix
  );
};
