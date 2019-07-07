$(document).ready(function () {
    $('.datepicker').datepicker({

    });
    $('.timepicker').timepicker();

});
let adjTime = ""
function categoryClick(categoryId){
    
    let name = $((categoryElement(categoryId))).val();
    let time = $((categoryElement(categoryId)) + "time").val();
    ConvertTimeformat(time)
    let daily_occurance = adjTime;


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

    function ConvertTimeformat(selTime) {
        var time = selTime
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        console.log(sHours, sMinutes);
        adjTime = `* ${sMinutes} ${sHours} * * *`
    }
    ConvertTimeformat("10:00 PM")