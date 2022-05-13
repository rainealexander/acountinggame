module.exports = {
  presets: [
    [
      "babel/preset-react",
      {
        development: process.env.PROJECT_MODE === "development"
      }
    ],
    "babel/preset-env"
  ]
};
