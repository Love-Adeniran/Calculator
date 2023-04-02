
// all numbers buttons that displays to screen
disp.value =""
const displayToScreen=(e)=>{
    disp.value += e
}

//  the Equal button
const equalTo=()=>{
    if(disp.value===''){
        return;
    }
    else{
        answer = eval(disp.value)
        disp.value = answer;
    }
  

}

// The delete button 
const deleteBtn=()=>{
    if(disp.value===''){
        console.log('field is empty')
    }
    else{
        disp.value= disp.value.slice(0,-1)
        // rem.splice(0,-1)
        // console.log(rem)
    }
}

// clear button
const erase=()=>{
    disp.value = "";
}

setInterval(()=>{
    let myDate = new Date()
    dispDate.innerHTML = `${myDate.toLocaleTimeString()}`
},)