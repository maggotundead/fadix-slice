
$('.modal .input, .modal .textarea').on("change paste keyup", function() {
    $(this).parent().removeClass('error');

    if ($(this).val()) {
        $(this).next().addClass('filled');
    }
    else {
        $(this).next().removeClass('filled');
    }
})


//CONTACT FORM
const  contactForm = document.querySelector('#contact-modal');
// const closeForm = $('[data-action="contact-us"] [data-role="close"]');
// closeForm.on('click', function () {
//     contactForm.classList.remove('opened')
//     $('.contact-dialog').removeClass('hide');
//     $('.contact-success').addClass('hide');
// })

contactForm.querySelector('form').onsubmit = async (e) => {
    e.preventDefault();

    // let name = $('#contact-modal input[name="name"]');
    let email = $('#contact-modal input[name="email"]');
    let required = true;
    // if (!name.val()) {
    //     name.parent().addClass('error');
    //     required = false;
    // }

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email.val())) {
        email.parent().addClass('error');
        required = false;
    }

    if (required) {
        let response = await fetch('/contact-form.php', {
            method: 'POST',
            body: new FormData(contactForm.querySelector('form'))
        });
        if (response.ok) {
            resetForm(contactForm.querySelector('form'));
            contactForm.removeClass('active');
            document.querySelector('#thanks-modal').classList.add('active');
        } else {
            alert("Error, please try again")
        }
    }
};

function resetForm(form) {
    form.reset();
}
