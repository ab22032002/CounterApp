// init the count to store the count 
let count =0;
let countEl = document.getElementById("count-el")
// it brought it as h will be shown using console.log
console.log(countEl)
function increment()
{
    // body 
    // console.log("i am clicked");
    count++;
    countEl.innerText=count;
    console.log(count)
}
//  count++;
    // countEl.innerText=count;
    // we have changed the actual element using our Code : 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveel = document.getElementById("save-el")
let cntr="";
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    cntr=count+" - "
    // 3. Render the variable in the saveEl using innerText
    saveel.innerHTML+=cntr;
    // NB: Make sure to not delete the existing content of the paragraph
    // 4, Refresh the count with every call 
    count = 0;
    countEl.innerHTML=count;
    console.log(count)
}


// let name ="Ab9v"
// let greet = "hi my name is "
// let mygreet = greet + name;
// console.log(mygreet)

