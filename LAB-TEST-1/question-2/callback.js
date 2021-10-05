// Rohan Khullar-101284533
const resolvedPromise = () => { //created a method resolved promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" } //message will be printed
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {  // created a metod rejected promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("delayed exception!")
            } catch (e) {
                var error = {"error": e.message }
                reject(error)
            }
        }, 500)
    })
}

const output = async() => { //calling both promises seprataely
    try{
        console.log("ques1")
        console.log(await resolvedPromise())
        await rejectedPromise()
        console.log("")
    } catch(e) {
        console.error(e);
    }
}
output()