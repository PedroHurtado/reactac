export function formatTimer(date){
    let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
}