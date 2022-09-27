
// all numbers buttons that displays to screen
disp.value =""
rem =[]
const displayToScreen=(e)=>{
    disp.value += e
    rem.push(disp.value)
}

//  the Equal button
const equalTo=()=>{
   answer = "="+ eval(disp.value)
   disp.value += answer;
   rem.push(disp.value)
}



// The delete button is not working perfectly
const deleteBtn=()=>{
    if(disp.value===''){
        console.log('field is empty')
    }
    else{
        delet = rem.pop()
        disp.value= delet
        // rem.splice(0,-1)
        // console.log(rem)
    }
}


// clear button
const erase=()=>{
    disp.value = "";
}