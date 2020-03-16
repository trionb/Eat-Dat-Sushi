// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newSushiDevoured = $(this).data("newdevoured");

    var newDevouredState;
    
    if(newSushiDevoured !== "0") {
      newDevouredState = {
        devoured: true
      };
    } else {
      newDevouredState = {
        devoured: false
      };
    }

    console.log("Devoured!!!");
    console.log(newDevouredState);

    // Send the PUT request.
    $.ajax("/api/typeSushi/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed sushi to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDevoured = {
      sushi_name: $("#ca").val().trim(),
      devoured:0
    };

    // Send the POST request.
    $.ajax("/api/typeSushi", {
      type: "POST",
      data: newDevoured
    }).then(
      function() {
        console.log("created new sushi order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
