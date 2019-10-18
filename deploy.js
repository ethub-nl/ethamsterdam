require("dotenv").config();
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/web/",
  remoteRoot: "/public_html/css",
  include: ["*", "**/*"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
};

// use with callback
ftpDeploy.deploy(config, function(err, res) {
  if (err) {
    console.log("Error deploying..");
    console.log(err);
    process.exit(1);
  } else {
    console.log("Finished deployment..");
    console.log(res);
    process.exit(0);
  }
});
