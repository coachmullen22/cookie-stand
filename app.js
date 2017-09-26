'use strict';

var hours = ['6am - 7am', '7am - 8am', '8am - 9am', '9am - 10am', '10am - 11am', '11am - Noon', 'Noon - 1pm', '1pm - 2pm', '2pm - 3pm', '3pm - 4pm', '4pm - 5pm', '5pm - 6pm', '6pm - 7pm', '7pm - 8pm'];
var arrayLength = hours.length;
var i;
console.log();

var pike = {
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
    liEl.textContent = (hours[i] + ' - ' + pike.calculateHourlyCookies());
//    document.appendChild(liEl);
  };

pike.calculateHourlyOrders();
pike.calculateHourlyCookies();







/*'use strict';

var hours = ['6am - 7am', '7am - 8am', '8am - 9am', '9am - 10am', '10am - 11am', '11am - Noon', 'Noon - 1pm', '1pm - 2pm', '2pm - 3pm', '3pm - 4pm', '4pm - 5pm', '5pm - 6pm', '6pm - 7pm', '7pm - 8pm'];
console.log();

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
