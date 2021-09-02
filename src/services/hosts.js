const os = require("os");
const fs = require("fs").promises;

async function getHosts() {
  try {
    let data = await fs.readFile("/etc/hosts")
    return data.toString();
  } catch (e) {
    return e;
  }
}

async function addHosts(domain) {
  try {
    let oldHosts = await getHosts()
    oldHosts += `\n127.0.0.1 ${domain}\n::1 ${domain}`

    let newHosts = await fs.writeFile("/etc/hosts", oldHosts);
    return newHosts;
  } catch (e) {
    return e;
  }
}

module.exports = {
  getHosts,
  addHosts
}