$(document).ready(function(){
  $('.collapsible').collapsible();

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