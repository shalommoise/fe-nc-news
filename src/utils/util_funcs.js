export const formatDate = (fullTime) => {
  if (!fullTime) return "";
  let date = fullTime.split("T");
  let takeOutdash = date[0].split("-");
  let time = date[1].split(".")[0];

  return `${takeOutdash[0]}/${takeOutdash[1]}/${takeOutdash[2]}, ${time}`;
};
