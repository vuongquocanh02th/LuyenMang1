let n=parseInt(prompt("Nhap so luong phan tu"));
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt('Nhap phan tu thu '+(i+1)));
    arr.push(num);
}
document.write(arr+'<br>');
//Nhap gia tri V
let v=parseInt(prompt("Nhap so nguyen V"));
//Kiem tra xem V co thuoc mang ko va xoa khoi mang
let index=arr.indexOf(v);
if(index!==-1){
    //neu v co trong mang, xoa v
    for(let i=index;i<arr.length-1;i++){
        arr[i]=arr[i+1];//Dich phan tu phai sang trai
    }
    arr[arr.length-1]=0;//gan 0 cho phan tu cuoi cung
    document.write(`Mang sau khi xoa ${v} la: `+arr);
}else {
    document.write(`${v} khong co trong mang`);
}