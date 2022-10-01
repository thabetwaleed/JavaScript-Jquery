document.write("<h1>salamo Alaykom</h1>");
//for comments
var myVariable="This is a text";
  
document.write(myVariable);
var myname="thabet1";
if(myname=="thabet")
{
    document.write("<br>Thats my name too!");
}
else{
    document.write("<br>Hello MR:"+myname);
}

for(i=0;i<10;i++)
{
    document.write("<br>Line Number:"+i);
}

var arr=new Array(4);
arr[0]="Ahmad";
arr[1]=2;
arr[2]=true;
arr[3]="Kamal";
var length=arr.length;

document.write("<br>The length of array is:"+length);

arr.forEach(element => {
    document.write("<br>"+element);
});

function showMessage()
{
    // var yourname=prompt("Please enter your name","ForExample:Thabet,Ahmad");
    var yourname=document.getElementById("txtName").value;
    alert("welcome mr: "+yourname);
}

function changeColor()
{
    var selectedColor=document.getElementById("ComboColors").value;
    var box=document.getElementById("box");

    box.style.backgroundColor=selectedColor;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


 