'use strict';

//Pike Place Store

var hours = ['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-Noon', 'Noon-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm', '7pm-8pm'];
var arrayLength = hours.length;
var i;
console.log();

var pike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgOrder: 6.3,
  hourlyCookies: 0,
  totalCookies: 0,
  calculateHourlyOrders: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  minOrders: 23,
  maxOrders: 65,
  avgOrder: 6.3,
  hourlyOrders: 0,
  hourlyCookies: 0,
  totalCookies: 0,
  calculateHourlyOrders: function() {
    return Math.ceil(Math.random() * (this.maxOrders - this.minOrders + 1) + this.minOrders);
  },
  calculateHourlyCookies: function() {
    return Math.ceil(this.calculateHourlyOrders() * this.avgOrder);
  }
};

for (i = 0; i < arrayLength; i++) {
  var liEl = document.createElement('li');
  pike.hourlyCookies = (pike.calculateHourlyCookies());
  pike.totalCookies += pike.hourlyCookies;
  liEl.textContent = (hours[i] + ': ' + pike.hourlyCookies);
  document.body.appendChild(liEl);
};

var liEl = document.createElement('li');
liEl.textContent = ('Daily Total : ' + pike.totalCookies);
document.body.appendChild(liEl);

/*SeaTac Airport Store
    var liEl = document.createElement('li');
    pike.hourlyCookies = (pike.calculateHourlyCookies());
    pike.totalCookies += pike.hourlyCookies;
    liEl.textContent = (hours[i] + '  : ' + pike.hourlyCookies);
    document.body.appendChild(liEl);
  };

  var liEl = document.createElement('p');
  liEl.textContent = ('Total Cookies : ' + pike.totalCookies);
  document.body.appendChild(liEl);

// document.getByElementId("ids").innerHTML=register();





/*'use strict';

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

var pike = {
  minOrders: 23,
  maxOrders: 65,
  avgOrder: 6.3,
  hourlyOrders: 0,
  hourlyCookies: 0,
  totalCookies: 0,
  calculateHourlyOrders: function() {
    this.hourlyOrders = Math.ceil(Math.random() * (this.maxOrders - this.minOrders + 1) + this.minOrders);
    return Math.ceil(Math.random() * (this.maxOrders - this.minOrders + 1) + this.minOrders);
  }
};

pike.calculateHourlyOrders();
*/
