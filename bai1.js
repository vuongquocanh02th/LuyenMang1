let n=parseInt(prompt("Nhap so phan tu cua mang"))
let arr=[];
//Nhap tung phan tu cua mang
for(let i=0; i < n; i++){
    let num=parseInt(prompt("Nhap phan tu "+(i+1)+":"));
    arr.push(num);
}
//Dem so luong so >= 10
let count=0;
for(let i = 0; i < n; i++){
    if(arr[i] >= 10){
        count++;
    }
}
//Hien thi ket qua
console.log("So luong so nguyen >= 10 la: "+count);