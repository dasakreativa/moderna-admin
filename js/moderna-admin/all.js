(function ($) {
    "use strict";

    $.clocker = ($target) => {
        var months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];

        var days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];

        function update() {
            var date = new Date();

            var hours = date.getHours() < 10 ?
                '0' + date.getHours() :
                date.getHours();

            var minutes = date.getMinutes() < 10 ?
                '0' + date.getMinutes() :
                date.getMinutes();

            var seconds = date.getSeconds() < 10 ?
                '0' + date.getSeconds() :
                date.getSeconds();

            var dayOfWeek = days[date.getDay()];
            var month = months[date.getMonth()];
            var day = date.getDate();
            var year = date.getFullYear();

            var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year,
                clock = hours + ' : ' + minutes + ' : ' + seconds;

            $($target).text(clock);

        }

        update();
        window.setInterval(update, 1000);
    };

    $.clocker('#clock');
})(jQuery);