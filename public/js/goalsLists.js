$(document).ready(function () {
    $('.collapsible').collapsible();


    function goalGetter() {

        console.log("Goal CALLED!")

        $.ajax({
            type: "GET",
            url: "/api/goals/" + getCookie("userId"),

            success: function (data) {
                for (var i = 0; i < data.length; i++) {

                    var newRow = $("<tr>").append(
                        $("<td>").text(data[i].id),
                        $("<td>").text(data[i].name),
                        $("<td>").text(data[i].daily_occurance),
                        $("<td> <button class='waves-effect waves-teal btn-flat' id='goal_delete'>Delete</button>")
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
            },

            error: function (errorThrown) {
                console.log(errorThrown);
            }
        })
    }
    goalGetter();
    

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    // Below is Not functional yet **

    $("#goal_delete").click(function (event) {
        event.preventDefault();
        alert("DELETE BUTTON CLICKED")

        // var checked = jQuery('input:checkbox:checked').map(function () {
        //     console.log($(this).attr("id"));
        //     $.ajax({
        //         type: "DELETE",
        //         url: "/api/goals/" + $(this).attr("id"),

        //         success: function (data, textStatus, jQxhr) {
        //             console.log(data);
        //         },
        //         error: function (jqXhr, textStatus, errorThrown) {
        //             console.log(errorThrown);
        //         },
        //         dataType: "JSON"
        //     })

        //     return this.value;
        // }).get();
        // jQuery('input:checkbox:checked').parents("tr").remove();

    });

});