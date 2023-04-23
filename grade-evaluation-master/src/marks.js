// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let subjects = [math, english, science, social, language]
            for (const i of subjects) {
                if(i === undefined){
                    reject('Null values for marks')
                }
            }
            let total=subjects.reduce((a,b)=>a+b, 0)
            resolve(total)
        },1000)
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(totalMarks/5)
    }, 1000)
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(averageMarks>90){
            resolve('A+')
        }else if(averageMarks >=80){
            resolve('A')
        }else if(averageMarks >= 70){
            resolve('B')
        }else if(averageMarks >= 60){
            resolve('C')
        }else if(averageMarks >= 50){
            resolve('E')
        }else{
            resolve('F')
        }
        
       })
        
    
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
