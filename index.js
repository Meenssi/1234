function objForOf(){
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let data3 = document.getElementById("data3").value;
    var obj = [data1, data2, data3];
    for(item of obj){
        document.getElementById("ex14-3").innerHTML += item + '<br>';
    }
}