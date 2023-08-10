function humanReadable(seconds) {
  function twoDigitsNumber(number) {
    return String(number).padStart(2, "0");
  }
  let hour, minute, second;

  if (seconds >= 3600) {
    hour = Math.trunc(seconds / 3600);
    let remain = seconds % 3600;

    minute = Math.trunc(remain / 60);

    second = remain % 60;
  } else {
    hour = 0;
    minute = 0;
    second = 0;
    minute = Math.trunc(seconds / 60);
    second = seconds % 60;
  }
  let hourr = twoDigitsNumber(hour);
  let minutee = twoDigitsNumber(minute);
  let secondd = twoDigitsNumber(second);
  if (isNaN(minutee) || isNaN(secondd)) {
    minutee = "00";
    secondd = "00";
  }
  return `${hourr}:${minutee}:${secondd}`;
}

console.log(humanReadable(86400));
