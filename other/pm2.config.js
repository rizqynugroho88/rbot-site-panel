module.exports = {
  apps: [
    {
      name: "Remix",
      script: "remix dev --trace-warnings",
      ignore_watch: ["."],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? "development",
      },
    },
    {
      name: "Postcss",
      script: "postcss styles/**/*.css --base styles --dir app/styles",
      autorestart: false,
      watch: [
        "./tailwind.config.js",
        "./app/**/*.ts",
        "./app/**/*.tsx",
        "./styles/**/*.css",
      ],
    },
  ],
};
