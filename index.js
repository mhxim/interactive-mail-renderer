require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
});

require("./server.jsx");
