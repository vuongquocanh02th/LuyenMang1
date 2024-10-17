//Khoi tao mang
let a = [];
let b = [];
let c = new Array(20);
//Nhap mang a
for(let i= 0; i < 10; i++){
    let num1 = parseInt(prompt("nhap phan tu "+(i+1)+" cua mang a"));
    a.push(num1);
}
//Nhap mang b
for(let i= 0; i < 10; i++){
    let num2 = parseInt(prompt("nhap phan tu "+(i+1)+" cua mang b"));
    b.push(num2);
}
//Noi mang a va mang b vao mang c
for(let i= 0; i < 10; i++){
    c[i] = b[i];//luu cac phan tu cua mang b vao mang c
    c[i+10] = a[i];//Luu cac phan tu cua mang a vao mang c
}
//Hien thi mang c
document.write("Mang c sau khi noi mang a va b ");
for(let i = 0; i < 20; i++){
    document.write(c[i]+",");
}
