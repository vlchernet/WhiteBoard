/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/demo/demo.js */
(function (n) {
	"use strict";
	var s = n.document,
	g = function (A) {
		return s.getElementById(A)
	},
	b = n.sessionStorage,
	x = function () {
		return n.Blob
	},
	f = g("canvas"),
	r = g("canvas-options"),
	y = g("canvas-filename"),
	p = g("canvas-clear"),
	q = g("text"),
	t = g("text-options"),
	h = g("text-filename"),
	m = g("html"),
	e = g("html-options"),
	i = g("html-filename"),
	u = f.getContext("2d"),
	z = false,
	a = b.x_points || [],
	o = b.y_points || [],
	d = b.drag_points || [],
	j = function (A, C, B) {
		a.push(A);
		o.push(C);
		d.push(B)
	},
	l = function () {
		f.width = f.width;
		u.lineWidth = 6;
		u.lineJoin = "round";
		u.strokeStyle = "#000000";
		var B = 0,
		A = a.length;
		for (; B < A; B++) {
			u.beginPath();
			if (B && d[B]) {
				u.moveTo(a[B - 1], o[B - 1])
			} else {
				u.moveTo(a[B] - 1, o[B])
			}
			u.lineTo(a[B], o[B]);
			u.closePath();
			u.stroke()
		}
	},
	c = function () {
		z = false
	},
	w = function (E) {
		var D = "h6 h5 h4 h3 h2 h1".split(" "),
		C = D.length,
		F,
		G;
		while (C--) {
			F = E.getElementsByTagName(D[C]);
			for (var B = 0, A = F.length; B < A; B++) {
				G = F[B].textContent.trim();
				if (G) {
					return G
				}
			}
		}
	},
	v = s.implementation,
	k = function (D) {
		var B = v.createDocumentType("html", null, null),
		J = v.createDocument("http://www.w3.org/1999/xhtml", "html", B),
		A = J.documentElement,
		H = A.appendChild(J.createElement("head")),
		K = H.appendChild(J.createElement("meta")),
		I = H.appendChild(J.createElement("title")),
		E = A.appendChild(J.createElement("body")),
		C = 0,
		G = D.childNodes.length;
		K.setAttribute("charset", D.ownerDocument.characterSet);
		for (; C < G; C++) {
			E.appendChild(J.importNode(D.childNodes.item(C), true))
		}
		var F = w(J);
		if (F) {
			I.appendChild(J.createTextNode(F))
		}
		return J
	};
	f.width = 500;
	f.height = 300;
	if (typeof a === "string") {
		a = JSON.parse(a)
	}
	if (typeof o === "string") {
		o = JSON.parse(o)
	}
	if (typeof d === "string") {
		d = JSON.parse(d)
	}
	if (b.canvas_filename) {
		y.value = b.canvas_filename
	}
	if (b.text) {
		q.value = b.text
	}
	if (b.text_filename) {
		h.value = b.text_filename
	}
	if (b.html) {
		m.innerHTML = b.html
	}
	if (b.html_filename) {
		i.value = b.html_filename
	}
	z = true;
	l();
	z = false;
	/* p.addEventListener("click", function () {
		f.width = f.width;
		a.length = o.length = d.length = 0
	}, false);
	f.addEventListener("mousedown", function (A) {
		A.preventDefault();
		z = true;
		j(A.pageX - f.offsetLeft, A.pageY - f.offsetTop, false);
		l()
	}, false);
	f.addEventListener("mousemove", function (A) {
		if (z) {
			j(A.pageX - f.offsetLeft, A.pageY - f.offsetTop, true);
			l()
		}
	}, false);
	f.addEventListener("mouseup", c, false);
	f.addEventListener("mouseout", c, false); */
	//r.addEventListener("submit", function (A) {
	//	A.preventDefault();
	//	f.toBlobHD(function (B) {
	//		saveAs(B, (y.value || y.placeholder) + ".jpg")
	//	}, "image/png")
	//}, false);
	//t.addEventListener("submit", function (A) {
	//	A.preventDefault();
	//	var B = x();
	//	saveAs(new B([q.value || q.placeholder], {
	//			type: "text/plain;charset=" + s.characterSet
	//		}), (h.value || h.placeholder) + ".txt")
	//}, false);
	//e.addEventListener("submit", function (B) {
	//	B.preventDefault();
	//	var D = x(),
	//	A = new XMLSerializer,
	//	C = k(m);
	//	saveAs(new D([A.serializeToString(C)], {
	//			type: "text/plain;charset=" + s.characterSet
	//		}), (i.value || i.placeholder) + ".xhtml")
	//}, false);
	n.addEventListener("unload", function () {
		b.x_points = JSON.stringify(a);
		b.y_points = JSON.stringify(o);
		b.drag_points = JSON.stringify(d);
		b.canvas_filename = y.value;
		b.text = q.value;
		b.text_filename = h.value;
		b.html = m.innerHTML;
		b.html_filename = i.value
	}, false)
}
	(self));
