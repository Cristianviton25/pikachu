const VERSION = '1.2.0';

function saludar (nombre){
    return 'Hola ${nombre}, bienvenido a Yiyomafla';
}

function healthCheck(){
    return {
        status: 'ok',
        version:VERSION,
        timestamp: new Date().toISOString(),
        message: 'Sistemas Yiyomafla funcionando correctamente'
    };
}

function verificarSistema(){
const resultado = healthCheck();
const statusDiv= document.getElementById('status');
statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
statusDiv.style.color = '#009B4C'
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
    verificarSistema();    "verificar":``
})