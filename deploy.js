require("dotenv").config();
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/web/",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy.deploy(config, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log("finished:", res);
  }
});

console.log("All done..");
