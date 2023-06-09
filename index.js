/** Bài 1
Đầu vào: số ngày làm


Bước 1: tạo số ngày làm việc và số tiền
Bước 2: tự cho số ngày làm việc của nhân viên
Bước 3: gán số tiền một ngày của nhân viên
Bước 4: só tiền * số ngày làm việc của nhân viên


Đầu ra: lương của nhân viên

*/

var soLuong = 100000;
var soNgay = 24;

var result = soNgay * soLuong;
console.log("Lương của nhân viên:", result);

function ngayLuong() {
  var luong = 100000;
  var ngayEl = document.getElementById("ngay").value;

  var tienLuong = 0;
  tienLuong = luong * ngayEl;
  document.getElementById("tienLuong").innerHTML = tienLuong;
}

/** Bài 2
Đầu vào: nhập 5 số bất kì


Bước 1: tạo 5 số thực
Bước 2: tự tạo giá trị cho 5 số thực
Bước 3: cộng tổng của 5 số lại
Bước 4: sau đó chia cho 5


Đầu ra: giá trị trung bình của tổng 5 số người dùng nhập

*/

var a, b, c, d, e;
a = 2;
b = 4;
c = 6;
d = 8;
e = 10;

var result = (a + b + c + d + e) / 5;
result = Math.floor(result);
console.log("Trung bình tổng:", result);

function trungbinhTong() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var n3 = document.getElementById("n3").value;
  var n4 = document.getElementById("n4").value;
  var n5 = document.getElementById("n5").value;

  n1 = Number(n1);
  n2 = Number(n2);
  n3 = Number(n3);
  n4 = Number(n4);
  n5 = Number(n5);

  var trungbinhTong = 0;
  trungbinhTong = Math.floor(n1 + n2 + n3 + n4 + n5) / 5;
  document.getElementById("trungbinhTong").innerHTML = trungbinhTong;
}

/** Bài 3
Đầu vào: nhập số tiền USD bất kì


Bước 1: tạo định mức 1USD bằng 23.500vnđ
Bước 2: tự cho số USD cần đổi sang vnđ
Bước 3: lấy số tiền USD * vnđ cho ra kết quả


Đầu ra: tính ra tiền Việt Nam đồng

*/

var vnDong = 23500;
var usD = 3;
var result = usD * vnDong;

console.log("Tiền tệ VNĐ khi quy đổi:", result);

function quyDoi() {
  var tienVn = 23500;
  var tienDo = document.getElementById("tienDo").value;
  tienDo = Number(tienDo);

  var quydoiDo = 0;
  quydoiDo = tienDo * tienVn;
  document.getElementById("quydoiDo").innerHTML = quydoiDo;
}

/** Bài 4
Đầu vào: chiều dài và chiều rộng


Bước 1: tạo chiều dài và chiều rộng
Bước 2: tự cho chiều dài và chiều rộng
Bước 3: tính diện tích hình chữ nhật
Bước 4: tính chu vi hình chữ nhật


Đầu ra: lương của nhân viên

*/

var chieuDai = 8;
var chieuRong = 6;

var dienTich = chieuDai * chieuRong;
console.log("Diện tích của hình chữ nhật:", dienTich);

var chuVi = (chieuDai + chieuRong) * 2;
console.log("Chu vi của hình chữ nhật:", chuVi);

function tinhdienTich() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;

  var dientichchuNhat = 0;
  dientichchuNhat = chieuDai * chieuRong;
  document.getElementById("dientichchuNhat").innerHTML = dientichchuNhat;
}

function tinhchuVi() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  chieuDai = Number(chieuDai);
  chieuRong = Number(chieuRong);

  var chuvichuNhat = 0;
  chuvichuNhat = (chieuDai + chieuRong) * 2;
  document.getElementById("chuvichuNhat").innerHTML = chuvichuNhat;
}

/** Bài 5
Đầu vào: nhập 1 số có 2 chữ số


Bước 1: tạo một số bất kì có 2 chữ số
Bước 2: tính số hàng đơn vị
Bước 3: tính số hàng chục
Bước 4: cộng số hàng đơn vị và hàng chục


Đầu ra: tổng 2 chữ số đã nhập

*/

var chuSo = 48;
var donVi = 48 % 10;
var hangChuc = Math.floor(48 / 10);
var result = hangChuc + donVi;
console.log("Tổng 2 chữ số:", result);

function tonghaiSo() {
  var chuSo = document.getElementById("chuSo").value;
  chuSo = Number(chuSo);

  var tongSo = 0;
  tongSo = (chuSo % 10) + Math.floor(chuSo / 10);

  document.getElementById("tongSo").innerHTML = tongSo;
}
