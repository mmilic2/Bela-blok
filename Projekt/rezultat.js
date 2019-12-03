window.addEventListener('load', function() {

	var inputRezultatMi = document.getElementById("bodovi1");
    var inputRezultatVi = document.getElementById("bodovi2");


	inputRezultatMi.addEventListener("keyup", function() {

		if (parseInt(inputRezultatMi.value) >= 0 && inputRezultatMi.value <= 162) {
			inputRezultatVi.value = 162 - (inputRezultatMi.value);
		}

		else
		{
			inputRezultatVi.value = "";
			inputRezultatMi.value = "";
		}
	})

	inputRezultatVi.addEventListener("keyup", function() {
		if (parseInt(inputRezultatVi.value) >= 0 && inputRezultatVi.value <= 162) {
			inputRezultatMi.value = 162 - (inputRezultatVi.value);
		}

		else
		{
			inputRezultatVi.value = "";
			inputRezultatMi.value = "";
		}
	})

})
