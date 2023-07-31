let timerId = setInterval(function() {
	var needDate = new Date("2023/07/31 01:00:00");
	var diff = Math.round(Math.abs((needDate.getTime() - new Date().getTime())) / 1000);
	var el = document.getElementById("counter").innerHTML = diff;
}, 80);

var imgs = ['im1.jpeg', 'im2.jpeg', 'im3.jpeg', 'im4.jpeg', 'im5.jpeg', 'im6.jpeg'];
var html = '';
for (let i = 0; i < imgs.length; i++) {
	console.log(i);
	var src = 'imgs/' + imgs[i];
	html += '<div class="grid-block"> <div class="tile"> <a class="tile-link" href="#"> \
	<img class="tile-img tile-img1" src="'+src+'" alt="Image"> </a></div></div>';
	console.log(html);

}
document.getElementById("gallery").innerHTML = html;
