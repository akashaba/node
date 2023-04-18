const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    switch(choice){
        case "circle":
            if(radius!== undefined){
            area = pi * radius * radius;
            }else{
                area = -1;
            }
            break;

        case "square":
            if(side!== undefined){
            area = side * side;
            }else{
                area = -1;
            }
            break;

        case "rectangle":
            if(length!== undefined && breadth!== undefined){
            area = length * breadth;
            }else{
                area = -1;
            }
            break;

        default:
            area = -1;
            break;

            
    }
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    return area
}
module.exports = {calculateArea}
