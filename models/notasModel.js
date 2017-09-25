//modelo notasModel
//un servicio viene a ser un modelo
Agenda.service("notasModel", function () {

    this.getNotas = function () {

        var resultado;

        $.ajax({
                type: "GET",
                // data: persona,
                url: 'http://localhost:8001/api/users',
                success: function (data) {
                    resultado = data;

                },
                error: function (e) {

                    resultado = null;
                }

            }

        );

        alert(resultado);
        return resultado;
    }
});
