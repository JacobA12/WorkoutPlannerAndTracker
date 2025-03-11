//adds functionality to the buttons on the home screen allowing them to be used to navigate to different features of the website.
document.addEventListener("DOMContentLoaded", function () {
  const addWorkoutButton = document.querySelector(".addWorkoutHome");
  const viewHistoryButton = document.querySelector(".viewWorkoutHistory");

  addWorkoutButton.addEventListener("click", function () {
    window.location.href = "AddWorkoutPage/index.html";
  });

  viewHistoryButton.addEventListener("click", function () {
    window.location.href = "WorkoutHistoryPage/index.html";
  });
});
