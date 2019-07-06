$(document).ready(function(){
    $('.datepicker').datepicker({
  
  });
    $('.timepicker').timepicker();

    $("#goal_submit").click(function (event) {
        event.preventDefault();

        console.log("Clicked")

        
        let name = $("#goal").val();
        let time = $("#goalTime").val();
        let daily_occurance = `* * ${time} * * *`;

        console.log(daily_occurance);

        $.ajax({
            type: "POST",
            url: "/api/goals",
            data: { "name": name, "daily_occurance": daily_occurance },

            success: function (data, textStatus, jQxhr) {
                // let checkbox = '<input type = "checkbox" id = "' + data.insertId + '">'

                console.log(data);

                var newRow = $("<tr>").append(
                    $("<td>").text(data.insertId),
                    $("<td>").text(name),
                    $("<td>").text(daily_occurance),
                    
                );
                $("#goal-table > tbody").append(newRow);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            dataType: "JSON"
        })
        location.href = "goalsLists.html";
    });


    


  });