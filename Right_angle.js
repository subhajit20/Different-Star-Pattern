
/**
 * Right angle star printing
 * @param {4} line @number
 * @param {4} totalLine @number
 */
function Right_Triangle(line,totalLine){
    let i = 0;
    let pattern = '';

    let gap = (totalLine - i)-1;

    while(i <= line && totalLine >= 0){
        if(i <= gap && totalLine != 0){
            pattern = pattern+"\t";
            i = i + 1;
        }else if(totalLine == 0 && i <= line){
            pattern = pattern.concat("*\t");
            i = i + 1;
        }else if(i > gap){
            pattern = pattern.concat("*\t");
            i = i + 1;
            if(i > line){
                pattern = pattern+'\n';
                i = 0;
                totalLine = totalLine - 1;
                gap = (totalLine - i)-1;
            }
            
        }
    }
    return pattern;
}

const result = Right_Triangle(3,3);
console.log(result)