$(document).ready(function () {
    $('.collapsible').collapsible();


    function goalGetter() {

        console.log("Goal CALLED!")

        $.ajax({
            type: "GET",
            url: "/api/goals",

            success: function (data) {
                for (var i = 0; i < data.length; i++) {

                    var newRow = $("<tr>").append(
                        $("<td>").text(data[i].id),
                        $("<td>").text(data[i].name),
                        $("<td>").text(data[i].daily_occurance),
                    );
                    if (data[i].category_id == 1) {
                        $("#clean > tbody").append(newRow);
                    }
                    else if (data[i].category_id == 2) {
                        $("#fitness > tbody").append(newRow);
                    }
                    else if (data[i].category_id == 3) {
                        $("#nutrition > tbody").append(newRow);
                    }
                    else if (data[i].category_id == 4) {
                        $("#work > tbody").append(newRow);
                    }
                    else if (data[i].category_id == 5) {
                        $("#finance > tbody").append(newRow);
                        console.log("finance item")
                    }
                    else if (data[i].category_id == 6) {
                        $("#self_care > tbody").append(newRow);
                        console.log("self care item")
                    }


                }
                // for loop through goals
                // var newRow = $("<tr>").append(
                //     $("<td>").text(data.insertId),
                //     $("<td>").text(name),
                //     $("<td>").text(daily_occurance),
                //);
                //if data[i]catergory id = 1 
                //append to #clean
                //else if data[i] category id = 2
                //append to #fitness
            },

            error: function (errorThrown) {
                console.log(errorThrown);
            }
        })
    }
    goalGetter();


    $("#goal_delete").click(function (event) {
        event.preventDefault();

        var checked = jQuery('input:checkbox:checked').map(function () {
            console.log($(this).attr("id"));
            $.ajax({
                type: "DELETE",
                url: "/api/goals/" + $(this).attr("id"),

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