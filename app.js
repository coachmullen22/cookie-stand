'use strict';
var allStores = [];
var storeSalesTable = document.getElementById('salesTable');
var hours = ['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-Noon', 'Noon-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm'];

function Store(location, minCust, maxCust, avgOrder) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgOrder = avgOrder;
  this.customersPerHourArray = [];
  this.cookiesSoldHourlyArray = [];
  this.calculateDailyTotal = 0;
  this.customersPerHour();
  this.cookieSalesPerHour();
  allStores.push(this);
}

Store.prototype.customersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHourArray.push(Math.ceil(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust);
  }
};

Store.prototype.cookieSalesPerHour = function() {
  this.calculateDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersPerHourArray[i] * this.avgOrder);
    this.cookiesSoldHourlyArray.push(oneHour);
    this.calculateDailyTotal += oneHour;
  }
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
console.log(pike, seaTac, seaCenter, capHill, alki);

//Table Header Row Section
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = (hours[i]);
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  storeSalesTable.appendChild(trEl);
}
//Table Data Section
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldHourlyArray[i];
    trEl.appendChild(tdEl);
  }

  for (i = 0; i < hours.length; i++);
  tdEl = document.createElement('th');
  tdEl.textContent = this.calculateDailyTotal;
  trEl.appendChild(tdEl);

  storeSalesTable.appendChild(trEl);
};
//Table Footer Row Section
function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Sales For All Locations';
  trEl.appendChild(thEl);

  var totalofTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesSoldHourlyArray[i];
      totalofTotals += allStores[j].cookiesSoldHourlyArray[i];
    }
    thEl = document.createElement ('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  for (var i = 0; i < hours.length; i++)
  thEl = document.createElement ('th');
  thEl.textContent = totalofTotals;
  trEl.appendChild(thEl);

  storeSalesTable.appendChild(trEl);
}

function storeRowsFTW() {
  for(var i in allStores) {
    allStores[i].render();
  }
}

makeHeaderRow();
storeRowsFTW();
makeFooterRow();

//
