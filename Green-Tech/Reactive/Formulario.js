const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit',sendEmail)
const serviceId= 'Green-Tech_x23w'
const templateId= 'template_b3lb8lr'
const apikey='pBnQ3akFYYmIL2oV7'
function sendEmail(event){
    event.preventDefault()
    emailjs.init()(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
        .then((result) => Swal.fire('Su mensaje se ha enviado con exito.') )
        .catch((error) => {
            Swal.fire({
                icon:'error',
                title: 'Oops...',
                text: 'No ha sido posible enviar el mensaje',
            });
    });
}