function ind(){
    let pass=document.getElementById("ps").value;
    let upper=0;
    let lower=0;
    let special=0;
    let Num=0;
    for(let i=0;i<pass.length;i++)
    {
        if('A'<=pass[i] && 'Z'>=pass[i]){
            upper++;
        }
        else if('a'<=pass[i]&&'z'>=pass[i]){
            lower++;
        }
        else if('0'<=pass[i]&&'9'>=pass[i]){
            Num++;
        }
        else{
            special++;
        }
    }
    if(8<=pass.length && 16>=pass.length && upper>=1 && lower>=1 && special>=1 && Num>=1){
        document.getElementById("passres").innerHTML="Strong Password";
        document.getElementById("passres").style.color="green";
        window.location.href="./homepage.html";
        
    }
    else{
        document.getElementById("passres").innerHTML="Weak Password";
        document.getElementById("passres").style.color="red";
 }


    let email=document.getElementById("em").value;
    let upper1=0;
    let lower1=0;
    let special1=0;
    let Num1=0;
    for(let i=0;i<email.length;i++)
    {
        if('A'<=email[i] && 'Z'>=email[i]){
            upper1++;
        }
        else if('a'<=email[i]&&'z'>=email[i]){
            lower1++;
        }
        else if('0'<=email[i]&&'9'>=email[i]){
            Num1++;
        }
        else{
            special1++;
        }
    }
    if(8<=email.length && 16>=email.length && upper1>=1 && lower1>=1 && special1>=1 && Num1>=1){
        document.getElementById("emailres").innerHTML="Valid Email";
        document.getElementById("emailres").style.color="green";
        window.location.href="./homepage.html";
    }
    else{
        document.getElementById("emailres").innerHTML="Invalid Email";
        document.getElementById("emailres").style.color="red";

    }
    

}