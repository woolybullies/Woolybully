$(document).ready(function(){


    $("#submit").click(function(event){
        event.preventDefault()

        console.log("Clicked")

        let name = $("#formName").val();
        let email = $("#formEmail").val();
        let phone = $("#formPhoneNumber").val();

            $.ajax({
                type: "POST",
                url: "/api/users",
                data: { "name": name, "email": email, "phone": phone},
                success: function (data, textStatus, jQxhr) {
                    console.log(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
                dataType: "JSON"
            })
    });
});