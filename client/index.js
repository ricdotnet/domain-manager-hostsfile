'use-strict';

const area = document.querySelector('textarea[name=hostsContent]');

/* 
{
  method: 'GET / POST / PUT / DELETE',
  headers: .....,
  mode: 'cors',
  cache: 'default',
  data: data
}

this can be inserted directly into  the fecth() or created as a separate object
*/

async function getHosts() {
  let response = await fetch('http://localhost:3000/panel/get', {
    method: 'GET',
  });
  let data = await response.json();

  area.value = data.message;
}

async function saveHosts() {
  let body = { content: area.value };

  if (body === undefined || body === '')
    return alert('you cant save empty hosts files...');

  // let formData = new FormData()
  // formData.append('body', body)

  fetch('http://localhost:3000/panel/save', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    console.log('hey');
  });
}
