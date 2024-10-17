let n=parseInt(prompt("Nhap so luong phan tu"));
let arr=[];
//Nhap tung phan tu cua mang
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Nhap phan tu thu "+(i+1)));
    arr.push(num);
}
//in ra mang
document.write(arr+"<br>");
//Dem so phan tu am
let count=0;
for(let i=0;i<n;i++){
    if(arr[i]<0){
        document.write(arr[i]+"<br>");
        count++;
    }
}
//Hien thi ket qua
document.write("So phan tu am la "+count+"<br>");