import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const useDownload = (id) => {

  console.log(id)
  try {
    domtoimage.toPng(document.getElementById(id)).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = dataUrl;
      link.click();
    });
  } finally {
  }

  return {};
};

export default useDownload;
