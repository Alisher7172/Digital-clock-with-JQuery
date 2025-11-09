$(document).ready(function() {
    let is24Hour = false; // shared state

    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let displayHours;
        let ampm = '';

        if (is24Hour) {
            displayHours = String(hours).padStart(2, '0'); // 24-hour format
        } else {
            displayHours = String(hours % 12 || 12); // 12-hour format
            ampm = hours >= 12 ? 'PM' : 'AM';
        }

        const displayMinutes = String(minutes).padStart(2, '0');
        const displaySeconds = String(seconds).padStart(2, '0');

        $('#hours').text(displayHours);
        $('#minutes').text(displayMinutes);
        $('#seconds').text(displaySeconds);

        if (is24Hour) {
            // hide AM/PM in 24-hour mode to ensure no leftover "PM" is visible
            $('#ampm').hide();
        } else {
            // show and set AM/PM in 12-hour mode
            $('#ampm').show().text(ampm);
        }
    }

    $('#toggleFormat').click(function() {
        is24Hour = !is24Hour;
        // do not change the button text/appearance
        $('#toggleFormat').attr('data-24hour', is24Hour ? 'true' : 'false');
        updateTime();
    });

    updateTime();
    setInterval(updateTime, 1000);
});

