let passportWithAddress = {
   name: 'Petr',
   surname: 'Petrov',
   address: {
      country: 'USA',
      city: 'LA',
   },
};

function deepCopy(obj) {
   if (obj === null || typeof obj !== 'object') {
      return obj;
   }

   let clone = Array.isArray(obj) ? [] : {};

   for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
         clone[key] = deepCopy(obj[key]);
      }
   }

   return clone;
}

let passportCopy = deepCopy(passportWithAddress);
passportCopy.address.city = 'Bobryisk';

console.log(passportCopy.address.city);
console.log(passportWithAddress.address.city);
