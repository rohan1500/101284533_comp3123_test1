//Rohan Khullar-101284533
function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        try {
            var stringArray = array.filter(item => typeof item == "string") 
            
            var lowerStrArray = stringArray.map(
                x => x.toLowerCase()) 

            resolve(lowerStrArray)
        } catch (e) {
            reject(e.message)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const output = async() => {
    var OUT = await lowerCaseWords(mixedArray) //filters the non-strings
    console.log("ques1")
    console.log(OUT)
    console.log("ques2") //Pizza and wings will be displayed
}
output()