$(document).ready(function () {


    $("#submit").click(function (event) {
        event.preventDefault()
        
        console.log("Clicked")

        let name = $("#formName").val();
        let email = $("#formEmail").val();
        let phone = $("#formPhoneNumber").val();

        $.ajax({
            type: "POST",
            url: "/api/users",
            data: { "name": name, "email": email, "phone": phone },
            success: function (data, textStatus, jQxhr) {
                setCookie("userId", data.insertId, 3);
                window.location.replace("goals.html")
            },
            error: function (jqXhr, textStatus, errorThrown) {
            },
            dataType: "JSON"
        })
    });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

