$(document).ready(function () {
    $('.datepicker').datepicker({

    });
    $('.timepicker').timepicker();


    // $("#goal_submit").click(function (event) {
    //     event.preventDefault();

    //     console.log("Clicked")


    //     let name = $("#goal").val();
    //     let time = $("#goalTime").val();
    //     let daily_occurance = `* * ${time} * * *`;

    //     console.log(daily_occurance);

    //     $.ajax({
    //         type: "POST",
    //         url: "/api/goals",
    //         data: { "name": name, "daily_occurance": daily_occurance },

    //         success: function (data, textStatus, jQxhr) {
    //             console.log("cool", data);
    //             window.location.replace("/goalsLists.html");
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         },
    //         dataType: "JSON"
    //     })
    // });

    // $("#goal_submit").click(function (event) {
    //     event.preventDefault();

    //     console.log("Clicked")


    //     let name = $("#goal").val();
    //     let time = $("#goalTime").val();
    //     let daily_occurance = `* * ${time} * * *`;

    //     console.log(daily_occurance);

    //     $.ajax({
    //         type: "POST",
    //         url: "/api/goals",
    //         data: { "name": name, "daily_occurance": daily_occurance },

    //         success: function (data, textStatus, jQxhr) {
    //             // let checkbox = '<input type = "checkbox" id = "' + data.insertId + '">'

    //             console.log(data);

    //             var newRow = $("<tr>").append(
    //                 $("<td>").text(data.insertId),
    //                 $("<td>").text(name),
    //                 $("<td>").text(daily_occurance),

    //             );
    //             $("#goal-table > tbody").append(newRow);
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         },
    //         dataType: "JSON"
    //     })
    // });

});

function categoryClick(categoryId){

    let name = $((categoryElement(categoryId))).val();
    let time = $((categoryElement(categoryId)) + "time").val();
    let daily_occurance = `* * ${time} * * *`;


    $.ajax({
        type: "POST",
        url: "/api/goals",
        data: { "name": name, "daily_occurance": daily_occurance, "category_id": categoryId},

        success: function (data, textStatus, jQxhr) {
            window.location.replace("/goalsLists.html");
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
        dataType: "JSON"
    })
    console.log(categoryElement(categoryId));
 return false;
}

function categoryElement(categoryId){
      let elementId = "";
      switch(categoryId) {
        case 1:
          elementId = "#clean";
          break;
          
        case 2:
          elementId = "#fitness";
          break;
          
        case 3:
          elementId = "#nutrition";
          break;
          
        case 4:
          elementId = "#work";
          break;
          
        case 5:
          elementId = "#finance";
          break;
          
        case 6:
          elementId = "#self_care";
          break;
          
        default:
          elementId = "";
        }
      return elementId;
    }