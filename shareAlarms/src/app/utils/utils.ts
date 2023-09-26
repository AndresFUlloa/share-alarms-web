export class Utils {

    static fechasIguales(fecha1:Date, fecha2: Date): boolean {
        return (
            fecha1.getFullYear() === fecha2.getFullYear() &&
            fecha1.getMonth() === fecha2.getMonth() &&
            fecha1.getDate() === fecha2.getDate()
        );
    }

    static crearFecha(fechaString:string, horaString:string, franja:string): Date{
        const partes = fechaString.split('/');
        const partesHora = horaString.split(':');

        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const anio = parseInt(partes[2], 10);

        var hora = parseInt(partesHora[0], 10);
        const minuto = parseInt(partesHora[1], 10);

        if (franja === 'pm' && hora < 12) {
            hora += 12;
        } else if (franja === 'am' && hora === 12) {
            hora = 0;
        }

        const fecha = new Date(anio, mes, dia, hora, minuto);
        return fecha;

    }

    static parseFecha(fecha:Date | undefined): string | null{
        if(fecha===undefined){
            return null;
        }
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
        const anio = fecha.getFullYear();

        return `${dia}/${mes}/${anio}`;
    }

    static getTime(fecha:Date | undefined): string | null{
        if(fecha === undefined){
            return null;
        }
        var horas = fecha.getHours();
        const minutos = fecha.getMinutes().toString().padStart(2, '0');

        horas = horas % 12;
        horas = horas ? horas : 12;

        return `${horas}:${minutos}`;
    }

    static getFranja(fecha:Date | undefined): string | null{
        if(fecha === undefined){
            return null;
        }
        var horas = fecha.getHours();
        return horas >= 12 ? 'pm' : 'am';
    }

    static isNullOrEmpty(value: string | null | undefined): boolean{
        console.log('Value = ', value)
        return value === null || value === undefined || value === '';
    }

}