var elementos = document.querySelectorAll('[type=radio]');


for (let i = 0; i < elementos.length; i++) {
    //event change é quando detecta alteracao {   
    elementos[i].addEventListener('change', (e) => {
        let mark = e.target.value;


        if (mark == "true") {

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var j = 0; j < els.length; j++){
                els[j].disable = true;
            }

        } else if (mark == "false") {
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var j = 0; j < els.length; j++){
                els[j].disable = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=true]');
            correta.parentNode.style.backgroundColor = "green";
        }
    })

}