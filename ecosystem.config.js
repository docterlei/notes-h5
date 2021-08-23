module.exports = {
  apps: [
    {
      name: "notes-h5",
      script: "notes-h5-deploy.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "47.111.242.149",
      ref: "origin/main",
      repo: "git@github.com:docterlei/notes-h5.git",
      path: "/workspace/notes-h5",
      "post-deploy":
        "git reset --hard && git checkout master && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js", //
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
