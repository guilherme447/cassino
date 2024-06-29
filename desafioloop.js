let nums = [];
while (nums.length + 1 <= 100) {
    nums.push(nums.length + 1)

}
console.log(nums)


function N() {


    for (const numero of nums) {


        if (numero % 3 === 0) {
            console.log(`${numero} é FU`)

        } else if (numero % 5 === 0) {
            console.log(`${numero} é BANGA `)
        } else {
            console.log(`${numero} é FUBANGA`)
        }

    }








}

N()