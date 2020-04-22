// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-mastered").on("click", function (event) {
    var id = $(this).data("id");
    var newMastered = $(this).data("newmastered");

    var newMasteredState = {
      mastered: newMastered
    };

    // Send the PUT request.
    $.ajax("/api/klingons/" + id, {
      type: "PUT",
      data: newMasteredState
    }).then(
      function () {
        console.log("changed mastered to", newMastered);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newKlingon = {
      kword: $("#kw").val().trim(),
      english: $("#en").val().trim(),
      mastered: $("[name=mastered]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/klingons", {
      type: "POST",
      data: newKlingon
    }).then(
      function () {
        console.log("created new Klingon");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-klingon").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/klingons/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted Klingon", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
