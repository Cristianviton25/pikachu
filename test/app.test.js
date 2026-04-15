import { saludar, despedir, estadoSistema, sumar, healthCheck, factorial } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1
    const r1 = saludar("Vitonco");
    if (r1.includes("Vitonco")) {
        console.log("✅ Test 1 Pasado: función saludar correcta");
        pasadas++;
    } else {
        console.log("❌ Test 1 Fallido:", r1);
        fallidas++;
    }

    // Test 2
    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("✅ Test 2 Pasado: estadoSistema correcto");
        pasadas++;
    } else {
        console.log("❌ Test 2 Fallido:", actualEstado);
        fallidas++;
    }

    // Test 3
    const suma = sumar(5, 7);
    if (suma === 12) {
        console.log("✅ Test 3 Pasado: suma correcta");
        pasadas++;
    } else {
        console.log("❌ Test 3 Fallido:", suma);
        fallidas++;
    }

    // Test 4
    const healt = healthCheck();
    if (healt.status === "ok") {
        console.log("✅ Test 4 Pasado: healthCheck correcto");
        pasadas++;
    } else {
        console.log("❌ Test 4 Fallido:", healt);
        fallidas++;
    }

    // Test 5 (factorial)
    const fact = factorial;
    const resultado = fact(5);

    if (resultado === 120) {
        console.log("✅ Test 5 Pasado: factorial correcto");
        pasadas++;
    } else {
        console.log("❌ Test 5 Fallido:", resultado);
        fallidas++;
    }

    console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();