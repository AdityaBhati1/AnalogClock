const hourHand = document.querySelector('.hour');
	const minHand = document.querySelector('.min');
	const secHand = document.querySelector('.sec');
	setInterval(function(){
		const deg = 6;
	const d = new Date();
	const hour = d.getHours() * 30;
	const minute = d.getMinutes() * deg;
	const second = d.getSeconds() * deg;

	hourHand.style.transform = `rotateZ(${hour+(minute/12)}deg)`;
	minHand.style.transform = `rotateZ(${minute}deg)`;
	secHand.style.transform = `rotateZ(${second}deg)`;
	minHand.style.transition = `all 1s`;
	},1);
	function lightMode(){
		document.getElementById('conta').style.background = "rgb(230,230,230)";
		document.getElementById('light').style.transform = "scale(1.3)";
		document.getElementById('light').style.boxShadow = "inset 0 0 40px 40px #f47174";
		document.getElementById('light').style.color = "#091921";
		document.getElementById('dark').style.transform = "scale(1.0)";
		document.getElementById('dark').style.boxShadow = "none";
		document.getElementById('dark').style.color = "#f47174";
		document.getElementById('conta').style.transition = "all 1s";
		document.getElementById('light').style.transition = "all 1s";
		document.getElementById('dark').style.transition = "all 1s";
		document.getElementById('clock').style.transition = "all 1s";
		document.getElementById('cc').style.transition = "all 1s";
		document.getElementById('clock').style.background = "rgb(230,230,230)";
		document.getElementById('clock').style.border = "4px solid rgb(230,230,230)";
		document.getElementById('cc').style.border = "5px solid rgb(230,230,230)";
	}
	function darkMode(){
		document.getElementById('conta').style.background = "#091921";
		document.getElementById('dark').style.transform = "scale(1.3)";
		document.getElementById('dark').style.boxShadow = "inset 0 0 40px 40px #f47174";
		document.getElementById('dark').style.color = "#091921";
		document.getElementById('light').style.transform = "scale(1.0)";
		document.getElementById('light').style.boxShadow = "none";
		document.getElementById('light').style.color = "#f47174";
		document.getElementById('conta').style.transition = "all 1s";
		document.getElementById('light').style.transition = "all 1s";
		document.getElementById('dark').style.transition = "all 1s";
		document.getElementById('clock').style.transition = "all 1s";
		document.getElementById('cc').style.transition = "all 1s";
		document.getElementById('clock').style.background = "#091921";
		document.getElementById('clock').style.border = "4px solid #091921";
		document.getElementById('cc').style.border = "5px solid #091921";
	}