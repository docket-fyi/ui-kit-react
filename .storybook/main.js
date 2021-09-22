const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config) => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
      },
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      include: path.resolve(__dirname, "../.storybook/images"),
      use: {
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/",
        },
      },
    });
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "../static/icons"),
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "icons/",
        },
      },
    });
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      include: path.resolve(__dirname, "../static/fonts"),
    });
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src/"),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@sb": path.resolve(__dirname, "../.storybook"),
      "@static": path.resolve(__dirname, "../static"),
    };
    return config;
  },
};
