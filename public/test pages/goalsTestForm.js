$(document).ready(function () {

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
                let checkbox = '<input type = "checkbox" id = "' + data.insertId + '">'

                console.log(data);

                var newRow = $("<tr>").append(
                    $("<td>").text(data.insertId),
                    $("<td>").text(name),
                    $("<td>").text(daily_occurance),
                    $("<td>").html(checkbox),
                );
                $("#goal-table > tbody").append(newRow);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            dataType: "JSON"
        })
    });

    $("#goal_delete").click(function (event) {
        event.preventDefault();

        var checked = jQuery('input:checkbox:checked').map(function () {
            console.log($(this).attr("id"));
            $.ajax({
                type: "DELETE",
                url: "/api/goals/"+$(this).attr("id"),
                
                success: function (data, textStatus, jQxhr) {
                    console.log(data);
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
                dataType: "JSON"
            })

            return this.value;
        }).get();
        jQuery('input:checkbox:checked').parents("tr").remove();

    });


});



