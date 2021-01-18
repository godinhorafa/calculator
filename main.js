function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function igual() {
    var n = document.form.textview.value;
    if(n) {
        document.form.textview.value = eval(n);
    }
}

function apaga() {
    var n = document.form.textview.value;
    if(n) {
        document.form.textview.value = null;
    }
}
