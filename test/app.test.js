import { saludar, despedir, estadoSistema, sumar } from "../src/app.js"

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
        console.log("Test 2 fallido: ", estado, "en Vitonco");
        fallidas++;
    }
    console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1);

    const suma = sumar(5, 7);
    if (suma === 12) {
        console.log("Test 3 Pasado: sumar 5+7 devuelve 12");
        pasadas++;
    } else {
        console.log("Test 3 fallido: ", suma);
        fallidas++;
    }
}
ejecutarPruebas();