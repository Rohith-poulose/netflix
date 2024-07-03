var form1 =document.getElementById('first');
var form2 = document.getElementById('second');

function openform2(){
  form1.style.display='none';
  form2.style.display='block';
    event.preventDefault();
}
function openform1(){
    form2.style.display='none';
    form1.style.display='block';
    event.preventDefault();
}
