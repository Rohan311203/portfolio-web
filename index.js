var tablinks = document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab");
    }

    // ................................................................................................

    (function() {
        emailjs.init("hot3Pp9AntKbO-hrL");
    })();

    function sendmail(event) {
        event.preventDefault();

        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        const serviceId = "service_f2xkfqh";
        const templateId = "template_3rv5quk";

        emailjs.send(serviceId, templateId, params)
            .then((res) => {
                document.getElementById("contactForm").reset();
                alert("Your message was sent successfully!");
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
