function consumeServicio(metodo, data, servicio, funcion) {
    $.ajax({
      url: servicio,
      type: metodo,
      dataType: 'JSON',
      data: data,
      success: async function (result) {
        funcion(result)
      },
      error: function (e) {
        console.log(e.responseText);
      }
    });
  }