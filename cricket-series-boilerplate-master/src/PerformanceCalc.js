let players = [];
const PerformanceCalculator=(runs,balls)=>{
      let average = runs/balls;
      if(runs>100 && balls <50){
            average += (average*20/100)
      }else if(runs>50 && balls <20){
            average += (average*10/100)
      }else if(runs>30 && balls <15){
            average += (average*1/100)
      }
      return average;
      // Write the Logic here
}

module.exports={PerformanceCalculator}
