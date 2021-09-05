const panel = require('express').Router();

module.exports = panel;

const { addHosts, resetHosts, getHosts, saveHosts } = require('../../services/hosts');

panel.get('/get', async (req, res) => {
  let hosts = await getHosts();
  res.status(200).send({code:200, message: hosts})
})

/**
 * Adds a new hosts config with the domain passed on the body
 */
panel.post('/add', async (req, res) => {
  if (!req.body.domain)
    return res
      .status(404)
      .send({ code: 404, message: 'No domain was present on the body.' });

  let domain = req.body.domain;
  await addHosts(domain)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));

  res.end();
});

/**
 * Saves the hosts file with the content passed on the body
 */
panel.post('/save', async (req, res) => {
  await saveHosts(req.body.content)

  res.end()
})


/**
 * Resets the hosts file to its orginal state
 */
panel.post('/reset', async (req, res) => {
  try {
    resetHosts();
  } catch (e) {
    console.log(e);
  }

  res.end();
});
