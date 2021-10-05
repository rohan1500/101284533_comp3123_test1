//Rohan Khullar-101284533
var fs = require('fs')
var path = "./Logs"

if (!fs.existsSync(path)) {  // files will be created
    fs.mkdirSync(path)
    process.chdir(path)
    console.log("ques3")
    for (let i = 0; i < 10; i++) {
        var num = `log${i}.txt`
        fs.writeFileSync(num, num)
        console.log("create files...", num)
    }
    console.log("*")

} else if(fs.existsSync(path)){ // files will be deletd 
    var file = fs.readdirSync(path)
    console.log("ques3")
    for (num of file) {
        fs.unlinkSync(`${path}/${num}`)
        console.log("delete files...", num)
    }
    console.log("*")
    fs.rmdirSync(path)
   
}