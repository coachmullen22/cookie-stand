'use strict';
var cookieSalesTable = document.getElementById('')
var hours = ['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-Noon', 'Noon-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm'];
var allStores = [];

  function Store(location, minCust, maxCust, avgOrder) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgOrder = avgOrder;
    this.hourlyCustomers = 0;
    this.cookiesSoldHourly = [];
    this.dailyInventory = 0;
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldHourly.push(Math.ceil((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgOrder));
  }
}
//Store.prototype.cookiesSoldHourly = function() {
//}

  var pike = new Store('1st and Pike', 23, 65, 6.3);
  var seaTac = new Store('SeaTac', 3, 24, 1.2);
  var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
  var capHill = new Store('Capitol Hill', 20, 38, 2.3);
  var alki = new Store('Alki', 2, 16, 4.6);
console.log(pike, seaTac, seaCenter, capHill, alki);

/*
function makeTableRow() {
// create tr
  var trEl = document.createElement('tr');
// create th
  var tdEl = document.createElement('td');
// give th content (heading title)
this.hourlySalesArray = function() {
  for (var i = 0; i < hours.length; i++)
thEl.textContent = (hours[i]);
trEl.appendChild(thEl);
}
*/
