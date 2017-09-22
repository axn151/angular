/*var app = angular.module('MyApp', []);
app.controller('questionController', function ($scope) {
    //objeto pregunta
    $scope.pregunta = {
        id: 1,
        premisa: '¿Que tipo de Framework es AngularJS?',
        respuestas: [
            {
                id: 1,
                text: 'MVC',
                active: 'false'
         },
            {
                id: 2,
                text: 'MVVM',
                active: 'false'
         },
            {
                id: 3,
                text: 'MVR',
                active: 'false'
         },
            {
                id: 4,
                text: 'MVW',
                active: 'false'
         }
      ]
    };
    $scope.marcar = function () {
        angular.forEach($scope.pregunta.respuestas, function (value, key) {
            value.active = false;
        });
        this.key.active = true;
    };

    $scope.respuestas = [];
    $scope.responder = function () {
        angular.forEach($scope.pregunta.respuestas, function (respuesta, i) {
            if (respuesta.active)
                $scope.respuestas.push({
                    id: $scope.id,
                    key: respuesta.id
                });
        });
    };
});
*/
