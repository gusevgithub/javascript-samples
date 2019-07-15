var pre = document.getElementsByTagName('pre'),
	pl = pre.length;
for (var i = 0; i < pl; i++) {
	pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
	var num = pre[i].innerHTML.split(/\n/).length;
	for (var j = 0; j < num; j++) {
		var line_num = pre[i].getElementsByTagName('span')[0];
		line_num.innerHTML += '<span>' + (j+1) + '</span>';
	}
}

var btnHtml = document.querySelector('.btn-html');
var btnJava = document.querySelector('.btn-java');
var preHtml = document.querySelector('.pre-html');
var preJava = document.querySelector('.pre-java');

preHtml.style.display = 'none';
preJava.style.display = 'none';

function funcBtnHtml(e) {
	if(preHtml.style.display === 'none') {
		preHtml.style.display = 'block';
		e.target.style.color = 'purple';
		e.target.textContent = 'HTML <- close';
		
	} else {
		preHtml.style.display = 'none';
		e.target.style.color = 'blue';
		e.target.textContent = 'HTML open ->';
	}
}

btnHtml.addEventListener('click', funcBtnHtml);

function funcBtnJava(e) {
	if(preJava.style.display === 'none') {
		preJava.style.display = 'block';
		e.target.style.color = 'purple';
		e.target.textContent = 'JavaScript <- close';
		
	} else {
		preJava.style.display = 'none';
		e.target.style.color = 'blue';
		e.target.textContent = 'JavaScript open ->';
	}
}

btnJava.addEventListener('click', funcBtnJava);