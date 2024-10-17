let n=parseInt(prompt("Nhap so luong phan tu"));
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Nhap phan tu thu "+(i+1)));
    arr.push(num);
}
document.write(arr+"<br>");
//Nhap vao so V
let v=parseInt(prompt("Nhap so nguyen V"));
//Kiem tra
if(arr.includes(v)){
    document.write(`${v} is in the array`)
}else {
    document.write(`${v} is not in the array`)
}