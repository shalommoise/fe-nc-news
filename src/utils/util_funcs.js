export const formatDate = (fullTime) => {
  if (!fullTime) return "";
  let date = fullTime.split("T");
  let takeOutdash = date[0].split("-");
  let time = date[1].split(".")[0];

  return `${takeOutdash[0]}/${takeOutdash[1]}/${takeOutdash[2]}, ${time}`;
};
export const whatTimeIsit = () => {
  let time = Number(Date().split(" ")[4].split(":")[0]);

  if (time >= 0 && time < 12) return "Good Morning";
  else if (time >= 12 && time < 17) return "Good Afternoon";
  else if (time >= 17 && time < 23) return "Good Evening";
  return "Hello there";
};
