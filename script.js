
const respuestas = {
    necronomicon: 'arab',
    nyarlathotep: 'egyptian',
    whateley: 'sothoth',
    dunwich: 'brother',
    god: 'azathoth',
    copia: 'miskatonic'
}

const quiz = 
{ preguntas: [
    {
        pregunta: '¿Quién escribió el Necronomicon?',
        a: 'Randolph Carter',
        a1: 'carter',
        b: 'Abdul Alhazred, "el árabe loco"',
        b1: 'arab',
        c:'Yog-Sothoth',
        c1: 'yog',
        d: 'H. P. Lovecraft',
        d1: 'lovecraft',
        name: 'necronomicon',

    },
    {
        pregunta: '¿En que forma se suele manifestar Nyarlathotep?',
        a: 'Un hombre ejipcio alto',
        a1: 'egyptian',
        b: 'Una masa llena de ojos',
        b1: 'eyes',
        c:'Una fuerza invisible de gran poder',
        c1: 'force',
        d: 'El color fuera del espacio',
        d1: 'colour',
        name: 'nyarlathotep',

    },
    {
        pregunta: '¿Quién es el padre de Wilbur Whateley?',
        a: 'Yog-Sothoth',
        a1: 'sothoth',
        b: 'El viejo Whateley',
        b1: 'old',
        c:'Charles Dexter Ward',
        c1: 'ward',
        d: 'Cthulhu',
        d1: 'cthulhu',
        name: 'whateley',

    },

    {
        pregunta: '¿Que relación tiene el horror que asola Dunwich con Wilbur Whateley?',
        a: 'Es su hermano gemelo',
        a1: 'brother',
        b: 'Es un demonio guardian que protege a su madre',
        b1: 'demon',
        c:'Es su padre',
        c1: 'father',
        d: 'Es su madre',
        d1: 'mother',
        name: 'dunwich',

    },

    {
        pregunta: '¿Quién es el dios ciego, centro del universo?',
        a: 'Yig',
        a1: 'yig',
        b: 'Azathoth',
        b1: 'azathoth',
        c: 'Cthulhu',
        c1: 'cthulhu2',
        d: 'Shub-Niggurath',
        d1: 'shub',
        name: 'god',

    },

    {
        pregunta: '¿De dónde intenta obtener Wilbur una copia del Necronomicon?',
        a: 'Arkham Asylum',
        a1: 'arkham',
        b: 'Universidad de Yale',
        b1: 'yale',
        c: 'Universidad de Miskatonic',
        c1: 'yale',
        d: 'La casa de la bruja',
        d1: 'witch',
        name: 'copia',

    },

    {
            pregunta: '¿De dónde intenta obtener Wilbur una copia del Necronomicon?',//
            a: 'Arkham Asylum',
            a1: 'arkham',
            b: 'Universidad de Yale',
            b1: 'yale',
            c: 'Universidad de Miskatonic',
            c1: 'yale',
            d: 'La casa de la bruja',
            d1: 'witch',
            name: 'copia',

    },

    {
            pregunta: '¿De dónde intenta obtener Wilbur una copia del Necronomicon?',
            a: 'Arkham Asylum',
            a1: 'arkham',
            b: 'Universidad de Yale',
            b1: 'yale',
            c: 'Universidad de Miskatonic',
            c1: 'yale',
            d: 'La casa de la bruja',
            d1: 'witch',
            name: 'copia',

    },

    {
            pregunta: '¿De dónde intenta obtener Wilbur una copia del Necronomicon?',
            a: 'Arkham Asylum',
            a1: 'arkham',
            b: 'Universidad de Yale',
            b1: 'yale',
            c: 'Universidad de Miskatonic',
            c1: 'yale',
            d: 'La casa de la bruja',
            d1: 'witch',
            name: 'copia',

    },

    {
            pregunta: '¿De dónde intenta obtener Wilbur una copia del Necronomicon?',
            a: 'Arkham Asylum',
            a1: 'arkham',
            b: 'Universidad de Yale',
            b1: 'yale',
            c: 'Universidad de Miskatonic',
            c1: 'yale',
            d: 'La casa de la bruja',
            d1: 'witch',
            name: 'copia',

    },
    ]
   
}



    let imprimir = ''
    for (let i = 0; i < quiz.preguntas.length; i++) {
        imprimir += pintarPreguntas(quiz.preguntas, i) 
        
    }


    function pintarPreguntas(pregunta, i) {
        return ` <fieldset class='question'id='field${i}'>
        <legend>${pregunta[i].pregunta}</legend>
        <label for="${pregunta[i].a1}-field">${pregunta[i].a}</label>
        <input id="${pregunta[i].a1}-field" type="radio" name="${pregunta[i].name}" value="${pregunta[i].a1}">
  
        <label for="${pregunta[i].b1}-field">${pregunta[i].b}</label>
        <input id="${pregunta[i].b1}-field" type="radio" name="${pregunta[i].name}" value="${pregunta[i].b1}">
  
        <label for="${pregunta[i].c1}-field">${pregunta[i].c}</label>
        <input id="${pregunta[i].c1}-field" type="radio" name="${pregunta[i].name}" value="${pregunta[i].c1}">
  
        <label for="${pregunta[i].d1}-field">${pregunta[i].d}</label>
        <input id="${pregunta[i].d1}-field" type="radio" name="${pregunta[i].name}" value="${pregunta[i].d1}">
      </fieldset>`
    
    }

    document.querySelector('#form').innerHTML = imprimir + ` <input type="submit" id="btnsubmit">`

    document.querySelector('#form').addEventListener('submit',function (event, preguntas) {
            
        event.preventDefault()

        console.log(event)
        //checked: true
        /* if (event.target[2].checked == respuestas.necronomicon) {//true
            console.log('correcto')
        }
        
        */     
        /*   let l = event.target.length/10
        for (let i = 0; i < l; i++) {
        let selected = document.querySelector(`input[name="${preguntas.name}"]:checked`)
        if (selected.value == respuestas.necronomicon) {
        console.log(selected[i].value);
        
        }
    
        }   */
        let selected = document.querySelector('input[name="necronomicon"]:checked')
        if (selected.value == respuestas.necronomicon) {
            console.log(selected.value);
            document.querySelector('#field0').style.backgroundColor = 'rgb(134, 218, 134)'
        
      
        }else{
            document.querySelector('#field0').style.backgroundColor = 'rgb(192, 65, 10)'
        } 
        //event.target.submit()

    
        
    })