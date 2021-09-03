const panel = require('express').Router();

module.exports = panel;

const { addHosts, resetHosts } = require('../../services/hosts');

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

panel.post('/reset', async (req, res) => {
  try {
    resetHosts();
  } catch (e) {
    console.log(e);
  }

  res.end();
});
