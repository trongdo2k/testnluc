let btout=document.getElementById("output");
btout.onclick= function daochuoi(){
    let arr=[];
    let arr1=document.getElementById('ar1').value;
    let arr2=document.getElementById('ar2').value;

    let m1=arr1.split('').reverse();
    let m2=arr2.split('').reverse();

    if(m1.length>m2.length)
    {
        for(let i=0;i<m1.length-1;i++){
            if(m2.length-1<i)
            {
                arr+=m1[i];
                console.log(arr)
            }
            else 
            {
                arr+=m1[i];
                arr+=m2[i];
               
            }
        }
        arr+=m1[m1.length-1];
    }
    else{
        for(let i=0;i<m2.length-1;i++){
            if(m1.length-1<i)
            {
                arr+=m2[i];
                console.log(arr)
            }
            else 
            {
                arr+=m1[i];
                arr+=m2[i];
                console.log(arr);
            }
        }
        arr+=m2[m2.length-1];
    }
    document.getElementById('ketqua').innerHTML=arr;
}