function configuraTemplate(nivel) {
    creaHeader(nivel);
}

var nivelGlobal = 0;
function creaHeader(nivel) {
    nivelGlobal = nivel;

    let data = {
        'CATEGORIA': -1
    };
    consumeServicio('POST', data, CONSULTACATEGORIAS, llenaCategorias);

}

function llenaCategorias(categorias) {
    let html = '';
    let menu = '';

    if (nivelGlobal == 0) {
        for (let cat of categorias) {
            menu += '<li class="nav-item">';
            menu += '<a class="nav-link" href="galeria.html">' + cat.DESCRIPCION + '<span class="sr-only">(current)</span></a>';
            menu += '</li>';
        }
    }

    html += '        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">';
    html += '        <a class="navbar-brand" href="#">';
    html += '            <img src="img/paulescobarwhite.png" width="30" height="30" class="d-inline-block align-top" alt="">';
    html += '        </a>';
    html += '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"';
    html += '            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    html += '            <span class="navbar-toggler-icon"></span>';
    html += '        </button>   ';
    html += '        <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    html += '            <ul class="navbar-nav mr-auto">';
    html += menu;
    html += '            </ul>';
    html += '            <span class="fa fa-facebook-square" style="font-size: 24px; color:white;" ><a id="nombre" style="font-size: 15px; margin: 4px; font-family: sans-serif"><a/></span>';
    html += '            <span class="fa fa-instagram" style="font-size: 24px; color:white;" ><a id="nombre" style="font-size: 15px; margin: 4px; font-family: sans-serif"><a/></span>';
    html += '            <span class="fa fa-twitter" style="font-size: 24px; color:white;" ><a id="nombre" style="font-size: 15px; margin: 4px; font-family: sans-serif"><a/></span>';
    html += '        </div>';
    html += '    </nav>';
    $('#header').html(html);
}