let n=parseInt(prompt("Nhap so phan tu"));
let arr=[];
for(let i= 0; i < n; i++){
    let num= parseInt(prompt("Nhap phan tu "+(i+1)));
    arr.push(num);
}
document.write(arr+"<br>");
//Sap xep mang theo thu tu giam dan
for(let i= 0; i < arr.length-1; i++){
    for(let j= i + 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
//Hien thi mang da duoc sap xep
document.write("Mang giam dan: ")
for(let i = 0; i < arr.length; i++){
    document.write(arr[i]);
}