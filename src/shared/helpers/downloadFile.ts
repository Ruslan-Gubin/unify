export const downloadFile = (url: string, fileName: string) => {
  fetch(url)
    .then((response) => response.blob())
    .then((response) => {
      const urlObject = URL.createObjectURL(response);
      const link = document.createElement("a");
      link.href = urlObject;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(urlObject);
      link.remove();
    })
  .catch(error => console.error(error))
};
