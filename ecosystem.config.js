module.exports = {
  apps: [
    {
      name: "notes-h5",
      script: "note-h5-deploy.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "47.111.242.147",
      ref: "origin/main",
      repo: "git@github.com:docterlei/notes-h5.git",
      path: "/workspace/notes-h5",
      "post-deploy":
        "git reset --hard && git checkout master && git pull && pm2 startOrReload ecosystem.config.js",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
