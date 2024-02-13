"use strict"

const arays = [1,2,3,4];

function result (aray){
    const arays = [1,2,3,4];
    return aray.map(x => x+2);
}
console.log(result(arays));


const objectArray = profile();



function profile() {
    const obj = {
        name: [Text = "たこ", "イカ"],
        age: [String = 28],
        likes: [Text = "ギャン"]
    };

    const objectArray = Object.keys(obj).map(key => {
        const value = obj[key];
        value["id"] = key;
        return value;
    });
    return objectArray;
}
console.log(objectArray);
