let n=parseInt(prompt("Nhap so phan tu mang"));
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Nhap phan tu thu "+(i+1)));
    arr.push(num);
}
document.write(arr+"<br>");
//Thuc hien dao nguoc mang
let first=0;
let last=arr.length-1;
while(first<last){
    let temp=arr[first];
    arr[first]=arr[last];
    arr[last]=temp;
    first++;
    last--;
}
document.write(arr+"<br>");
