export default function themeBuilder(configString) {
  let config = {};

  try {
    config = (configString !== null ? JSON.parse(configString) : {}) || {};
  } catch (er) {}

  const { theme: configTheme = {} } = config;
  return {
    logoPath: configTheme.logoPath || "https://via.placeholder.com/150",
    primaryColor: configTheme.primaryColor || "#e6e6e6",
    secondaryColor: configTheme.secondaryColor || "#fff",
    fontColor: configTheme.fontColor || "#000",
  };
}
