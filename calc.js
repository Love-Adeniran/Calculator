disp.value =""
rem =[]
const displayToScreen=(e)=>{
    disp.value += e
    // rem.push(disp.value)
}

 
const equalTo=()=>{
   console.log(eval(disp.value))
//    answer = "="+ eval(disp.value)
   disp.value += answer;
   rem.push(disp.value)
}



// The delete button is not working perfectly
const deleteBtn=()=>{
    if(disp.value==""){
        console.log('field is empty')
    }
    else{
        // console.log([disp.value].splice(0, -1))
        // rem.push(disp.value)
        rem.splice(0,-1)
        console.log(rem)
    }
}

// clear button
const clear =()=>{
    alert('no be juju be dat!')
    console.log('no be juju be dat!');    
    // disp.value = "";
    // console.log(disp.value)
}