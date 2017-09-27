'use strict';

var cookieSalesTable = document.getElementById('')

var hours = ['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-Noon', 'Noon-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm'];
console.log();

var allStores = [];

  function Store(location, minCust, maxCust, avgOrder/*, hourlySales, dailyInventory*/) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgOrder = avgOrder;
    //An array to hold hourly sales data
    this.hourlySalesArray = [];
    this.dailyInventory = 0;
    this.hourlySales = function() {
      for (var i = 0; i < hours.length; i++) {
      var randomHourlyCookies = Math.ceil((Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgOrder);
      this.hourlySalesArray.push(randomHourlyCookies);
      return randomHourlyCookies;
    }
  }
    allStores.push(this);
  }

new Store('1st and Pike', 23, 65, 6.3);

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
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
/* Pike Place Store


var pike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgOrder: 6.3,
  hourlyCookies: 0,
  totalCookies: 0,
  calculateHourlyOrders: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  calculateHourlyCookies: function() {
    return Math.ceil(this.calculateHourlyOrders() * this.avgOrder);
  }
};

for (i = 0; i < array.length; i++) {
  var liEl = document.createElement('li');
  this.hourlyCookies = (this.calculateHourlyCookies());
  this.totalCookies += this.hourlyCookies;
  liEl.textContent = (hours[i] + ': ' + this.hourlyCookies);
  document.body.appendChild(liEl);
};

var liEl = document.createElement('li');
liEl.textContent = ('Daily Total : ' + this.totalCookies);
document.body.appendChild(liEl);

SeaTac Airport Store

var hours = ['6am - 7am', '7am - 8am', '8am - 9am', '9am - 10am', '10am - 11am', '11am - Noon', 'Noon - 1pm', '1pm - 2pm', '2pm - 3pm', '3pm - 4pm', '4pm - 5pm', '5pm - 6pm', '6pm - 7pm', '7pm - 8pm'];
console.log();

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgOrder: 1.2,
  hourlyCookies: 0,
  totalCookies: 0,

  }
};

seaTac.calculateHourlyOrders();

*/
