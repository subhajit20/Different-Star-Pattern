

function Hollo_Square_Pattern(totalrow,collumn){
    let i = 0;
    let row = 0;
    let pattern = '';
    while(i <= collumn-1 && row <= totalrow-1){
        if(row == 0 || row == totalrow-1){
            pattern = pattern+"*\t";
            i = i + 1;
            if(i > collumn-1 && row <= totalrow-1){
                i = 0;
                row = row + 1;
                pattern = pattern+'\n'
            }
        }else{
            if(i == 0 || i == collumn-1){
                pattern = pattern+"*\t";
                i = i + 1;
                
            }if(i > collumn-1 && row <= totalrow-1){
                i = 0;
                row = row + 1;
                pattern = pattern+'\n'
            }else{
                pattern = pattern+"\t";
                i = i + 1;
            }
            
        }
        
    }
    return pattern
}
const result = Hollo_Square_Pattern(4,4)
console.log(result)