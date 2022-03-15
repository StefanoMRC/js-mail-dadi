let mail = ["pippo@gmail.com", "gigio@gmail.com", "franco@gmail.com", "bruno@gmail.com"];
totMail = mail.length;
let chiediMail= prompt("dimmi la tua mail");
console.log(mail)
console.log(chiediMail)



for(let i=0 ; i <= totMail; i++ ){
if(chiediMail == mail[i]){
    document.getElementById("cont").innerHTML = "<div>sei iscitto</div>"
}
else {
    document.getElementById("cont").innerHTML = "<div>non sei iscitto</div>"
}
} 

