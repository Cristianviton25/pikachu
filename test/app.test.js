import { saludar, despedir, estadoSistema, sumar, restar } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Vitonco")
    if (r1.includes("Vitonco")) {
        console.log("Test 1 Pasado: función saludar en Vitonco es correcta")
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 Pasado: estadoSistema() funciona en Vitonco");
        pasadas++;
    } else {
        console.log("Test 2 fallido: ", actualEstado);
        fallidas++;
    }

    const a = 15;
    const b = 20;

    const sumarResultado = sumar(a, b);

    console.log("Resultado de sumar:", a, "+", b, "=", sumarResultado);

    if (sumarResultado === a + b) {
        console.log("Test 3 Pasado: funcion sumar funciona correctamente");
        pasadas++;
    } else {
        console.log("Test 3 fallido: ", sumarResultado);
        fallidas++;
    }

    const c = 10;
    const d = 5;

    const restarResultado = restar(c, d);

    console.log("Resultado de restar:", c, "-", d, "=", restarResultado);

    if (restarResultado === c - d) {
        console.log("Test 4 Pasado: funcion restar funciona correctamente");
        pasadas++;
    } else {
        console.log("Test 4 fallido: ", restarResultado);
        fallidas++;
    }

    // ✅ RESULTADO FINAL (al final)
    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();