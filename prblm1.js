let sampleinput =[{name:"John",age:26,Country:"india"},{name:"siva",age:27,Country:"india"}];

const beremoveobject = (sample) => {
      sample.forEach(s => {
      delete s.Country;
      })
      return sampleinput;
}
 
console.log(beremoveobject(sampleinput));
