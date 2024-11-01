// Emailjs
(function(){
    emailjs.init({
      publicKey: "iU23aOkfO8hlU82B9",
    });
 })();

function sendMail(e){
    e.preventDefault();
    let params={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

const serviceID = "service_o7y3jfu";
const templateID = "template_cqv3xae";

emailjs.send(serviceID,templateID,params)
.then(res=>{
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('subject').value="";
    document.getElementById('message').value="";
    toastTrigger("success");
})
.catch(error=>{
    toastTrigger("error");
})

}

// Popping Toast After sending email
const contactToast = document.getElementById('contactToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(contactToast);

function toastTrigger(status){
    let toastBody = document.querySelector('.toast-body');
    if (status==="success") {
        toastBody.innerText="Thank You ! For sending Email . I will reply you if required.";
        toastBody.classList.add('text-success');
    }
    else if(status === "error"){
         toastBody.innerText="Sorry ! Your Email wasn't sent. Please Try Again Later";
        toastBody.classList.add('text-danger');
    }
    toastBootstrap.show();
    
}


// Adding Event listener
document.getElementById('contact_form').addEventListener('submit',sendMail);


