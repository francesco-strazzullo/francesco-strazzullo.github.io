var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()
const password = process.env.FTP_PASSWORD

const config = {
  username: '1910789@aruba.it',
  password,
  host: 'ftp.francescostrazzullo.info',
  port: 21,
  localRoot: 'public',
  remoteRoot: '/www.francescostrazzullo.info',
  exclude: ['.git', 'node_modules', 'deploy.js']
}

ftpDeploy.deploy(config, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('finished')
  }
})
