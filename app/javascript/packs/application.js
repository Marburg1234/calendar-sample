// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import './calendar';
import "../stylesheets/application";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

Rails.start()
// Turbolinks.start()
ActiveStorage.start()

document.addEventListener('DOMContentLoaded', () => {
  flatpickr("#start_datepicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    defaultDate: new Date(), // ローカルタイムゾーンを使う
  });
  flatpickr("#end_datepicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    defaultDate: new Date(), // ローカルタイムゾーンを使う
  });
});