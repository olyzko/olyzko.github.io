window.addEventListener('load', () => {
    //open feedback form
    document.getElementById('feedback-form-link').onclick = openFeedbackForm;

    let intextFeedbackFormLink = document.getElementById('intext-feedback-form-link');
    if (intextFeedbackFormLink) intextFeedbackFormLink.onclick = openFeedbackForm;

    //close feedback form
    document.getElementById('feedback-form-close-btn').onclick = () => {
        document.body.style.overflow = '';
        document.getElementById('feedback-form').style.animationName = 'hideForm';
    };

    function onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
    }

    //feedback form submit simulation
    document.getElementById('feedback-form-submit-btn').onclick = (e) => {
        if (!document.forms.feedbackForm.checkValidity()){
            alert('Incorrect input');
            return;
        }

        let nameInput = document.getElementById('feedback-form-name-input');
        let phoneInput = document.getElementById('feedback-form-phone-input');
        let emailInput = document.getElementById('feedback-form-email-input');
        let textInput = document.getElementById('feedback-form-message-input');

        let message = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            text: textInput.value,
            [Symbol.toPrimitive](hint) {
                if (hint === 'string') {
                    return `Name: ${this.name}\nPhone: ${this.phone}\nEmail: ${this.email}\nText: ${this.text}\n`;
                }
                return null;
            }
        };

        alert(`Sent message:\n${message}`);
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        textInput.value = '';
    };
});

function openFeedbackForm() {
    document.body.style.overflow = 'hidden';
    document.getElementById('feedback-form').style.display = 'block';
    document.getElementById('feedback-form').style.zIndex = '1';
    document.getElementById('feedback-form').style.animationName = 'showForm';
}