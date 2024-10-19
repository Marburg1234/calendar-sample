import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from "@fullcalendar/list"; //この行を追加

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    locale: "jp", //この行を追加 日本語に変換する
    events: '/events', // eventData変数を使用してイベントデータを渡す
    //レスポンシブ処理を追加
    windowResize: function () {
        if (window.innerWidth < 991.98) {
            calendar.changeView('listMonth');
        } else {
            calendar.changeView('dayGridMonth');
        }
    },
  });

  calendar.render();
});