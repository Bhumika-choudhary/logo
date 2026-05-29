// OPEN MAIL OPTIONS
function openMailOptions() {
    document.getElementById("mailPopup").style.display = "flex";
}

// CLOSE POPUP
function closePopup() {
    document.getElementById("mailPopup").style.display = "none";
}

// SEND MAIL
function sendMail(type) {

    const email = "design@phirlife.com";
    const subject = "Hello Museb Khan";
    const body = "Hi Museb,";

    if (type === "gmail") {

        window.location.href =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    }

    else if (type === "outlook") {

        window.location.href =
            `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;

    }

    else {

        window.location.href =
            `mailto:${email}?subject=${subject}&body=${body}`;

    }

    closePopup();
}

// SHARE CONTACT
function shareContact() {

    if (navigator.share) {

        navigator.share({
            title: "Museb Khan",
            text: "Contact Museb Khan",
            url: window.location.href
        });

    } else {

        alert("Sharing not supported on this device.");

    }
}