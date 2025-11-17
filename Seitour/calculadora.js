function calcular() {
      const precioAuto = parseFloat(document.getElementById("autos").value);
      const dias = parseInt(document.getElementById("dias").value);

      // Cobros Extras
      const gps = document.getElementById("gps").checked ? parseFloat(document.getElementById("gps").value) : 0;
      const seguro = document.getElementById("seguro").checked ? parseFloat(document.getElementById("seguro").value) : 0;
      const silla = document.getElementById("silla").checked ? parseFloat(document.getElementById("silla").value) : 0;

      const totalPorDia = precioAuto + gps + seguro + silla;
      const total = totalPorDia * dias;

      document.getElementById("resultado").innerHTML = "Total: $"+total.toFixed(3);
    }
