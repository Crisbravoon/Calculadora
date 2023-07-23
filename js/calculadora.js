

const pantalla = document.querySelector('.pantalla');
const btns = document.querySelectorAll('.btn');

btns.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const clickbtn = boton.textContent;

        // Valida el borrar 
        if (boton.id === "c") {
            pantalla.textContent = '0';
            return;
        };

        //Validando de borrar los numeros
        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error...') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        };

        //Validando que no se sume el 0 inicial de la calculadora
        if(boton.id==="igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Error...';
            }
            return;   
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error...') {
            pantalla.textContent = clickbtn;
        }
        else {
            pantalla.textContent += clickbtn;
        };
    });
});
