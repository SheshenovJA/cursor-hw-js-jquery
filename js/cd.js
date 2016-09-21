function myTimer() {

			var endTime = new Date("01.01, 2017 23:59:59");
			var endTime = (Date.parse(endTime)) / 1000;


			var curTime = new Date();//variable contains current date and time
			var curTime = (Date.parse(curTime) / 1000);

			var timeLeft = endTime - curTime;

			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");

	}

	setInterval(function() { myTimer(); }, 1000);
