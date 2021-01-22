document.getElementById('button1').addEventListener('click',loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

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

function loadCustomers(evt) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', './customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      const output = customers.reduce((acc, customer) => {
        const {id, name, company, phone} = customer;
        return acc + `
          <ul>
            <li>ID: ${id}</li>
            <li>Name: ${name}</li>
            <li>Company: ${company}</li>
            <li>Phone: ${phone}</li>
          </ul>
        `;
      },'');

      document.querySelector('#customers').innerHTML = output;

    }
  };

  xhr.send();
}
