const newHostsStub = require("./newHostsStub");
const resetHostsStub = require("./resetHostsStub")

async function replace(domain) {
  let data = newHostsStub;
  return data.replace(/{{domain}}/g, domain)
}

async function reset() {
  return resetHostsStub;
}

module.exports = { replace, reset };