document.getElementById('button1').addEventListener('click',loadCustomer );

function loadCustomer(evt) {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', './customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const {id, name, company, phone} = customer;
      const output = `
        <ul>
          <li>ID: ${id}</li>
          <li>Name: ${name}</li>
          <li>Company: ${company}</li>
          <li>Phone: ${phone}</li>
        </ul>
      `;
      document.querySelector('#customer').innerHTML = output;
    }
  };
  xhr.send()
}