import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const useDownload = (id) => {
  try {
    domtoimage
      .toBlob(document.getElementById(id))
      .then(function (blob) {
        window.saveAs(blob, "meme.png");
      });
  } finally {
    
  }

  return {};
};

export default useDownload;
