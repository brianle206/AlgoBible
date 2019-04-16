function porpCity(split){


   


   for (let i in split) {
   var validCity = this.ValidateCity(split.slice(0, i).join(' '));
   var validCityDashed = this.ValidateCity(split.slice(0, i).join('-'));
   if (validCity === true) {
   var city = split.slice(0, i).join(' ');
   var validState = this.ValidateState(split[i]);
   if (validState === true) {
   var state = split.slice(i, i + 1).join(' ');
   return `${city}, ${state}`
   }
   }
}
}
console.log(porpCity("Portland-Oregon"));
