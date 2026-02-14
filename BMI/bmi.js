document.getElementById('sumitbtn').addEventListener('click',(e)=>{

    e.preventDefault();

  const height = parseInt(document.getElementById('height').value)
const Weight = document.getElementById('Weight').value;
const result = document.getElementById('Result');

if(height === "" || height < 0 || isNaN(height)){
result.innerHTML = "please give a valid height"
}else if(Weight === "" || Weight < 0 || isNaN(Weight)){
result.innerHTML = "please give a valid Weight"
} else{
    const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`
}
})
   

 