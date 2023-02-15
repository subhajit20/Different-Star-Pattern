console.log("********** PYRAMID **********\n");

let i = 1;
let row = 1;
let pattern = '';
let highpoint = 5;
let numofstar = (2*row)-1;
let mid = Math.ceil(highpoint/2);
let start = '';
let round = 3

while(i <= highpoint && row <= round){
    if(row == 1){
        pattern = pattern+" ";
        i+=1;
        if(i == mid){
            pattern = pattern+"*"
            i = i + 1
        }else if(i > highpoint && row <= round){
            pattern = pattern+'\n'
            i = 1;
            row = row + 1;
            numofstar = (2*row)-1;
            if(highpoint % numofstar == 0){
                start = (highpoint/numofstar)+1;
            }else{
                start =  Math.floor(highpoint/numofstar)+1
            }
        }
    }else{
        if(row < round){
            if(i < start || i > numofstar+1){
                pattern = pattern+" ";
                i+=1;
                if(i > highpoint && row <= round){
                    pattern = pattern+'\n'
                    i = 1;
                    row = row + 1;
                    numofstar = (2*row)-1;
                    if(highpoint % numofstar == 0){
                        start = (highpoint/numofstar)+1;
                    }else{
                        start =  Math.floor(highpoint/numofstar)+1
                    }
                }
            }else if(i >= start && i <= numofstar+1){
                pattern = pattern+"*";
                i+=1;
            }
        }else{
            pattern = pattern+'*';
            i = i + 1
        }
    }
}
console.log(pattern)