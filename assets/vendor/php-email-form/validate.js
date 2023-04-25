/**
 * PHP Email Form Validation - v3.6
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
(function () {
  "use strict";

  let forms = document.querySelectorAll(".php-email-form");
  emailjs.init("YOUR_USER_ID");
  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector(".loading").classList.add("d-block");
      thisForm.querySelector(".error-message").classList.remove("d-block");
      thisForm.querySelector(".sent-message").classList.remove("d-block");

      let formData = new FormData(thisForm);
      php_email_form_submit(thisForm, formData);
    });
  });

  function php_email_form_submit(thisForm, formData) {
    // fetch(action, {
    //   method: "POST",
    //   body: formData,
    //   headers: { "X-Requested-With": "XMLHttpRequest" },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.text();
    //     } else {
    //       throw new Error(
    //         `${response.status} ${response.statusText} ${response.url}`
    //       );
    //     }
    //   })
    //   .then((data) => {
    //     thisForm.querySelector(".loading").classList.remove("d-block");
    //     if (data.trim() == "OK") {
    //       thisForm.querySelector(".sent-message").classList.add("d-block");
    //       thisForm.reset();
    //     } else {
    //       throw new Error(
    //         data
    //           ? data
    //           : "Form submission failed and no error message returned from: " +
    //             action
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     displayError(thisForm, error);
    //   });
    console.log(formData);
    emailjs.send("service_itqd02r", "template_m4l10ut", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message was sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert(
          "Sorry, there was a problem sending your message. Please try again later."
        );
      }
    );
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
