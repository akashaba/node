const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   let totalCaloriesPerWeek = (cycling + running + swimming)*2;
   let calorieIntakePerMonth = extraCalorieInTake*30;

   let totalCalorieslost = (totalCaloriesPerWeek*4) - calorieIntakePerMonth;
   weightLostInAMonth = totalCalorieslost/1000; 
   if(weightLostInAMonth <= 1){
      weightLostInAMonth = -1;
   }

   

   return weightLostInAMonth;
   
}
console.log(calculateWeightLostInAMonth(500,0,0,100));

module.exports = calculateWeightLostInAMonth

