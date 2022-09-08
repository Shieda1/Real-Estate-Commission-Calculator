// https://www.omnicalculator.com/finance/real-estate-commission

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const commissionRadio = document.getElementById('commissionRadio');
const commissionamountRadio = document.getElementById('commissionamountRadio');
const housepriceRadio = document.getElementById('housepriceRadio');
const ownerreceivesRadio = document.getElementById('ownerreceivesRadio');

let commission;
let ownerreceives;
let commissionamount = v1;
let houseprice = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

commissionRadio.addEventListener('click', function() {
  variable1.textContent = 'Commission amount';
  variable2.textContent = 'House price';
  commissionamount = v1;
  houseprice = v2;
  result.textContent = '';
});

commissionamountRadio.addEventListener('click', function() {
  variable1.textContent = 'House price';
  variable2.textContent = 'Owner receives';
  houseprice = v1;
  ownerreceives = v2;
  result.textContent = '';
});

housepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Commission amount';
  variable2.textContent = 'Commission';
  commission = v1;
  commission = v2;
  result.textContent = '';
});

ownerreceivesRadio.addEventListener('click', function() {
  variable1.textContent = 'House price';
  variable2.textContent = 'Commission amount';
  houseprice = v1;
  commissionamount = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(commissionRadio.checked)
    result.textContent = `Commission = ${computecommission().toFixed(2)}`;

  else if(commissionamountRadio.checked)
    result.textContent = `Commission amount = ${computecommissionamount().toFixed(2)}`;

  else if(housepriceRadio.checked)
    result.textContent = `House price = ${computehouseprice().toFixed(2)}`;

  else if(ownerreceivesRadio.checked)
    result.textContent = `Owner receives = ${computeownerreceives().toFixed(2)}`;
})

// calculation

function computecommission() {
  return (Number(commissionamount.value) / Number(houseprice.value)) * 100;
}

function computecommissionamount() {
  return Number(houseprice.value) - Number(ownerreceives.value);
}

function computehouseprice() {
  return Number(commissionamount.value) / (Number(commission.value) / 100);
}

function computeownerreceives() {
  return Number(houseprice.value) - Number(commissionamount.value);
}