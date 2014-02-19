/*
 * !(c) 2014, Carpov Systems Inc. | carpovsystems.com  
 */

// --------------------
// Scrolling
// --------------------

function Scroll(time, step) {

	var S = this;	
	S.time = time;
	S.step = step;

	S.ease = function(n, h, w, t) {
	    n /= t / 2;
		if (n < 1) return w / 2 * n * n + h;
		n--;
		return -w / 2 * (n * (n - 2) - 1) + h;
	}

	S.run = function() {		
		S.now += S.step;
		document.documentElement.scrollTop = S.ease(S.now, S.top, S.way, S.time);		
		if (S.now < S.time) setTimeout(S.run, S.step);
	}

	S.start = function() {
		var to = this.getAttribute('to');
		var el = document.getElementById(to);		
		S.top = document.documentElement.scrollTop;
		S.way = el.offsetTop - S.top;
		S.now = 0;
		S.run();
	}

	S.bind = function(a) {
		for (var i = 0; i < a.length; i++) {
			var to = a[i].getAttribute('to');
			if (to) {
				a[i].addEventListener('click', S.start, false);
			}
		}
	}

	S.init = function() {
		var a = document.getElementsByTagName('a');
		S.bind(a);
	}
};



