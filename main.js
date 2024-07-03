let input = document.getElementById('input');
let result=document.getElementById('error');
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let value = input.value.trim();
    if(value==''){
        result.innerHTML='enter your email';
        input.style.border='1px solid red';
    }
    else if(!validateEmail(value)){
        result.innerHTML='enter a valid email';
        input.style.border='1px solid red';
    }
    else{
        result.innerHTML='';
         input.style.border='1px solid green';
    }
})
const validateEmail = (value) => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };