document.addEventListener('DOMContentLoaded', function () {
  var prayerTimesButton = document.getElementById('prayerTimesButton');

  prayerTimesButton.addEventListener('click', getPrayerTimes);

  function getPrayerTimes() {
    alert('Button clicked. Getting prayer times...');
  }
});
