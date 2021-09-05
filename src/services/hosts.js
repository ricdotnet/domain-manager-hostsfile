const os = require('os');
const fs = require('fs').promises;

const { replace, reset } = require('../../assets/stubs');

/**
 * Get the current hosts file content.
 * @returns hostsFile
 */
async function getHosts() {
  try {
    let data = await fs.readFile('/etc/hosts');
    return data.toString();
  } catch (e) {
    return e;
  }
}

/**
 * Adds a new domain to the current hosts file.
 * @param {string} domain
 * @returns newHostsFile
 */
async function addHosts(domain) {
  let hostsFile = await getHosts();
  hostsFile += await replace(domain, 'newHosts');

  return hostsFile;
}

/**
 * Saves the hosts file with the content sent as a parameter.
 * @param {string // blob} content 
 */
async function saveHosts(content) {
  return await fs.writeFile('/etc/hosts', content)
}

/**
 * Resets the hosts file to its original state.
 */
async function resetHosts() {
  let data = await reset();
  return await fs.writeFile('/etc/hosts', data);
}

module.exports = {
  getHosts,
  addHosts,
  resetHosts,
  saveHosts
};
