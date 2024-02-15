function displayTime() 
{
	let date = new Date();

	let hour = date.getHours()%12;
	let mintute = date.getMinutes();
	let second = date.getSeconds();

	let time = document.getElementById("time");
	time.innerHTML = (hour + ":" + mintute + ":" + second);
}
setInterval(displayTime,1000);