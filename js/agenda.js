var configAgenda = function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "notasController",
        templateUrl: "views/home.html"
    });

}

//creamos el modulo y le aplicamos la configuración
var Agenda = angular.module("Agenda", ["ngRoute"]).config(configAgenda);
