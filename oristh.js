const inputBOX =  document.getElementById("input-box");
const listcontaner =  document.getElementById("list-container");
function addtask(){
    if(inputBOX.value === ''){
        alert("please write");

    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBOX.value;
        listcontaner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 


    }
    inputBOX.value = '';
    saveData()
}
listcontaner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem("data", listcontaner.innerHTML);

}
function showTask(){
    listcontaner.innerHTML = localStorage.getItem("data");
}
showTask();