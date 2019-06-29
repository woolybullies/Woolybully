$(document).ready(function(){


    $("#goal_submit").click(function(event){
        event.preventDefault()

        console.log("Clicked")

        let name = $("#goal").val();
        let time = $("#goalTime").val();
        let daily_occurance = `* * ${time} * * *`;
      
       console.log(daily_occurance);

            $.ajax({
                type: "POST",
                url: "/api/goals",
                data: { "name": name, "daily_occurance": daily_occurance},
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