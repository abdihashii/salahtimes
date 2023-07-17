document.addEventListener('DOMContentLoaded', function () {
  var prayerTimesButton = document.getElementById('prayerTimesButton');
  var loadingSpinner = document.getElementById('loadingSpinner');

  prayerTimesButton.addEventListener('click', getPrayerTimes);

  function getPrayerTimes() {
    prayerTimesButton.classList.add('hidden'); // hide button
    loadingSpinner.classList.remove('hidden'); // show loading spinner

    // hide loading spinner after 3 seconds for demo
    setTimeout(function () {
      loadingSpinner.classList.add('hidden');
      prayerTimesButton.classList.remove('hidden');
    }, 3000);
  }
});
