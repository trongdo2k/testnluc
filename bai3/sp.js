 function thaythe(){
    let indata =document.getElementById("az").value;
    let arr0 =["a","e","i","o","u","y","w","h"];
    let arr1 =["b","p","f","v"];
    let arr2 =["c","s","k","g","j","q","x","z"];
    let arr3 =["d","t"];
    let arr4 =["l"];
    let arr5 =["m","n"];
    let arr6 =["r"];
    let newar =[indata[0]];
    for(let i=1;i<indata.length;i++)
    {
        if(arr1.includes(indata[i]))
        {
            newar+=1;
        }else if(arr2.includes(indata[i]))
        {
            newar+=2;
        }
        else if(arr3.includes(indata[i]))
        {
            newar+=3;
        }
        else if(arr4.includes(indata[i]))
        {
            newar+=4;
        }
        else if(arr5.includes(indata[i]))
        {
            newar+=5;
        }
        else if(arr6.includes(indata[i]))
        {
            newar+=6;
        }else if(arr0.includes(indata[i]))
        newar=newar;
    }
    console.log(newar);
}