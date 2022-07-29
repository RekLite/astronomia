function validate() {
	if (idem.checked) {
		a.value = x.value;
		a.setAttribute("readonly", "readonly"); 
		b.value = y.value;
		b.setAttribute("readonly", "readonly");
		c.value = z.value;
		c.setAttribute("readonly", "readonly");
	} else {
		a.value = "";
		a.removeAttribute("readonly", "readonly");
		b.value = "";
		b.removeAttribute("readonly", "readonly");
		c.value = "";
		c.removeAttribute("readonly", "readonly");
	}
}