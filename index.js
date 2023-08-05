console.log("JS funguje");
// DD.MM.YYYY


// verze 1
/*
const jeValidniDatum = (datum) => {
    const prestupnyRok = rok => {
        if ( rok % 400 === 0 || (rok % 4 === 0 && rok % 100 !== 0)){
            return true;
        } return false;
    }

    const den = datum.slice(0, 2);
    const mesic = datum.slice(3, 5);
    const rok = datum.slice(-4);

    if(rok >= 1900 && rok <= 2100) {
        if (mesic === "01" || mesic === "03" || mesic === "05" || mesic === "07" || mesic === "08" || mesic === "10" || mesic === "12"){
            if (den >= 1 && den <= 31) {
                return true;
            }
        } else if (mesic === "04" || mesic === "06" || mesic === "09" || mesic === "11") {
            if (den >= 1 && den <= 30) {
                return true;
            }
        } else if (mesic === "02") {
            if (prestupnyRok(rok) === true) {
                if (den >= 1 && den <= 29) {
                    return true;
                } else {
                    if (den >= 1 && den <= 28) {
                        return true;
                    }
                }
                
            }
        }
    } return false;
}

console.log(jeValidniDatum("29.02.2024")) */

// BONUS 1
/*const jeValidniDatum = (datum) => {
    const prestupnyRok = rok => {
        if ( rok % 400 === 0 || (rok % 4 === 0 && rok % 100 !== 0)){
            return true;
        } return false;
    }

    const den = datum.slice(0, 2);
    const mesic = datum.slice(3, 5);
    const rok = datum.slice(-4);

    const pocetDniMesice = (mesic, rok) => {
        if (mesic === "01" || mesic === "03" || mesic === "05" || mesic === "07" || mesic === "08" || mesic === "10" || mesic === "12") {
            return 31
        } else if (mesic === "04" || mesic === "06" || mesic === "09" || mesic === "11"){
            return 30
        } else if (mesic === "02") {
            if (prestupnyRok(rok) === true) {
                return 29;
                } else {
                    return 28;
                    }
        } else {
            return false;
            }
                
        }
    

    if (rok >= 1900 && rok <= 2100) {
        if (den >= 1 && den <= pocetDniMesice(mesic, rok)){
                return true;
            }
    } return false;

}

console.log(jeValidniDatum("29.12.2024")) */

// BONUS 2

const jeValidniDatum = (datum) => {
    const prestupnyRok = rok => {
        if ( rok % 400 === 0 || (rok % 4 === 0 && rok % 100 !== 0)){
            return true;
        } return false;
    }

    const den = datum.slice(0, 2);
    const mesic = datum.slice(3, 5);
    const rok = datum.slice(-4);

    const pocetDniMesice = (mesic, rok) => {
        if (mesic === "01" || mesic === "03" || mesic === "05" || mesic === "07" || mesic === "08" || mesic === "10" || mesic === "12") {
            return 31
        } else if (mesic === "04" || mesic === "06" || mesic === "09" || mesic === "11"){
            return 30
        } else if (mesic === "02") {
            if (prestupnyRok(rok) === true) {
                return 29;
                } else {
                    return 28;
                    }
        } else {
            return false;
            }
                
        }
    

    if (rok >= 1900 && rok <= 2100) {
        if (pocetDniMesice(mesic, rok) === false) {
            return `Datum je špatně. Chyba: Špatně zadaný měsíc.`;
            
            } else if (den >= 1 && den <= pocetDniMesice(mesic, rok)){
                return `Datum je v pořádku.`;
            
            } else {
                return `Datum je špatně. Chyba: Špatně zadaný den.`;
            }
    } return `Datum je špatně. Chyba: Špatně zadaný rok.`;

}

console.log(jeValidniDatum("30.12.2024")) 

