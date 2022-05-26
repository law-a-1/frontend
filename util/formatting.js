export function formatDate(datestring) {
  return new Date(datestring).toLocaleString();
}

const LogLevelColors = {
  DEBUG: "#53BD97",
  INFO: "#31B4D1",
  ERROR: "#F87575",
};

export function formatColor(level) {
  return LogLevelColors[level] || "#000000";
}
