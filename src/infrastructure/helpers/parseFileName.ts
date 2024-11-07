export const parseFileName = (filePath: string) => {
  const encodedFileName = filePath.split("/").pop();

  if (!encodedFileName) return null;

  const fileName = decodeURIComponent(encodedFileName);
  const regex = /^([\w-]+)\s(.+)(\.\w+)$/;

  if (!regex.test(fileName)) {
    throw null;
  }

  const match = fileName.match(regex);
  return match ? { code: match[1], name: match[2], extension: match[3] } : null;
};
