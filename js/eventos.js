document.addEventListener("DOMContentLoaded", function() {
    const subtitle = document.getElementById("subTitleJS");
    const subtitle2 = document.getElementById("subTitleJS2");

    setTimeout(function(){
        subtitle.textContent = "Platos de comida";
        setTimeout(function(){
            subtitle2.textContent = "Y sus calificaciones";
        }, 1000);
    }, 1000);

    const platos = [
        {
            "nombre": "Pizza",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Sushi",
            "gusto": "No me gusta",
            "isGusto": false
        },
        {
            "nombre": "Hamburguesa",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Tacos",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Lomo saltado",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Tallarines",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Sudado",
            "gusto": "No me gusta",
            "isGusto": false
        },
        {
            "nombre": "Caldo de gallina",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Chaufa",
            "gusto": "Me gusta",
            "isGusto": true
        },
        {
            "nombre": "Sangresita",
            "gusto": "No me gusta",
            "isGusto": false
        }
    ];

    const platosElement = document.getElementById("platos");
    let contenido = "";
    platos.forEach(function(plato) {    
        let claseicon = plato.isGusto ? "gusto" : "no-gusto";
        const template = `
            <div class="plato">
                <div class="icon icon-${claseicon}"></div>
                <div class="data">
                    <h4>${plato.nombre}</h4>    
                </div>
                <div>
                     <h3>${plato.gusto}</h3>
                </div>
            </div>
        `;
        contenido += template;
    });

    platosElement.innerHTML = contenido;
});
