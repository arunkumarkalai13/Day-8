let sampleinput =[{name:"John",age:26,Country:"india"},
{name:"siva",age:27,Country:"india"}]
sampleinput.forEach(s => {
delete s.Country;
})
console.log(sampleinput);

