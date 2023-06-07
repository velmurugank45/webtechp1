function si(){
    let nam=document.getElementById("tt").value;
    let upper=0;
    let lower=0;
    let special=0;
    let Num=0;
    for(let i=0;i<nam.length;i++)
    {
        if('A'<=nam[i] && 'Z'>=nam[i]){
            upper++;
        }
        else if('a'<=nam[i]&&'z'>=nam[i]){
            lower++;
        }
        
    }
    if(8<=nam.length && 16>=nam.length && upper>=1 && lower>=1 ){
        document.getElementById("name").innerHTML="Strong name";
        document.getElementById("name").style.color="green";
        window.location.href="./index.html";
        
    }
    else{
        document.getElementById("name").innerHTML="Weak name";
        document.getElementById("name").style.color="red";

    }


    let cont=document.getElementById("num").value;
    if(6000000000<=cont && 9999999999>=cont){
        document.getElementById("contactno").innerHTML="Valid Number";
        document.getElementById("contactno").style.color="green";
        window.location.href="./index.html";
    }
    else{
        document.getElementById("contactno").innerHTML="Invalid Number";
        document.getElementById("contactno").style.color="red";

    }
    let emailid=document.getElementById("mld").value;
    let upper2=0;
    let lower2=0;
    let special2=0;
    let Num2=0;
    for(let i=0;i<emailid.length;i++)
    {
        if('A'<=emailid[i] && 'Z'>=emailid[i]){
            upper2++;
        }
        else if('a'<=emailid[i]&&'z'>=emailid[i]){
            lower2++;
        }
        else if('0'<=emailid[i]&&'9'>=emailid[i]){
            Num2++;
        }
        else{
            special2++;
        }
    }
    if(8<=emailid.length && 16>=emailid.length && upper2>=1 && lower2>=1 && special2>=1 && Num2>=1){
        document.getElementById("email").innerHTML="Strong Email";
        document.getElementById("email").style.color="green";
        window.location.href="./index.html";
        
    }
    else{
        document.getElementById("email").innerHTML="Weak Email";
        document.getElementById("email").style.color="red";

    }


    let usernam=document.getElementById("use").value;
    let upper3=0;
    let lower3=0;
    let special3=0;
    let Num3=0;
    for(let i=0;i<usernam.length;i++)
    {
        if('A'<=usernam[i] && 'Z'>=usernam[i]){
            upper3++;
        }
        else if('a'<=usernam[i]&&'z'>=usernam[i]){
            lower3++;
        }
        else if('0'<=usernam[i]&&'9'>=usernam[i]){
            Num3++;
        }
        else{
            special3++;
        }
    }
    if(8<=usernam.length && 16>=usernam.length && upper3>=1 && lower3>=1 && special3>=1 && Num3>=1){
        document.getElementById("username").innerHTML="Strong Username";
        document.getElementById("username").style.color="green";
        window.location.href="./index.html";
    }
    else{
        document.getElementById("username").innerHTML="Weak Username";
        document.getElementById("username").style.color="red";

    }
    let pas=document.getElementById("ps").value;
    let upper4=0;
    let lower4=0;
    let special4=0;
    let Num4=0;
    for(let i=0;i<pas.length;i++)
    {
        if('A'<=pas[i] && 'Z'>=pas[i]){
            upper4++;
        }
        else if('a'<=pas[i]&&'z'>=pas[i]){
            lower4++;
        }
        else if('0'<=pas[i]&&'9'>=pas[i]){
            Num4++;
        }
        else{
            special4++;
        }
    }
    if(8<=pas.length && 16>=pas.length && upper4>=1 && lower4>=1 && special4>=1 && Num4>=1){
        document.getElementById("password").innerHTML="Strong Password";
        document.getElementById("password").style.color="green";
        window.location.href="./index.html";
        
    }
    else{
        document.getElementById("password").innerHTML="Weak Password";
        document.getElementById("password").style.color="red";

    }


    let conf=document.getElementById("cff").value;
    let upper5=0;
    let lower5=0;
    let special5=0;
    let Num5=0;
    for(let i=0;i<conf.length;i++)
    {
        if('A'<=conf[i] && 'Z'>=conf[i]){
            upper5++;
        }
        else if('a'<=conf[i]&&'z'>=conf[i]){
            lower5++;
        }
        else if('0'<=conf[i]&&'9'>=conf[i]){
            Num5++;
        }
        else{
            special5++;
        }
    }
    if(8<=conf.length && 16>=conf.length && upper5>=1 && lower5>=1 && special5>=1 && Num5>=1){
        document.getElementById("confirmpassword").innerHTML="Correct Password";
        document.getElementById("confirmpassword").style.color="green";
        window.location.href="./index.html";
    }
    else{
        document.getElementById("confirmpassword").innerHTML="Incorrect Password";
        document.getElementById("confirmpassword").style.color="red";

    }
    
    let capt=document.getElementById("cpch").value;
    let upper6=0;
    let lower6=0;
    let special6=0;
    let Num6=0;
    for(let i=0;i<capt.length;i++)
    {
        if('A'<=capt[i] && 'Z'>=capt[i]){
            upper6++;
        }
        else if('a'<=capt[i]&&'z'>=capt[i]){
            lower6++;
        }
        else if('0'<=capt[i]&&'9'>=capt[i]){
            Num6++;
        }
        else{
            special6++;
        }
    }
    if(8<=capt.length && 16>=capt.length && upper6>=1 && lower6>=1 && special6>=1 && Num6>=1){
        document.getElementById("captcha").innerHTML="Valid Captcha";
        document.getElementById("captcha").style.color="green";
        window.location.href="./index.html";
        
    }
    else{
        document.getElementById("captcha").innerHTML="Invalid Captcha";
        document.getElementById("captcha").style.color="red";

    }


}