function processAges(ages) {

  doubledAges=[]
   for (let i of ages) {
    
    doubledAges.push(i*2)
  } 
  console.log(doubledAges);
    ages.forEach(age => {
    console.log(age);
    
  });
   let adults =ages.filter(age =>{
     return age>=18 
    
    
  })
   console.log(adults);

   let ageStrings =ages.map (age=>{
    return age.toString()
  }
    )
  console.log(ageStrings);

  return { doubledAges, adults, ageStrings };
}
ages=[25, 18, 12, 16, 40]
processAges(ages)

module.exports = processAges;
