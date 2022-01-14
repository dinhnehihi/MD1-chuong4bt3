let inputTienVay = prompt('Nhập số tiền vay: ');
let inputLaiSuat = prompt('Nhập lãi suất: ');
let soNam = prompt("Nhập số năm: ");
let tienVay = parseFloat(inputTienVay);
let laiSuat = parseFloat(inputLaiSuat);
let n = parseInt(soNam);
let tienLai = tienVay * (laiSuat/100);
let tienTong = tienVay + (n * tienLai);
document.write('Số tiền phải trả sau ' + n + ' năm là: ' + tienTong);
