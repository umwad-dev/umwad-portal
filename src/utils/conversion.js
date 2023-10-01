export const formatTimestampDate = (date) => {
  const formatDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  return formatDate.toLocaleTimeString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const dateDiffInDays = (a, b) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const getTimeAgo = (nowDate, createdAtDate) => {
  const diff = nowDate.getTime() - createdAtDate.getTime();
  const minutes = diff / 60000;

  if (minutes > 59) {
    const days = dateDiffInDays(createdAtDate, nowDate);

    if (days > 1) {
      return `${days} days ago`;
    }

    return "1 day ago";
  } else {
    if (minutes > 1) {
      return `${Math.trunc(minutes)} mins ago`;
    }

    return `${Math.trunc(minutes)} min ago`;
  }
};
