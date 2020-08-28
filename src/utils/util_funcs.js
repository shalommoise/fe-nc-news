export const formatTime = (fullTime) => {
  if (fullTime === "" || undefined) return "";
  let arr = fullTime.split("T")[0];
  console.log(arr);
};
