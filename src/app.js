export function saludar(nombre) {
    return "Hola" + nombre + ", bienvenido a aplicación de Vitonco!";
}

export function despedir(nombre) {
    return "Hasta pronto, " + nombre + "!Vitonco";
}

export function estadoSistema() {
    return {
        estado: "activo",
        version: "1.0.0",
        message: "Sistema Vitonco funcionando correctamente"
    };
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
