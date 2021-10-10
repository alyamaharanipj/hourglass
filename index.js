const starPyramid = size => {
    let shape = ''
    for(let i = 0; i <= size - 2; i++){
        for(let j = 1; j <= i; j++){
            shape += " ";
        }
        for(let k = 1; k <= size - i; k++){
            shape += "* ";
        }
        console.log(shape);
        shape = '';
    }
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size - i; j++){
            shape += " ";
        }
        for(let k = 1; k <= i; k++){
            shape += "* ";
        }
        console.log(shape);
        shape = '';
    }
}

starPyramid(10)