array=[];
function submit(){
var name_1=document.getElementById("name_of_student_1").value;
var name_2=document.getElementById("name_of_student_2").value;
var name_3=document.getElementById("name_of_student_3").value;
var name_4=document.getElementById("name_of_student_4").value;



array.push(name_1);
array.push(name_2);
array.push(name_3);
array.push(name_4);
document.getElementById("display").innerHTML=array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sort(){
array.sort();
document.getElementById("display").innerHTML=array;


}






