//Declare vars 
var apillave = 'b29bfa124a68dd6b7245343a1bd4ecbb';
var srchBTN = document.querySelector('#btnSearch');
var nombreCity = document.querySelector('#nombreCity');
var inputSrch = document.querySelector('#inputSearch');
var hoy = dayjs();

//Functions below
function getday() {
    var dia = [];
    var fechaCard = [];
    for (let i = 0; i < 6; i++) {
        dia[i] = hoy.add(i, 'day');
        fechaCard[i] = document.querySelector(`#fechaCard${i}`);
        fechaCard[i].textContent = dia[i].format('MM/DD/YY');
}}