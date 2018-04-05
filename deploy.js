var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: "1910789@aruba.it",
    host: "ftp.francescostrazzullo.info",
    port: 21,
    localRoot: __dirname,
    remoteRoot: "/www.francescostrazzullo.info",
    exclude: ['.git', 'node_modules', 'deploy.js']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});