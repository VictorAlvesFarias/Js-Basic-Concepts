function insert(num) {
    document.getElementById('ocult_result_calculator').innerHTML += num;
    document.getElementById('result_calculator').innerHTML += num;
}

function insert_simbols(num,num_style) {
    document.getElementById('result_calculator').innerHTML += num_style;
    document.getElementById('ocult_result_calculator').innerHTML += num;
}

function clear(num) {
    document.getElementById('ocult_result_calculator').innerHTML = ('');
    document.getElementById('result_calculator').innerHTML = ('');
}  

function equal() {
    var result = document.getElementById('ocult_result_calculator').innerHTML;
    document.getElementById('ocult_result_calculator').innerHTML = eval(result);
    document.getElementById('result_calculator').innerHTML = eval(result);
}  