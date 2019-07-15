$(document).ready(function () {


    $("#submit").click(function (event) {
        event.preventDefault()
        
        console.log("Clicked")

        let name = $("#formName").val();
        let email = $("#formEmail").val();
        let phone = $("#formPhoneNumber").val();
        formatPhoneNumber(phone) 

        if (name || email || phone == ""){
        alert("YOU MUST ENTER A VALID NAME, EMAIL, or PHONE NUMBER");

        } else {

        $.ajax({
            type: "POST",
            url: "/api/users",
            data: { "name": name, "email": email, "phone": phone},
            success: function (data, textStatus, jQxhr) {
                setCookie("userId", data.message.userID);
                window.location.replace("goals.html")
                console.log(data.message.userID)
            },
            error: function (jqXhr, textStatus, errorThrown) {
            },
            dataType: "JSON"
        });
    } 
       

    
    });

});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^1(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      console.log(match[1] + match[2] + match[3])
      return match[1] + match[2] + match[3]
    }
    return null
   }
  ​
