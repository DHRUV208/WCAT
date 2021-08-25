#!/usr/bin/env node

const fs = require("fs");//import statement
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments){
    if(i[0]=="-"){
         flags.push(i);
    } else if(i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else{
        filenames.push(i);
    }
}
// condition check
// if(flags.length==0 && filenames!=0){
//     for(let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// }else{
//     for(let flag of flags){
//         if(flag == "-rs"){ // remove spaces
//             for(let file of filenames){
//                 let fileData = fs.readFileSync(file,"utf-8");
//                 let fileDataArray = fileData.split(" ");
//                 console.log(fileDataArray);
//             }
//         }
//     }
// }
for(let file of filenames){
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags){
        if(flag=="-rs"){
            fileData = fileData.split(" ").join("");
        }
        if(flag =="-rn"){
            fileData = removeAll(fileData,"\r\n");
        }

        if(flag =="-rsc"){
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        if(flag == "-s"){
            let data= addSequence(filedata);
            console.log(data);
        }
        if(flag == "-sn"){
            let data= addSequenceToNonEmpty();
        console.log(data);
        }
        if(flag =="rel"){
            let ans = removeExtraLines(fileData)
            console.log(ans);
        }
        }
      //  fileData = tempString;
        
    }
    console.log(fileData);
}
function removeExtraLines(fileData){
    let contentArray=fileData.split("\r\n");
    let data=[];
    for(let i =1;i<contentArray.length;i++){
        if(contentArray[i]=="" && contentArray[i-1]==""){
            contentArray[i]=null;
        }
        if(contentArray[i]=="" &&contentArray[i-1]=="null"){
            contentArray[i]=null;
        }
        for(let i =0;i<contentArray.length;i++){
            if(contentArray[i]!=null){
                data.push(contentArray[i]);
            }
        }
        return data;
    }
}
function addSequence(filedata){
    contentArray=filedata.split("\r\n");
    for(let i=0;i<contentArray.length;i++){
        contentArray[i] = (i+1) +""+contentArray[i];
    }
}
function addSequenceToNonEmpty(filedata){
    contentArray=filedata.split("\r\n");
    let count=1;
    for(let i=0;i<contentArray.length;i++){
    if(countArray[i]!="")
        contentArray[i] = count +""+contentArray[i];
    count++;
    }
}
function removeAll(string , removalData){
    return string.split(removalData).join("");
}