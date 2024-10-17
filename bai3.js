let n=parseInt(prompt("Nhap so phan tu mang"));
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Nhap phan tu thu "+(i+1)));
    arr.push(num);
}
document.write(arr+"<br>");
let max=arr[0];
let index=0;
for(let i=0; i < n; i++){
    if(arr[i] > max){
        max=arr[i];
        index=i;
    }
}
document.write("Max "+max+" o phan tu thu "+index+"<br>");
let sum=0;
for(let i=0; i < arr.length; i++){
    sum+=arr[i];
}
let avg=sum/arr.length;
document.write("Gia tri trung binh la "+avg+"<br>");