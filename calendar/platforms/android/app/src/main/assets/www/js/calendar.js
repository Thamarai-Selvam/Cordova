 var date = new Date();

 function fillCalendar() {
     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var month = document.getElementById("month");
     month.innerHTML = monthNames[date.getMonth()];

     var year = document.getElementById("year");
     year.innerHTML = date.getUTCFullYear();

     var lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate();

     var main = document.querySelector("main");

     for (var dayNumber = 1; dayNumber <= lastDay; dayNumber++) {
         var day = document.createElement('div');
         day.className = "day";
         day.innerHTML = dayNumber;

         if (dayNumber == 1)
             day.style.gridColumn = new Date(date.getUTCFullYear(), date.getMonth(), 1).getDay() + 1;
         if (new Date(date.getUTCFullYear(), date.getMonth(), dayNumber).getDay() == 0)
             day.className += " dcolor";

         var today = new Date();
         if (dayNumber == today.getDate() && date.getUTCFullYear() == today.getUTCFullYear() && date.getMonth() == today.getMonth())
             day.className += " today";

         main.appendChild(day);
     }
 }

 function removeDays() {
     var main = document.querySelector("main");
     main.innerHTML = "";
 }

 function prev() {
     removeDays();

     date = new Date(date.getUTCFullYear(), date.getMonth(), 0);

     fillCalendar();
 }

 function next() {
     removeDays();

     date = new Date(date.getUTCFullYear(), date.getMonth() + 1, 2);

     fillCalendar();
 }

 document.ondblclick = function() {
     // Change alignment of day numbers.
     var days = document.getElementsByClassName("day");
     for (var i = 0; i < days.length; i++) {
         days[i].style.alignItems = days[i].style.alignItems == "end" ? "start" : "end";
         days[i].style.justifyItems = days[i].style.justifyItems == "end" ? "start" : "end";
     }
 };