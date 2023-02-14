let i = 0;
let collumn = 3;
let row = 0;
let totalrow = 3
let higheststar = (2*totalrow-1)-1
let mid = Math.floor(higheststar/2)+1

let pattern = '';
while(i <= collumn-1 && row <= totalrow-1){
    if(i != mid){
        pattern = '*\t';
        i = i + 1;
    }if(i > collumn-1){
        i = 0;
        pattern = pattern+'\n'
        row = row + 1;
    }else if(i == mid){
        pattern = pattern+'*\t';
        i = i + 1
    }

    i = i + 1;
}
console.log(pattern)