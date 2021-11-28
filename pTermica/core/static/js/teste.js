const calcular = document.getElementById('calcular');

function pausaTerm() {
    const entrada = document.getElementById('entrada').value;
    const resultado = document.getElementById('resultado');
    
    
    if (entrada == "08:00"){
        p1 = "Pausa 1 = 09:40AM";
        p2 = "Pausa 2 = 01:40PM";
        p3 = "Pausa 3 = 03:40PM";
    
    }else if (entrada){
            p1 = "Pausa 1 = 05:40PM";
            p2 = "Pausa 2 = 07:40PM";
            p3 = "Pausa 3 = 11:40PM";
    }

    resultado.textContent = `${p1} ${p2} ${p3}`;

}

calcular.addEventListener('click', pausaTerm);