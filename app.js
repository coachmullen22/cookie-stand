'use strict';
var allStores = [];
var storeSalesTable = document.getElementById('salesTable')
var hours = ['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-Noon', 'Noon-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm'];

  function Store(location, minCust, maxCust, avgOrder) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgOrder = avgOrder;
    this.hourlyCustomers = 0;
    this.cookiesSoldHourly = [];
    this.dailyInventory = 0;
    allStores.push(this);
}

/*for (var i = 0; i < hours.length; i++) {
  this.cookiesSoldHourly.push(Math.ceil((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgOrder));
}
*/
  var pike = new Store('1st and Pike', 23, 65, 6.3);
  var seaTac = new Store('SeaTac', 3, 24, 1.2);
  var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
  var capHill = new Store('Capitol Hill', 20, 38, 2.3);
  var alki = new Store('Alki', 2, 16, 4.6);
console.log(pike, seaTac, seaCenter, capHill, alki);


/*Store.prototype.render = function() {
  var trEL = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldHourly;
  trEl.appendChild(tdEl);
}

/*this.hourlySalesArray = function() {
  for (var i = 0; i < hours.length; i++)
  thEl.textContent = (hours[i]);
  trEl.appendChild(thEl); */

function makeHeaderRow() {
// create tr
  var trEl = document.createElement('tr');
// create th
  var thEl = document.createElement('th');
// give th content (heading title)
  thEl.textContent = 'Stores';
  trEl.appendChild(thEl);

// give th content (heading title)
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = (hours[i]);
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
// give th content (heading title)
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);
  storeSalesTable.appendChild(trEl);
}

/*function storeRowsFTW() {
  for(var i in ) {
    [i].render();
  }
}
*/
makeHeaderRow();
//storeRowsFTW();
