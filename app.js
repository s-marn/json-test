//javascript object
let myObj={
    "name":"มาน",
    "age": 41,
    "phone":null,
    "status":true,
    "languages" : ["ไทย","อังกฤษ","จีน"],
    "general" : {
        "weight":70,
        "height":170,
        "gender":"ชาย"
    }
}
console.log(myObj.languages[0])
console.log(myObj.general.gender)

const color =["แดง","เหลือง","ขาว"]
const allColor = ["ฟ้า","น้ำเงิน",...color]
const newColor = ["น้ำตาล","เทา","น้ำเงิน"]
allColor.push(...newColor)

console.log(allColor);