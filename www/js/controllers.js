angular.module('app.controllers', [])

        /* Login acceso */
        .controller('postController', function ($scope, $http, $state, $ionicLoading, $timeout, $ionicPopup) {
            $scope.rsJSON = [];
            // obtenemos el evento submit del formulario ng-submit="entrar()"
            $scope.entrar = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })
                var req = {
                    method: 'POST',
                    //url: 'http://192.168.1.33/01/model/index.php',
                    url: 'https://www.diabetappsec.com/model/index.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {usuario: $scope.txtUsuario, contrasena: $scope.txtContrasena},
                    dataType: "jsonp"
                }

                $http(req)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (data != "1") {
                                $ionicLoading.hide();
                                //alert("Datos no correctos");
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Datos no correctos',
                                    template: ''
                                });
                                alertPopup.then(function (res) {
                                    console.log('adios');
                                });
                            } else {
                                window.localStorage['MM_Username'] = $scope.txtUsuario;
                                console.log($scope.txtUsuario);
                                //window.localStorage['MM_password'] = data.contrasena;
                                //window.localStorage['MM_id'] = data.id;
                                //alert("Datos correctos");                                
                                $timeout(function () {
                                    $ionicLoading.hide();
                                    $state.go("menu.index");
                                }, 2000);
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: data,
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };
        })

        /* Login INVITADO */
        .controller('invitadoController', function ($scope, $http, $state, $ionicLoading, $timeout, $ionicPopup) {
            $scope.rsJSON = [];
            // obtenemos el evento submit del formulario ng-submit="entrar()"
            $scope.entrar1 = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })
                var req = {
                    method: 'POST',
                    //url: 'http://192.168.1.33/01/model/invitado.php',
                    url: 'https://www.diabetappsec.com/model/invitado.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {usuario: $scope.txtInvitado},
                    dataType: "jsonp"
                }

                $http(req)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (typeof (data.codigo) == "undefined") {
                                $ionicLoading.hide();
                                //alert("Datos no correctos");
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Datos no correctos',
                                    template: ''
                                });
                                alertPopup.then(function (res) {
                                    console.log('adios');
                                });
                            } else {
                                window.localStorage['MM_Username'] = data.codigo;
                                //window.localStorage['MM_id'] = data.id;
                                //alert("Datos correctos");                                
                                $timeout(function () {
                                    $ionicLoading.hide();
                                    $state.go("menu.index");
                                }, 2000);
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: data,
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };
        })
        
        /************** descativar login y seguridad ***************************************/
        /* detecta si hay login en la home y redirige al inicio */

        /* detecta si hay login en la home y redirige al inicio */
        .controller('ProtectedController3', ['$scope', '$stateParams',
            function ($scope, $location, $ionicViewService, $state) {
                /*
                var user = window.localStorage['MM_Username'];
                if (user !== "") {
                    window.location = "#/menu/home";
                    //alert('Sin acceso');

                }
                */
            }])
        /* detecta si hay login a la carga de cualquier página */
        .controller('ProtectedController', ['$scope', '$stateParams',
            function ($scope, $location, $ionicViewService, $state) {
                /*
                var user = window.localStorage['MM_Username'];
                if (user === "" || user == undefined) {
                    //$state.go("login");
                    //alert('Sin acceso');
                    window.location = "#/login";
                }
                */
            }])
        /* detecta el cambio de estado del navegador para ver si está logeado */
        .controller('ProtectedController2', ['$rootScope', function ($rootScope) {
                /*
            }
                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                   
                    //alert(toState.name);
                    var user = window.localStorage['MM_Username'];
                    if (user === "" || user == undefined) {
                        //$state.go("login");
                        //alert('Sin acceso');
                        window.location = "#/login";
                    }

                });
                //alert("controller loaded");
                    */
            }])


        .controller('homeCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('presentacionCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('bibliografiaCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])
        .controller('creditosCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])
        .controller('avisolegalCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('01Ctrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])


        .controller('menuCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {


            }])

        .controller('loginCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                /******* para desactivar LOGIN, borra esta línea en modo login *************/
                window.location = "#/menu/home";

            }])

        .controller('cerrarCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                // vaciar datos del usuario al cerrar sesión
                window.localStorage['MM_Username'] = "";
                window.localStorage['MM_password'] = "";
                window.localStorage['MM_id'] = "";
            }])

        .controller('toggleCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {

                $scope.toggle = function () {
                    $scope.toggleModel.value1 = null;
                    $scope.toggleModel.value2 = null;
                };
                $scope.toggle1 = function () {
                    $scope.toggleModel.value3 = null;
                };
            }])

        .controller('testCtrl', ['$scope', '$stateParams', '$location', '$state', '$ionicPopup', '$ionicHistory', '$ionicScrollDelegate',
            function ($scope, $stateParams, $location, $state, $ionicPopup, $ionicHistory, $ionicScrollDelegate, $timeout) {




                var storage = window.localStorage;
                //storage.setItem('setting', true);
                // leer datos de local y enviar a los checkbox
                // figura 4.5 heredado del la app ICapp
                $scope.Captopril = $scope.$eval(storage.getItem('Captopril'));
                $scope.Enalapril = $scope.$eval(storage.getItem('Enalapril'));
                $scope.Lisinopril = $scope.$eval(storage.getItem('Lisinopril'));
                $scope.Ramipril = $scope.$eval(storage.getItem('Ramipril'));
                $scope.Trandopril = $scope.$eval(storage.getItem('Trandopril'));
                // ARA II
                $scope.Candesartan = $scope.$eval(storage.getItem('Candesartan'));
                $scope.Valsartan = $scope.$eval(storage.getItem('Valsartan'));
                $scope.Losartan = $scope.$eval(storage.getItem('Losartan'));
                // betabloqeuantes
                $scope.Bisoprolol = $scope.$eval(storage.getItem('Bisoprolol'));
                $scope.Carvedilol = $scope.$eval(storage.getItem('Carvedilol'));
                $scope.Metoprolol = $scope.$eval(storage.getItem('Metoprolol'));
                $scope.Nebivolol = $scope.$eval(storage.getItem('Nebivolol'));
                // uso de diuréticos y Dai
                $scope.diureticos = $scope.$eval(storage.getItem('diureticos'));
                $scope.dai = $scope.$eval(storage.getItem('dai'));
                // ARM
                $scope.Espironolactona = $scope.$eval(storage.getItem('Espironolactona'));
                $scope.Eplerenona = $scope.$eval(storage.getItem('Eplerenona'));
                // Diurético de asa
                $scope.Furosemida = $scope.$eval(storage.getItem('Furosemida'));
                $scope.Torasemida = $scope.$eval(storage.getItem('Torasemida'));
                // Diurético tiazídico
                $scope.Hidroclorotiazida = $scope.$eval(storage.getItem('Hidroclorotiazida'));
                $scope.Metolazona = $scope.$eval(storage.getItem('Metolazona'));
                $scope.Indapamida = $scope.$eval(storage.getItem('Indapamida'));
                // Diurético ahorrador de potasio
                $scope.Espironolactona_Eplerenona = $scope.$eval(storage.getItem('Espironolactona_Eplerenona'));
                $scope.Amilorida = $scope.$eval(storage.getItem('Amilorida'));
                $scope.Triamtereno = $scope.$eval(storage.getItem('Triamtereno'));
                // Ivabradina
                $scope.Ivabradina = $scope.$eval(storage.getItem('Ivabradina'));
                // Vasodilatadores
                $scope.Nitroglicerina = $scope.$eval(storage.getItem('Nitroglicerina'));
                $scope.Isosorbida_dinitrato = $scope.$eval(storage.getItem('Isosorbida_dinitrato'));
                $scope.Nitroprusida = $scope.$eval(storage.getItem('Nitroprusida'));
                $scope.Nesiritida = $scope.$eval(storage.getItem('Nesiritida'));
                // TRC
                $scope.trc_1 = $scope.$eval(storage.getItem('trc_1'));
                $scope.trc_2 = $scope.$eval(storage.getItem('trc_2'));
                $scope.trc_3 = $scope.$eval(storage.getItem('trc_3'));
                $scope.trc_4 = $scope.$eval(storage.getItem('trc_4'));
                // digoxina
                $scope.digoxina = $scope.$eval(storage.getItem('digoxina'));
                // sacubitrilo/valsartan 
                $scope.sacubitrilo1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                $scope.sacubitrilo2 = $scope.$eval(storage.getItem('sacubitrilo2'));
                //****************************************************
                $scope.dm_ecv = $scope.$eval(storage.getItem('dm_ecv'));
                $scope.ecv_dm = $scope.$eval(storage.getItem('ecv_dm'));
                $scope.ecv_desconocido = $scope.$eval(storage.getItem('ecv_desconocido'));
                $scope.ecv_desconocido_1 = $scope.$eval(storage.getItem('ecv_desconocido_1'));
                $scope.ecv_desconocido_2 = $scope.$eval(storage.getItem('ecv_desconocido_2'));
                $scope.ecv_conocido = $scope.$eval(storage.getItem('ecv_conocido'));
                $scope.dm_conocido = $scope.$eval(storage.getItem('dm_conocido'));
                $scope.dm_desconocido = $scope.$eval(storage.getItem('dm_desconocido'));
                $scope.dm_desconocido_1 = $scope.$eval(storage.getItem('dm_desconocido_1'));
                $scope.dm_desconocido_2 = $scope.$eval(storage.getItem('dm_desconocido_2'));
                $scope.t1_3_1 = $scope.$eval(storage.getItem('t1_3_1'));
                $scope.t1_3_2 = $scope.$eval(storage.getItem('t1_3_2'));
                $scope.t1_3_3 = $scope.$eval(storage.getItem('t1_3_3'));
                $scope.t1_3_4 = $scope.$eval(storage.getItem('t1_3_4'));
                $scope.t1_3_5 = $scope.$eval(storage.getItem('t1_3_5'));
                $scope.t1_3_6 = $scope.$eval(storage.getItem('t1_3_6'));
                $scope.t1_3_7 = $scope.$eval(storage.getItem('t1_3_7'));
                $scope.t1_3_8 = $scope.$eval(storage.getItem('t1_3_8'));
                $scope.t1_3_9 = $scope.$eval(storage.getItem('t1_3_9'));
                $scope.t1_3_10 = $scope.$eval(storage.getItem('t1_3_10'));
                $scope.t1_4_1 = $scope.$eval(storage.getItem('t1_4_1'));
                $scope.t1_4_2 = $scope.$eval(storage.getItem('t1_4_2'));
                $scope.t1_4_3 = $scope.$eval(storage.getItem('t1_4_3'));
                $scope.t1_5_1 = $scope.$eval(storage.getItem('t1_5_1'));
                $scope.t1_5_2 = $scope.$eval(storage.getItem('t1_5_2'));
                $scope.t1_5_3 = $scope.$eval(storage.getItem('t1_5_3'));
                $scope.t1_5_4 = $scope.$eval(storage.getItem('t1_5_4'));
                $scope.fig_2_3_no = $scope.$eval(storage.getItem('fig_2_3_no'));
                $scope.fig_2_3_si = $scope.$eval(storage.getItem('fig_2_3_si'));
                $scope.fig_2_3_1_no = $scope.$eval(storage.getItem('fig_2_3_1_no'));
                $scope.fig_2_3_1_si = $scope.$eval(storage.getItem('fig_2_3_1_si'));
                $scope.f2_6_1 = $scope.$eval(storage.getItem('f2_6_1'));
                $scope.f2_6_2 = $scope.$eval(storage.getItem('f2_6_2'));
                $scope.f2_6_3 = $scope.$eval(storage.getItem('f2_6_3'));
                $scope.f2_6_no = $scope.$eval(storage.getItem('f2_6_no'));
                $scope.f2_6_si = $scope.$eval(storage.getItem('f2_6_si'));
                $scope.f2_6_1_no = $scope.$eval(storage.getItem('f2_6_1_no'));
                $scope.f2_6_1_si = $scope.$eval(storage.getItem('f2_6_1_si'));
                $scope.f2_6_2_no = $scope.$eval(storage.getItem('f2_6_2_no'));
                $scope.f2_6_2_si = $scope.$eval(storage.getItem('f2_6_2_si'));
                $scope.f2_8_1 = $scope.$eval(storage.getItem('f2_8_1'));
                $scope.f2_8_3 = $scope.$eval(storage.getItem('f2_8_3'));
                $scope.f2_8_no = $scope.$eval(storage.getItem('f2_8_no'));
                $scope.f2_8_si = $scope.$eval(storage.getItem('f2_8_si'));
                $scope.f2_8_1_no = $scope.$eval(storage.getItem('f2_8_1_no'));
                $scope.f2_8_1_si = $scope.$eval(storage.getItem('f2_8_1_si'));
                $scope.f2_8_2_no = $scope.$eval(storage.getItem('f2_8_2_no'));
                $scope.f2_8_2_si = $scope.$eval(storage.getItem('f2_8_2_si'));
                $scope.HbA_1 = $scope.$eval(storage.getItem('HbA_1'));
                $scope.HbA_2 = $scope.$eval(storage.getItem('HbA_2'));
                $scope.HbA_3 = $scope.$eval(storage.getItem('HbA_3'));
                $scope.HbA_1_1 = $scope.$eval(storage.getItem('HbA_1_1'));
                $scope.HbA_1_2 = $scope.$eval(storage.getItem('HbA_1_2'));
                $scope.HbA_1_3 = $scope.$eval(storage.getItem('HbA_1_3'));
                $scope.HbA_1_4 = $scope.$eval(storage.getItem('HbA_1_4'));
                $scope.HbA_1_5 = $scope.$eval(storage.getItem('HbA_1_5'));
                $scope.HbA_2_1 = $scope.$eval(storage.getItem('HbA_2_1'));
                $scope.HbA_2_2 = $scope.$eval(storage.getItem('HbA_2_2'));
                $scope.HbA_2_3 = $scope.$eval(storage.getItem('HbA_2_3'));
                $scope.HbA_2_4 = $scope.$eval(storage.getItem('HbA_2_4'));
                $scope.HbA_2_5 = $scope.$eval(storage.getItem('HbA_2_5'));
                $scope.HbA_3_1 = $scope.$eval(storage.getItem('HbA_3_1'));
                $scope.HbA_3_2 = $scope.$eval(storage.getItem('HbA_3_2'));
                $scope.HbA_3_3 = $scope.$eval(storage.getItem('HbA_3_3'));
                $scope.HbAs_1 = $scope.$eval(storage.getItem('HbAs_1'));
                $scope.HbAs_2 = $scope.$eval(storage.getItem('HbAs_2'));
                $scope.HbAs_3 = $scope.$eval(storage.getItem('HbAs_3'));
                $scope.fig_3_3_no = $scope.$eval(storage.getItem('fig_3_3_no'));
                $scope.fig_3_3_si = $scope.$eval(storage.getItem('fig_3_3_si'));
                $scope.f3_3_1 = $scope.$eval(storage.getItem('f3_3_1'));
                $scope.f3_3_2 = $scope.$eval(storage.getItem('f3_3_2'));
                $scope.f3_3_3 = $scope.$eval(storage.getItem('f3_3_3'));
                $scope.f3_3_4 = $scope.$eval(storage.getItem('f3_3_4'));
                $scope.f3_3_5 = $scope.$eval(storage.getItem('f3_3_5'));
                $scope.f3_3_5_1 = $scope.$eval(storage.getItem('f3_3_5_1'));
                $scope.f3_3_6 = $scope.$eval(storage.getItem('f3_3_6'));
                $scope.f3_3_6_1 = $scope.$eval(storage.getItem('f3_3_6_1'));
                $scope.f3_3_7 = $scope.$eval(storage.getItem('f3_3_7'));
                $scope.f3_3_8 = $scope.$eval(storage.getItem('f3_3_8'));
                $scope.f3_3_9 = $scope.$eval(storage.getItem('f3_3_9'));
                $scope.f3_3_10 = $scope.$eval(storage.getItem('f3_3_10'));
                $scope.f3_3_11 = $scope.$eval(storage.getItem('f3_3_11'));
                $scope.f3_3_12 = $scope.$eval(storage.getItem('f3_3_12'));
                $scope.f3_3_13 = $scope.$eval(storage.getItem('f3_3_13'));
                $scope.f3_3_14 = $scope.$eval(storage.getItem('f3_3_14'));
                $scope.f3_3_15 = $scope.$eval(storage.getItem('f3_3_15'));
                $scope.f3_3_16 = $scope.$eval(storage.getItem('f3_3_16'));
                $scope.f3_5_1 = $scope.$eval(storage.getItem('f3_5_1'));
                $scope.f3_5_2 = $scope.$eval(storage.getItem('f3_5_2'));
                $scope.f3_5_3 = $scope.$eval(storage.getItem('f3_5_3'));
                $scope.f3_5_4 = $scope.$eval(storage.getItem('f3_5_4'));
                $scope.f3_5_5 = $scope.$eval(storage.getItem('f3_5_5'));
                $scope.f3_5_6 = $scope.$eval(storage.getItem('f3_5_6'));
                $scope.f3_5_7 = $scope.$eval(storage.getItem('f3_5_7'));
                $scope.f3_5_8 = $scope.$eval(storage.getItem('f3_5_8'));
                $scope.f3_5_1_si = $scope.$eval(storage.getItem('f3_5_1_si'));
                $scope.f3_5_1_no = $scope.$eval(storage.getItem('f3_5_1_no'));
                $scope.f3_5_2_si = $scope.$eval(storage.getItem('f3_5_2_si'));
                $scope.f3_5_2_no = $scope.$eval(storage.getItem('f3_5_2_no'));
                $scope.f3_5_3_si = $scope.$eval(storage.getItem('f3_5_3_si'));
                $scope.f3_5_3_no = $scope.$eval(storage.getItem('f3_5_3_no'));
                $scope.f3_5_4_si = $scope.$eval(storage.getItem('f3_5_4_si'));
                $scope.f3_5_4_no = $scope.$eval(storage.getItem('f3_5_4_no'));
                $scope.f4_3_1 = $scope.$eval(storage.getItem('f4_3_1'));
                $scope.f4_3_2 = $scope.$eval(storage.getItem('f4_3_2'));
                $scope.f4_3_3 = $scope.$eval(storage.getItem('f4_3_3'));
                $scope.f4_3_4 = $scope.$eval(storage.getItem('f4_3_4'));
                $scope.f4_3_5 = $scope.$eval(storage.getItem('f4_3_5'));
                $scope.f4_3_6 = $scope.$eval(storage.getItem('f4_3_6'));
                $scope.f4_3_7 = $scope.$eval(storage.getItem('f4_3_7'));
                $scope.f4_3_8 = $scope.$eval(storage.getItem('f4_3_8'));
                $scope.updateStorage = function () {
                    // figura 4.5 heredado del la app ICapp
                    storage.setItem('Captopril', $scope.Captopril);
                    storage.setItem('Enalapril', $scope.Enalapril);
                    storage.setItem('Lisinopril', $scope.Lisinopril);
                    storage.setItem('Ramipril', $scope.Ramipril);
                    storage.setItem('Trandopril', $scope.Trandopril);
                    storage.setItem('Candesartan', $scope.Candesartan);
                    storage.setItem('Valsartan', $scope.Valsartan);
                    storage.setItem('Losartan', $scope.Losartan);
                    storage.setItem('Bisoprolol', $scope.Bisoprolol);
                    storage.setItem('Carvedilol', $scope.Carvedilol);
                    storage.setItem('Metoprolol', $scope.Metoprolol);
                    storage.setItem('Nebivolol', $scope.Nebivolol);
                    storage.setItem('diureticos', $scope.diureticos);
                    storage.setItem('dai', $scope.dai);
                    storage.setItem('Espironolactona', $scope.Espironolactona);
                    storage.setItem('Eplerenona', $scope.Eplerenona);
                    storage.setItem('Furosemida', $scope.Furosemida);
                    storage.setItem('Torasemida', $scope.Torasemida);
                    storage.setItem('Hidroclorotiazida', $scope.Hidroclorotiazida);
                    storage.setItem('Metolazona', $scope.Metolazona);
                    storage.setItem('Indapamida', $scope.Indapamida);
                    storage.setItem('Espironolactona_Eplerenona', $scope.Espironolactona_Eplerenona);
                    storage.setItem('Amilorida', $scope.Amilorida);
                    storage.setItem('Triamtereno', $scope.Triamtereno);
                    storage.setItem('Ivabradina', $scope.Ivabradina);
                    storage.setItem('digoxina', $scope.digoxina);
                    storage.setItem('sacubitrilo1', $scope.sacubitrilo1);
                    storage.setItem('sacubitrilo2', $scope.sacubitrilo2);
                    storage.setItem('trc_1', $scope.trc_1);
                    storage.setItem('trc_2', $scope.trc_2);
                    storage.setItem('trc_3', $scope.trc_3);
                    storage.setItem('trc_4', $scope.trc_4);
                    // *******************************************
                    storage.setItem('dm_ecv', $scope.dm_ecv);
                    storage.setItem('ecv_dm', $scope.ecv_dm);
                    storage.setItem('ecv_desconocido', $scope.ecv_desconocido);
                    storage.setItem('ecv_desconocido_1', $scope.ecv_desconocido_1);
                    storage.setItem('ecv_desconocido_2', $scope.ecv_desconocido_2);
                    storage.setItem('ecv_conocido', $scope.ecv_conocido);
                    storage.setItem('dm_conocido', $scope.dm_conocido);
                    storage.setItem('dm_desconocido', $scope.dm_desconocido);
                    storage.setItem('dm_desconocido_1', $scope.dm_desconocido_1);
                    storage.setItem('dm_desconocido_2', $scope.dm_desconocido_2);
                    storage.setItem('t1_3_1', $scope.t1_3_1);
                    storage.setItem('t1_3_2', $scope.t1_3_2);
                    storage.setItem('t1_3_3', $scope.t1_3_3);
                    storage.setItem('t1_3_4', $scope.t1_3_4);
                    storage.setItem('t1_3_5', $scope.t1_3_5);
                    storage.setItem('t1_3_6', $scope.t1_3_6);
                    storage.setItem('t1_3_7', $scope.t1_3_7);
                    storage.setItem('t1_3_8', $scope.t1_3_8);
                    storage.setItem('t1_3_9', $scope.t1_3_9);
                    storage.setItem('t1_3_10', $scope.t1_3_10);
                    storage.setItem('t1_4_1', $scope.t1_4_1);
                    storage.setItem('t1_4_2', $scope.t1_4_2);
                    storage.setItem('t1_4_3', $scope.t1_4_3);
                    storage.setItem('t1_5_1', $scope.t1_5_1);
                    storage.setItem('t1_5_2', $scope.t1_5_2);
                    storage.setItem('t1_5_3', $scope.t1_5_3);
                    storage.setItem('t1_5_4', $scope.t1_5_4);
                    storage.setItem('fig_2_3_no', $scope.fig_2_3_no);
                    storage.setItem('fig_2_3_si', $scope.fig_2_3_si);
                    storage.setItem('fig_2_3_1_no', $scope.fig_2_3_1_no);
                    storage.setItem('fig_2_3_1_si', $scope.fig_2_3_1_si);
                    storage.setItem('f2_6_1', $scope.f2_6_1);
                    storage.setItem('f2_6_2', $scope.f2_6_2);
                    storage.setItem('f2_6_3', $scope.f2_6_3);
                    storage.setItem('f2_6_no', $scope.f2_6_no);
                    storage.setItem('f2_6_si', $scope.f2_6_si);
                    storage.setItem('f2_6_1_no', $scope.f2_6_1_no);
                    storage.setItem('f2_6_1_si', $scope.f2_6_1_si);
                    storage.setItem('f2_6_2_no', $scope.f2_6_2_no);
                    storage.setItem('f2_6_2_si', $scope.f2_6_2_si);
                    storage.setItem('f2_8_1', $scope.f2_8_1);
                    storage.setItem('f2_8_3', $scope.f2_8_3);
                    storage.setItem('f2_8_no', $scope.f2_8_no);
                    storage.setItem('f2_8_si', $scope.f2_8_si);
                    storage.setItem('f2_8_1_no', $scope.f2_8_1_no);
                    storage.setItem('f2_8_1_si', $scope.f2_8_1_si);
                    storage.setItem('f2_8_2_no', $scope.f2_8_2_no);
                    storage.setItem('f2_8_2_si', $scope.f2_8_2_si);
                    storage.setItem('HbA_1', $scope.HbA_1);
                    storage.setItem('HbA_2', $scope.HbA_2);
                    storage.setItem('HbA_3', $scope.HbA_3);
                    storage.setItem('HbA_1_1', $scope.HbA_1_1);
                    storage.setItem('HbA_1_2', $scope.HbA_1_2);
                    storage.setItem('HbA_1_3', $scope.HbA_1_3);
                    storage.setItem('HbA_1_4', $scope.HbA_1_4);
                    storage.setItem('HbA_1_5', $scope.HbA_1_5);
                    storage.setItem('HbA_2_1', $scope.HbA_2_1);
                    storage.setItem('HbA_2_2', $scope.HbA_2_2);
                    storage.setItem('HbA_2_3', $scope.HbA_2_3);
                    storage.setItem('HbA_2_4', $scope.HbA_2_4);
                    storage.setItem('HbA_2_5', $scope.HbA_2_5);
                    storage.setItem('HbA_3_1', $scope.HbA_3_1);
                    storage.setItem('HbA_3_2', $scope.HbA_3_2);
                    storage.setItem('HbA_3_3', $scope.HbA_3_3);
                    storage.setItem('HbAs_1', $scope.HbAs_1);
                    storage.setItem('HbAs_2', $scope.HbAs_2);
                    storage.setItem('HbAs_3', $scope.HbAs_3);
                    storage.setItem('fig_3_3_no', $scope.fig_3_3_no);
                    storage.setItem('fig_3_3_si', $scope.fig_3_3_si);
                    storage.setItem('f3_3_1', $scope.f3_3_1);
                    storage.setItem('f3_3_2', $scope.f3_3_2);
                    storage.setItem('f3_3_3', $scope.f3_3_3);
                    storage.setItem('f3_3_4', $scope.f3_3_4);
                    storage.setItem('f3_3_5', $scope.f3_3_5);
                    storage.setItem('f3_3_5_1', $scope.f3_3_5_1);
                    storage.setItem('f3_3_6', $scope.f3_3_6);
                    storage.setItem('f3_3_6_1', $scope.f3_3_6_1);
                    storage.setItem('f3_3_7', $scope.f3_3_7);
                    storage.setItem('f3_3_8', $scope.f3_3_8);
                    storage.setItem('f3_3_9', $scope.f3_3_9);
                    storage.setItem('f3_3_10', $scope.f3_3_10);
                    storage.setItem('f3_3_11', $scope.f3_3_11);
                    storage.setItem('f3_3_12', $scope.f3_3_12);
                    storage.setItem('f3_3_13', $scope.f3_3_13);
                    storage.setItem('f3_3_14', $scope.f3_3_14);
                    storage.setItem('f3_3_15', $scope.f3_3_15);
                    storage.setItem('f3_3_16', $scope.f3_3_16);
                    storage.setItem('f3_5_1', $scope.f3_5_1);
                    storage.setItem('f3_5_2', $scope.f3_5_2);
                    storage.setItem('f3_5_3', $scope.f3_5_3);
                    storage.setItem('f3_5_4', $scope.f3_5_4);
                    storage.setItem('f3_5_5', $scope.f3_5_5);
                    storage.setItem('f3_5_6', $scope.f3_5_6);
                    storage.setItem('f3_5_7', $scope.f3_5_7);
                    storage.setItem('f3_5_8', $scope.f3_5_8);
                    storage.setItem('f3_5_1_no', $scope.f3_5_1_no);
                    storage.setItem('f3_5_1_si', $scope.f3_5_1_si);
                    storage.setItem('f3_5_2_no', $scope.f3_5_2_no);
                    storage.setItem('f3_5_2_si', $scope.f3_5_2_si);
                    storage.setItem('f3_5_3_no', $scope.f3_5_3_no);
                    storage.setItem('f3_5_3_si', $scope.f3_5_3_si);
                    storage.setItem('f3_5_4_no', $scope.f3_5_4_no);
                    storage.setItem('f3_5_4_si', $scope.f3_5_4_si);
                    storage.setItem('f4_3_1', $scope.f4_3_1);
                    storage.setItem('f4_3_2', $scope.f4_3_2);
                    storage.setItem('f4_3_3', $scope.f4_3_3);
                    storage.setItem('f4_3_4', $scope.f4_3_4);
                    storage.setItem('f4_3_5', $scope.f4_3_5);
                    storage.setItem('f4_3_6', $scope.f4_3_6);
                    storage.setItem('f4_3_7', $scope.f4_3_7);
                    storage.setItem('f4_3_8', $scope.f4_3_8);
                }


                $scope.scrollTop = function () {
                    $ionicScrollDelegate.scrollTop();
                };
                /*
                 $scope.recalcular = function () {
                 $ionicScrollDelegate.resize();
                 };
                 /*
                 $scope.myGoBack = function (id) {
                 $ionicHistory.goBack(id);
                 };
                 /* figura 1.2 *********************/
                /* primer nivel */
                $scope.figura_1_2_01 = function () {
                    storage.setItem('ecv_desconocido', "false");
                    $scope.ecv_desconocido = false;
                    storage.setItem('ecv_desconocido_1', "false");
                    $scope.ecv_desconocido_1 = false;
                    storage.setItem('ecv_desconocido_2', "false");
                    $scope.ecv_desconocido_2 = false;
                    storage.setItem('ecv_dm', "false");
                    $scope.ecv_dm = false;
                    storage.setItem('ecv_conocido', "false");
                    $scope.ecv_conocido = false;
                    storage.setItem('dm_conocido', "false");
                    $scope.dm_conocido = false;
                    storage.setItem('dm_desconocido', "false");
                    $scope.dm_desconocido = false;
                    storage.setItem('dm_desconocido_1', "false");
                    $scope.dm_desconocido_1 = false;
                    storage.setItem('dm_desconocido_2', "false");
                    $scope.dm_desconocido_2 = false;
                };
                $scope.figura_1_2_02 = function () {
                    storage.setItem('ecv_desconocido', "false");
                    $scope.ecv_desconocido = false;
                    storage.setItem('ecv_desconocido_1', "false");
                    $scope.ecv_desconocido_1 = false;
                    storage.setItem('ecv_desconocido_2', "false");
                    $scope.ecv_desconocido_2 = false;
                    storage.setItem('dm_ecv', "false");
                    $scope.dm_ecv = false;
                    storage.setItem('ecv_conocido', "false");
                    $scope.ecv_conocido = false;
                    storage.setItem('dm_conocido', "false");
                    $scope.dm_conocido = false;
                    storage.setItem('dm_desconocido', "false");
                    $scope.dm_desconocido = false;
                    storage.setItem('dm_desconocido_1', "false");
                    $scope.dm_desconocido_1 = false;
                    storage.setItem('dm_desconocido_2', "false");
                    $scope.dm_desconocido_2 = false;
                };
                /* segundo nivel */
                $scope.figura_1_2_03 = function () {
                    storage.setItem('ecv_conocido', "false");
                    $scope.ecv_conocido = false;
                    storage.setItem('ecv_desconocido_1', "false");
                    $scope.ecv_desconocido_1 = false;
                    storage.setItem('ecv_desconocido_2', "false");
                    $scope.ecv_desconocido_2 = false;
                };
                $scope.figura_1_2_04 = function () {
                    storage.setItem('ecv_desconocido', "false");
                    $scope.ecv_desconocido = false;
                    storage.setItem('ecv_desconocido_1', "false");
                    $scope.ecv_desconocido_1 = false;
                    storage.setItem('ecv_desconocido_2', "false");
                    $scope.ecv_desconocido_2 = false;
                };
                $scope.figura_1_2_07 = function () {
                    storage.setItem('dm_conocido', "false");
                    $scope.dm_conocido = false;
                    storage.setItem('dm_desconocido_1', "false");
                    $scope.dm_desconocido_1 = false;
                    storage.setItem('dm_desconocido_2', "false");
                    $scope.dm_desconocido_2 = false;
                };
                $scope.figura_1_2_08 = function () {
                    storage.setItem('dm_desconocido', "false");
                    $scope.dm_desconocido = false;
                    storage.setItem('dm_desconocido_1', "false");
                    $scope.dm_desconocido_1 = false;
                    storage.setItem('dm_desconocido_2', "false");
                    $scope.dm_desconocido_2 = false;
                };
                /* tercer nivel */
                $scope.figura_1_2_05 = function () {
                    storage.setItem('ecv_desconocido_2', "false");
                    $scope.ecv_desconocido_2 = false;
                };
                $scope.figura_1_2_06 = function () {
                    storage.setItem('ecv_desconocido_1', "false");
                    $scope.ecv_desconocido_1 = false;
                };
                $scope.figura_1_2_09 = function () {
                    storage.setItem('dm_desconocido_2', "false");
                    $scope.dm_desconocido_2 = false;
                };
                $scope.figura_1_2_10 = function () {
                    storage.setItem('dm_desconocido_1', "false");
                    $scope.dm_desconocido_1 = false;
                };
                /* tabla 1.3 screening diabetes *****/




                /* tabla 1.4 *********************/
                $scope.ct1_4_1 = function () {
                    storage.setItem('t1_4_2', "false");
                    $scope.t1_4_2 = false;
                    storage.setItem('t1_4_3', "false");
                    $scope.t1_4_3 = false;
                };
                $scope.ct1_4_2 = function () {
                    storage.setItem('t1_4_1', "false");
                    $scope.t1_4_1 = false;
                    storage.setItem('t1_4_3', "false");
                    $scope.t1_4_3 = false;
                };
                $scope.ct1_4_3 = function () {
                    storage.setItem('t1_4_1', "false");
                    $scope.t1_4_1 = false;
                    storage.setItem('t1_4_2', "false");
                    $scope.t1_4_2 = false;
                };
                /* reset tabla 1.4 */
                $scope.reset1_5 = function () {
                    storage.setItem('t1_5_1', "false");
                    $scope.t1_5_1 = false;
                    storage.setItem('t1_5_2', "false");
                    $scope.t1_5_2 = false;
                    storage.setItem('t1_5_3', "false");
                    $scope.t1_5_3 = false;
                    storage.setItem('t1_5_4', "false");
                    $scope.t1_5_4 = false;
                };
                /* tabla 1.5 *********************/
                $scope.ct1_5 = function () {
                    storage.setItem('t1_4_1', "false");
                    $scope.t1_4_1 = false;
                    storage.setItem('t1_4_2', "false");
                    $scope.t1_4_2 = false;
                    storage.setItem('t1_4_3', "false");
                    $scope.t1_4_3 = false;
                };
                /* figura 2.3 *********************/
                $scope.f2_3_averiguar_no = function () {
                    storage.setItem('fig_2_3_no', "true");
                    $scope.fig_2_3_no = true;
                    storage.setItem('fig_2_3_si', "false");
                    $scope.fig_2_3_si = false;
                };
                $scope.f2_3_averiguar_si = function () {
                    storage.setItem('fig_2_3_no', "false");
                    $scope.fig_2_3_no = false;
                    storage.setItem('fig_2_3_si', "true");
                    $scope.fig_2_3_si = true;
                };
                $scope.f2_3_dejar_no = function () {
                    storage.setItem('fig_2_3_1_no', "true");
                    $scope.fig_2_3_1_no = true;
                    storage.setItem('fig_2_3_1_si', "false");
                    $scope.fig_2_3_1_si = false;
                };
                $scope.f2_3_dejar_si = function () {
                    storage.setItem('fig_2_3_1_no', "false");
                    $scope.fig_2_3_1_no = false;
                    storage.setItem('fig_2_3_1_si', "true");
                    $scope.fig_2_3_1_si = true;
                };
                $scope.f2_3_reset = function () {
                    var storage = window.localStorage;
                    var borrar = '';
                    storage.setItem('fig_2_3_no', borrar);
                    storage.setItem('fig_2_3_si', borrar);
                    storage.setItem('fig_2_3_1_no', borrar);
                    storage.setItem('fig_2_3_1_si', borrar);
                    $scope.fig_2_3_no = "a";
                    $scope.fig_2_3_si = "a";
                    $scope.fig_2_3_1_no = "a";
                    $scope.fig_2_3_1_si = "a";
                };
                /* figura 2.6 *********************/
                $scope.cf2_6_1 = function () {
                    storage.setItem('f2_6_2', "false");
                    $scope.f2_6_2 = false;
                    storage.setItem('f2_6_3', "a");
                    $scope.f2_6_3 = "a";
                    storage.setItem('f2_6_no', "a");
                    $scope.f2_6_no = "a";
                    storage.setItem('f2_6_1_no', "a");
                    $scope.f2_6_1_no = "a";
                    storage.setItem('f2_6_4', "false");
                    $scope.f2_6_4 = false;
                    storage.setItem('f2_6_1_si', "a");
                    $scope.f2_6_1_si = "a";
                    storage.setItem('f2_6_1_no', "a");
                    $scope.f2_6_1_no = "a";
                    storage.setItem('f2_6_2_si', "a");
                    $scope.f2_6_2_si = "a";
                    storage.setItem('f2_6_2_no', "a");
                    $scope.f2_6_2_no = "a";
                };
                $scope.cf2_6_2 = function () {
                    storage.setItem('f2_6_1', "false");
                    $scope.f2_6_1 = false;
                    storage.setItem('f2_6_3', "a");
                    $scope.f2_6_3 = "a";
                    storage.setItem('f2_6_no', "a");
                    $scope.f2_6_no = "a";
                    storage.setItem('f2_6_1_no', "a");
                    $scope.f2_6_1_no = "a";
                    storage.setItem('f2_6_4', "false");
                    $scope.f2_6_4 = false;
                    storage.setItem('f2_6_1_si', "a");
                    $scope.f2_6_1_si = "a";
                    storage.setItem('f2_6_1_no', "a");
                    $scope.f2_6_1_no = "a";
                    storage.setItem('f2_6_2_si', "a");
                    $scope.f2_6_2_si = "a";
                    storage.setItem('f2_6_2_no', "a");
                    $scope.f2_6_2_no = "a";
                };
                $scope.cf2_6_3 = function () {
                    storage.setItem('f2_6_3', "true");
                    $scope.f2_6_3 = true;
                    storage.setItem('f2_6_no', "false");
                    $scope.f2_6_no = false;
                };
                $scope.cf2_6_no = function () {
                    storage.setItem('f2_6_3', "false");
                    $scope.f2_6_3 = false;
                    storage.setItem('f2_6_no', "true");
                    $scope.f2_6_no = true;
                };
                $scope.cf2_6_1_no = function () {
                    storage.setItem('f2_6_1_si', "false");
                    $scope.f2_6_1_si = false;
                    storage.setItem('f2_6_1_no', "true");
                    $scope.f2_6_1_no = true;
                };
                $scope.cf2_6_1_si = function () {
                    storage.setItem('f2_6_1_si', "true");
                    $scope.f2_6_1_si = true;
                    storage.setItem('f2_6_1_no', "false");
                    $scope.f2_6_1_no = false;
                };
                $scope.cf2_6_2_no = function () {
                    storage.setItem('f2_6_2_si', "false");
                    $scope.f2_6_2_si = false;
                    storage.setItem('f2_6_2_no', "true");
                    $scope.f2_6_2_no = true;
                };
                $scope.cf2_6_2_si = function () {
                    storage.setItem('f2_6_2_si', "true");
                    $scope.f2_6_2_si = true;
                    storage.setItem('f2_6_2_no', "false");
                    $scope.f2_6_2_no = false;
                };
                /* figura 2.8 *********************/
                $scope.cf2_8_1 = function () {
                    storage.setItem('f2_8_3', "a");
                    $scope.f2_8_3 = "a";
                    storage.setItem('f2_8_no', "a");
                    $scope.f2_8_no = "a";
                    storage.setItem('f2_8_1_no', "a");
                    $scope.f2_8_1_no = "a";
                    storage.setItem('f2_8_4', "false");
                    $scope.f2_8_4 = false;
                    storage.setItem('f2_8_1_si', "a");
                    $scope.f2_8_1_si = "a";
                    storage.setItem('f2_8_1_no', "a");
                    $scope.f2_8_1_no = "a";
                    storage.setItem('f2_8_2_si', "a");
                    $scope.f2_8_2_si = "a";
                    storage.setItem('f2_6_2_no', "a");
                    $scope.f2_8_2_no = "a";
                };
                $scope.cf2_8_3 = function () {
                    storage.setItem('f2_8_3', "true");
                    $scope.f2_8_3 = true;
                    storage.setItem('f2_8_no', "false");
                    $scope.f2_8_no = false;
                };
                $scope.cf2_8_no = function () {
                    storage.setItem('f2_8_3', "false");
                    $scope.f2_8_3 = false;
                    storage.setItem('f2_8_no', "true");
                    $scope.f2_8_no = true;
                };
                $scope.cf2_8_1_no = function () {
                    storage.setItem('f2_8_1_si', "false");
                    $scope.f2_8_1_si = false;
                    storage.setItem('f2_8_1_no', "true");
                    $scope.f2_8_1_no = true;
                };
                $scope.cf2_8_1_si = function () {
                    storage.setItem('f2_8_1_si', "true");
                    $scope.f2_8_1_si = true;
                    storage.setItem('f2_8_1_no', "false");
                    $scope.f2_8_1_no = false;
                };
                $scope.cf2_8_2_no = function () {
                    storage.setItem('f2_8_2_si', "false");
                    $scope.f2_8_2_si = false;
                    storage.setItem('f2_8_2_no', "true");
                    $scope.f2_8_2_no = true;
                };
                $scope.cf2_8_2_si = function () {
                    storage.setItem('f2_8_2_si', "true");
                    $scope.f2_8_2_si = true;
                    storage.setItem('f2_8_2_no', "false");
                    $scope.f2_8_2_no = false;
                };
                /* Figura 3.1 *************************************/
                /* primer paso, selección de HbA en Debut */
                $scope.figura_3_1_01 = function () {
                    storage.setItem('HbA_2', "false");
                    $scope.HbA_2 = false;
                    storage.setItem('HbA_3', "false");
                    $scope.HbA_3 = false;
                };
                $scope.figura_3_1_02 = function () {
                    storage.setItem('HbA_1', "false");
                    $scope.HbA_1 = false;
                    storage.setItem('HbA_3', "false");
                    $scope.HbA_3 = false;
                };
                $scope.figura_3_1_03 = function () {
                    storage.setItem('HbA_1', "false");
                    $scope.HbA_1 = false;
                    storage.setItem('HbA_2', "false");
                    $scope.HbA_2 = false;
                };
                /* segundo paso */
                /* HbA_1   */
                $scope.figura_3_1_HbA_1_1 = function () {
                    storage.setItem('HbA_1_2', "false");
                    $scope.HbA_1_2 = false;
                    storage.setItem('HbA_1_3', "false");
                    $scope.HbA_1_3 = false;
                    storage.setItem('HbA_1_4', "false");
                    $scope.HbA_1_4 = false;
                    storage.setItem('HbA_1_5', "false");
                    $scope.HbA_1_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_1_2 = function () {
                    storage.setItem('HbA_1_1', "false");
                    $scope.HbA_1_1 = false;
                    storage.setItem('HbA_1_3', "false");
                    $scope.HbA_1_3 = false;
                    storage.setItem('HbA_1_4', "false");
                    $scope.HbA_1_4 = false;
                    storage.setItem('HbA_1_5', "false");
                    $scope.HbA_1_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_1_3 = function () {
                    storage.setItem('HbA_1_1', "false");
                    $scope.HbA_1_1 = false;
                    storage.setItem('HbA_1_2', "false");
                    $scope.HbA_1_2 = false;
                    storage.setItem('HbA_1_4', "false");
                    $scope.HbA_1_4 = false;
                    storage.setItem('HbA_1_5', "false");
                    $scope.HbA_1_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_1_4 = function () {
                    storage.setItem('HbA_1_1', "false");
                    $scope.HbA_1_1 = false;
                    storage.setItem('HbA_1_2', "false");
                    $scope.HbA_1_2 = false;
                    storage.setItem('HbA_1_3', "false");
                    $scope.HbA_1_3 = false;
                    storage.setItem('HbA_1_5', "false");
                    $scope.HbA_1_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_1_5 = function () {
                    storage.setItem('HbA_1_1', "false");
                    $scope.HbA_1_1 = false;
                    storage.setItem('HbA_1_2', "false");
                    $scope.HbA_1_2 = false;
                    storage.setItem('HbA_1_3', "false");
                    $scope.HbA_1_3 = false;
                    storage.setItem('HbA_1_4', "false");
                    $scope.HbA_1_4 = false;
                    $state.go("menu.03-03");
                };
                /* HbA_2   */
                $scope.figura_3_1_HbA_2_1 = function () {
                    storage.setItem('HbA_2_2', "false");
                    $scope.HbA_2_2 = false;
                    storage.setItem('HbA_2_3', "false");
                    $scope.HbA_2_3 = false;
                    storage.setItem('HbA_2_4', "false");
                    $scope.HbA_2_4 = false;
                    storage.setItem('HbA_2_5', "false");
                    $scope.HbA_2_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_2_2 = function () {
                    storage.setItem('HbA_2_1', "true");
                    $scope.HbA_2_1 = true;
                    storage.setItem('HbA_2_3', "false");
                    $scope.HbA_2_3 = false;
                    storage.setItem('HbA_2_4', "false");
                    $scope.HbA_2_4 = false;
                    storage.setItem('HbA_2_5', "false");
                    $scope.HbA_2_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_2_3 = function () {
                    storage.setItem('HbA_2_1', "false");
                    $scope.HbA_2_1 = false;
                    storage.setItem('HbA_2_2', "false");
                    $scope.HbA_2_2 = false;
                    storage.setItem('HbA_2_4', "false");
                    $scope.HbA_2_4 = false;
                    storage.setItem('HbA_2_5', "false");
                    $scope.HbA_2_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_2_4 = function () {
                    storage.setItem('HbA_2_1', "false");
                    $scope.HbA_2_1 = false;
                    storage.setItem('HbA_2_2', "false");
                    $scope.HbA_2_2 = false;
                    storage.setItem('HbA_2_3', "false");
                    $scope.HbA_2_3 = false;
                    storage.setItem('HbA_2_5', "false");
                    $scope.HbA_2_5 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_2_5 = function () {
                    storage.setItem('HbA_2_1', "false");
                    $scope.HbA_2_1 = false;
                    storage.setItem('HbA_2_2', "false");
                    $scope.HbA_2_2 = false;
                    storage.setItem('HbA_2_3', "false");
                    $scope.HbA_2_3 = false;
                    storage.setItem('HbA_2_4', "false");
                    $scope.HbA_2_4 = false;
                    $state.go("menu.03-03");
                };
                /* HbA_3   */
                $scope.figura_3_1_HbA_3_1 = function () {
                    storage.setItem('HbA_3_2', "false");
                    $scope.HbA_3_2 = false;
                    storage.setItem('HbA_3_3', "false");
                    $scope.HbA_3_3 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_3_2 = function () {
                    storage.setItem('HbA_3_1', "true");
                    $scope.HbA_3_1 = true;
                    storage.setItem('HbA_3_3', "false");
                    $scope.HbA_3_3 = false;
                    $state.go("menu.03-03");
                };
                $scope.figura_3_1_HbA_3_3 = function () {
                    storage.setItem('HbA_3_1', "false");
                    $scope.HbA_3_1 = false;
                    storage.setItem('HbA_3_2', "false");
                    $scope.HbA_3_2 = false;
                    $state.go("menu.03-03");
                };
                /* primer paso, selección de HbA en Seguimiento */
                $scope.figura_3_1s_01 = function () {
                    storage.setItem('HbAs_2', "false");
                    $scope.HbAs_2 = false;
                    storage.setItem('HbAs_3', "false");
                    $scope.HbAs_3 = false;
                };
                $scope.figura_3_1s_02 = function () {
                    storage.setItem('HbAs_1', "false");
                    $scope.HbAs_1 = false;
                    storage.setItem('HbAs_3', "false");
                    $scope.HbAs_3 = false;
                };
                $scope.figura_3_1s_03 = function () {
                    storage.setItem('HbAs_1', "false");
                    $scope.HbAs_1 = false;
                    storage.setItem('HbAs_2', "false");
                    $scope.HbAs_2 = false;
                };



                /* figura 3.3 *********************/
                $scope.f3_3_no = function () {
                    storage.setItem('fig_3_3_no', "true");
                    $scope.fig_3_3_no = true;
                    storage.setItem('fig_3_3_si', "false");
                    $scope.fig_3_3_si = false;
                };
                $scope.f3_3_si = function () {
                    storage.setItem('fig_3_3_no', "false");
                    $scope.fig_3_3_no = false;
                    storage.setItem('fig_3_3_si', "true");
                    $scope.fig_3_3_si = true;
                };
                $scope.cf3_3_1 = function () {
                    storage.setItem('f3_3_2', "false");
                    $scope.f3_3_2 = false;
                    storage.setItem('f3_3_3', "false");
                    $scope.f3_3_3 = false;
                };
                $scope.cf3_3_2 = function () {
                    storage.setItem('f3_3_1', "false");
                    $scope.f3_3_1 = false;
                    storage.setItem('f3_3_3', "false");
                    $scope.f3_3_3 = false;
                };
                $scope.cf3_3_3 = function () {
                    storage.setItem('f3_3_1', "false");
                    $scope.f3_3_1 = false;
                    storage.setItem('f3_3_2', "false");
                    $scope.f3_3_2 = false;
                };
                $scope.cf3_3_4 = function () {
                    storage.setItem('f3_3_5_1', "false");
                    $scope.f3_3_5_1 = false;
                    storage.setItem('f3_3_5', "false");
                    $scope.f3_3_5 = false;
                };
                $scope.cf3_3_5 = function () {
                    storage.setItem('f3_3_5_1', "false");
                    $scope.f3_3_5_1 = false;
                    storage.setItem('f3_3_4', "false");
                    $scope.f3_3_4 = false;
                };
                $scope.cf3_3_5_1 = function () {
                    storage.setItem('f3_3_4', "false");
                    $scope.f3_3_4 = false;
                    storage.setItem('f3_3_5', "false");
                    $scope.f3_3_5 = false;
                };
                $scope.cf3_3_6 = function () {
                    storage.setItem('f3_3_6_1', "false");
                    $scope.f3_3_6_1 = false;
                };
                $scope.cf3_3_6_1 = function () {
                    storage.setItem('f3_3_6', "false");
                    $scope.f3_3_6 = false;
                };
                $scope.cf3_3_7 = function () {
                    storage.setItem('f3_3_8', "false");
                    $scope.f3_3_8 = false;
                    storage.setItem('f3_3_9', "false");
                    $scope.f3_3_9 = false;
                };
                $scope.cf3_3_8 = function () {
                    storage.setItem('f3_3_7', "false");
                    $scope.f3_3_7 = false;
                    storage.setItem('f3_3_9', "false");
                    $scope.f3_3_9 = false;
                };
                $scope.cf3_3_9 = function () {
                    storage.setItem('f3_3_7', "false");
                    $scope.f3_3_7 = false;
                    storage.setItem('f3_3_8', "false");
                    $scope.f3_3_8 = false;
                };
                $scope.cf3_3_10 = function () {
                    storage.setItem('f3_3_11', "false");
                    $scope.f3_3_11 = false;
                    storage.setItem('f3_3_12', "false");
                    $scope.f3_3_12 = false;
                    storage.setItem('f3_3_15', "false");
                    $scope.f3_3_15 = false;
                };
                $scope.cf3_3_11 = function () {
                    storage.setItem('f3_3_10', "false");
                    $scope.f3_3_10 = false;
                    storage.setItem('f3_3_12', "false");
                    $scope.f3_3_12 = false;
                };
                $scope.cf3_3_12 = function () {
                    storage.setItem('f3_3_10', "false");
                    $scope.f3_3_10 = false;
                    storage.setItem('f3_3_11', "false");
                    $scope.f3_3_11 = false;
                };
                $scope.cf3_3_13 = function () {
                    storage.setItem('f3_3_14', "false");
                    $scope.f3_3_14 = false;
                    storage.setItem('f3_3_16', "false");
                    $scope.f3_3_16 = false;
                };
                $scope.cf3_3_14 = function () {
                    storage.setItem('f3_3_13', "false");
                    $scope.f3_3_13 = false;
                };
                $scope.cf3_3_15 = function () {
                    storage.setItem('f3_3_10', "false");
                    $scope.f3_3_10 = false;
                };
                $scope.cf3_3_16 = function () {
                    storage.setItem('f3_3_13', "false");
                    $scope.f3_3_13 = false;
                };
                $scope.f3_3_reset = function () {
                    var storage = window.localStorage;
                    var borrar = '';
                    storage.setItem('fig_3_3_no', borrar);
                    storage.setItem('fig_3_3_si', borrar);
                    storage.setItem('f3_3_1', borrar);
                    storage.setItem('f3_3_2', borrar);
                    storage.setItem('f3_3_3', borrar);
                    storage.setItem('f3_3_4', borrar);
                    storage.setItem('f3_3_5', borrar);
                    storage.setItem('f3_3_5_1', borrar);
                    storage.setItem('f3_3_6', borrar);
                    storage.setItem('f3_3_6_1', borrar);
                    storage.setItem('f3_3_7', borrar);
                    storage.setItem('f3_3_8', borrar);
                    storage.setItem('f3_3_9', borrar);
                    storage.setItem('f3_3_10', borrar);
                    storage.setItem('f3_3_11', borrar);
                    storage.setItem('f3_3_12', borrar);
                    storage.setItem('f3_3_13', borrar);
                    storage.setItem('f3_3_14', borrar);
                    storage.setItem('f3_3_15', borrar);
                    storage.setItem('f3_3_16', borrar);
                    $scope.fig_3_3_no = "a";
                    $scope.fig_3_3_si = "a";
                    $scope.f3_3_1 = false;
                    $scope.f3_3_2 = false;
                    $scope.f3_3_3 = false;
                    $scope.f3_3_4 = false;
                    $scope.f3_3_5 = false;
                    $scope.f3_3_5_1 = false;
                    $scope.f3_3_6 = false;
                    $scope.f3_3_6_1 = false;
                    $scope.f3_3_7 = false;
                    $scope.f3_3_8 = false;
                    $scope.f3_3_9 = false;
                    $scope.f3_3_10 = false;
                    $scope.f3_3_11 = false;
                    $scope.f3_3_12 = false;
                    $scope.f3_3_13 = false;
                    $scope.f3_3_14 = false;
                    $scope.f3_3_15 = false;
                    $scope.f3_3_16 = false;
                };
                var storage = window.localStorage;
                var borrar = '';
                $scope.figura_3_1_reset = function () {
                    storage.setItem('HbA_1_1', borrar);
                    storage.setItem('HbA_1_2', borrar);
                    storage.setItem('HbA_1_3', borrar);
                    storage.setItem('HbA_1_4', borrar);
                    storage.setItem('HbA_1_5', borrar);
                    storage.setItem('HbA_2_1', borrar);
                    storage.setItem('HbA_2_2', borrar);
                    storage.setItem('HbA_2_3', borrar);
                    storage.setItem('HbA_2_4', borrar);
                    storage.setItem('HbA_2_5', borrar);
                    storage.setItem('HbA_3_1', borrar);
                    storage.setItem('HbA_3_2', borrar);
                    storage.setItem('HbA_3_3', borrar);
                };
                /* calculadora figura 3.4 *******/
                $scope.cf3_4_1 = function () {
                    storage.setItem('f3_4_2', "false");
                    $scope.f3_4_2 = false;
                    storage.setItem('f3_4_3', "false");
                    $scope.f3_4_3 = false;
                };
                $scope.cf3_4_2 = function () {
                    storage.setItem('f3_4_1', "false");
                    $scope.f3_4_1 = false;
                    storage.setItem('f3_4_3', "false");
                    $scope.f3_4_3 = false;
                };
                $scope.cf3_4_3 = function () {
                    storage.setItem('f3_4_1', "false");
                    $scope.f3_4_1 = false;
                    storage.setItem('f3_4_2', "false");
                    $scope.f3_4_2 = false;
                };
                $scope.f3_4_calcular = function () {

                    var f3_4_kg = $scope.f3_4_kg;
                    var f3_4_1 = $scope.f3_4_1;
                    var f3_4_2 = $scope.f3_4_2;
                    var f3_4_3 = $scope.f3_4_3;
                    if (f3_4_1 != true) {
                        f3_4_1 = 0;
                    } else {
                        f3_4_1 = 0.3;
                    }
                    if (f3_4_2 != true) {
                        f3_4_2 = 0;
                    } else {
                        f3_4_2 = 0.4;
                    }
                    if (f3_4_3 != true) {
                        f3_4_3 = 0;
                    } else {
                        f3_4_3 = 0.5;
                    }
                    var glucemia = f3_4_1 + f3_4_2 + f3_4_3;
                    if (f3_4_kg == undefined || glucemia == '0') {
                        alert('Rellene todos los datos');
                    } else {
                        calcular();
                    }

                    function calcular() {

                        var resultado1 = (f3_4_kg * glucemia) / 2;
                        var desayuno1 = (resultado1 * 30) / 100;
                        var comida1 = (resultado1 * 40) / 100;
                        var cena1 = (resultado1 * 30) / 100;
                        $scope.resultado = 'ok';
                        $scope.f3_4_kg = f3_4_kg;
                        $scope.resultadoBasal = Math.round(resultado1);
                        $scope.resultadoBolus = Math.round(resultado1);
                        /*
                         $scope.desayuno = Math.round(desayuno1);
                         $scope.comida = Math.round(comida1);
                         $scope.cena = Math.round(cena1);
                         */
                        $scope.desayuno = desayuno1.toFixed(2);
                        $scope.comida = comida1.toFixed(2);
                        $scope.cena = cena1.toFixed(2);
                    }
                    $scope.resetCalc = function () {

                        var storage = window.localStorage;
                        storage.setItem('HFSSresultado', '');
                        $scope.resultado = 'no';
                        $scope.f3_4_kg = '';
                        $scope.f3_4_1 = false;
                        $scope.f3_4_2 = false;
                        $scope.f3_4_3 = false;
                        $scope.resultadoBasal = '';
                        $scope.resultadoBolus = '';
                        $scope.desayuno = '';
                        $scope.comida = '';
                        $scope.cena = '';
                    };
                };
                $scope.cf3_5_1 = function () {
                    storage.setItem('f3_5_2', "false");
                    $scope.f3_5_2 = false;
                    storage.setItem('f3_5_3', "false");
                    $scope.f3_5_3 = false;
                    storage.setItem('f3_5_4', "false");
                    $scope.f3_5_4 = false;
                    storage.setItem('f3_5_5', "false");
                    $scope.f3_5_5 = false;
                };
                $scope.cf3_5_2 = function () {
                    storage.setItem('f3_5_1', "false");
                    $scope.f3_5_1 = false;
                    storage.setItem('f3_5_3', "false");
                    $scope.f3_5_3 = false;
                    storage.setItem('f3_5_4', "false");
                    $scope.f3_5_4 = false;
                    storage.setItem('f3_5_5', "false");
                    $scope.f3_5_5 = false;
                };
                $scope.cf3_5_3 = function () {
                    storage.setItem('f3_5_1', "false");
                    $scope.f3_5_1 = false;
                    storage.setItem('f3_5_2', "false");
                    $scope.f3_5_2 = false;
                    storage.setItem('f3_5_4', "false");
                    $scope.f3_5_4 = false;
                    storage.setItem('f3_5_5', "false");
                    $scope.f3_5_5 = false;
                };
                $scope.cf3_5_4 = function () {
                    storage.setItem('f3_5_5', "false");
                    $scope.f3_5_5 = false;
                };
                $scope.cf3_5_5 = function () {
                    storage.setItem('f3_5_4', "false");
                    $scope.f3_5_4 = false;
                };
                $scope.cf3_5_1_no = function () {
                    storage.setItem('f3_5_1_no', "true");
                    $scope.f3_5_1_no = true;
                    storage.setItem('f3_5_1_si', "false");
                    $scope.f3_5_1_si = false;
                };
                $scope.cf3_5_1_si = function () {
                    storage.setItem('f3_5_1_no', "false");
                    $scope.f3_5_1_no = false;
                    storage.setItem('f3_5_1_si', "true");
                    $scope.f3_5_1_si = true;
                };
                $scope.cf3_5_2_no = function () {
                    storage.setItem('f3_5_2_no', "true");
                    $scope.f3_5_2_no = true;
                    storage.setItem('f3_5_2_si', "false");
                    $scope.f3_5_2_si = false;
                };
                $scope.cf3_5_2_si = function () {
                    storage.setItem('f3_5_2_no', "false");
                    $scope.f3_5_2_no = false;
                    storage.setItem('f3_5_2_si', "true");
                    $scope.f3_5_2_si = true;
                };
                $scope.cf3_5_3_no = function () {
                    storage.setItem('f3_5_3_no', "true");
                    $scope.f3_5_3_no = true;
                    storage.setItem('f3_5_3_si', "false");
                    $scope.f3_5_3_si = false;
                };
                $scope.cf3_5_3_si = function () {
                    storage.setItem('f3_5_3_no', "false");
                    $scope.f3_5_3_no = false;
                    storage.setItem('f3_5_3_si', "true");
                    $scope.f3_5_3_si = true;
                };
                $scope.cf3_5_4_no = function () {
                    storage.setItem('f3_5_4_no', "true");
                    $scope.f3_5_4_no = true;
                    storage.setItem('f3_5_4_si', "false");
                    $scope.f3_5_4_si = false;
                };
                $scope.cf3_5_4_si = function () {
                    storage.setItem('f3_5_4_no', "false");
                    $scope.f3_5_4_no = false;
                    storage.setItem('f3_5_4_si', "true");
                    $scope.f3_5_4_si = true;
                };
                var storage = window.localStorage;
                var borrar = '';
                $scope.figura_3_5_reset = function () {
                    storage.setItem('f3_5_1', borrar);
                    storage.setItem('f3_5_2', borrar);
                    storage.setItem('f3_5_3', borrar);
                    storage.setItem('f3_5_4', borrar);
                    storage.setItem('f3_5_5', borrar);
                    storage.setItem('f3_5_6', borrar);
                    storage.setItem('f3_5_7', borrar);
                    storage.setItem('f3_5_8', borrar);
                    storage.setItem('f3_5_1_si', borrar);
                    storage.setItem('f3_5_1_no', borrar);
                    storage.setItem('f3_5_2_si', borrar);
                    storage.setItem('f3_5_2_no', borrar);
                    storage.setItem('f3_5_3_si', borrar);
                    storage.setItem('f3_5_3_no', borrar);
                    storage.setItem('f3_5_4_si', borrar);
                    storage.setItem('f3_5_4_no', borrar);
                    $scope.f3_5_1 = false;
                    $scope.f3_5_2 = false;
                    $scope.f3_5_3 = false;
                    $scope.f3_5_4 = false;
                    $scope.f3_5_5 = false;
                    $scope.f3_5_6 = false;
                    $scope.f3_5_7 = false;
                    $scope.f3_5_8 = false;
                    $scope.f3_5_1_si = 'a';
                    $scope.f3_5_1_no = 'a';
                    $scope.f3_5_2_si = 'a';
                    $scope.f3_5_2_no = 'a';
                    $scope.f3_5_3_si = 'a';
                    $scope.f3_5_3_no = 'a';
                    $scope.f3_5_4_si = 'a';
                    $scope.f3_5_4_no = 'a';
                };
                // figura 4.3
                $scope.cf4_3_1 = function () {
                    storage.setItem('f4_3_2', "false");
                    $scope.f4_3_2 = false;
                    // reset
                    storage.setItem('f4_3_3', "false");
                    $scope.f4_3_3 = false;
                    storage.setItem('f4_3_4', "false");
                    $scope.f4_3_4 = false;
                    storage.setItem('f4_3_5', "false");
                    $scope.f4_3_5 = false;
                    storage.setItem('f4_3_6', "false");
                    $scope.f4_3_6 = false;
                    storage.setItem('f4_3_7', "false");
                    $scope.f4_3_7 = false;
                };
                $scope.cf4_3_2 = function () {
                    storage.setItem('f4_3_1', "false");
                    $scope.f4_3_1 = false;
                    // reset
                    storage.setItem('f4_3_3', "false");
                    $scope.f4_3_3 = false;
                    storage.setItem('f4_3_4', "false");
                    $scope.f4_3_4 = false;
                    storage.setItem('f4_3_5', "false");
                    $scope.f4_3_5 = false;
                    storage.setItem('f4_3_6', "false");
                    $scope.f4_3_6 = false;
                    storage.setItem('f4_3_7', "false");
                    $scope.f4_3_7 = false;
                };
                $scope.cf4_3_3 = function () {
                    storage.setItem('f4_3_4', "false");
                    $scope.f4_3_4 = false;
                };
                $scope.cf4_3_4 = function () {
                    storage.setItem('f4_3_3', "false");
                    $scope.f4_3_3 = false;
                };
                $scope.cf4_3_5 = function () {
                    storage.setItem('f4_3_6', "false");
                    $scope.f4_3_6 = false;
                };
                $scope.cf4_3_6 = function () {
                    storage.setItem('f4_3_5', "false");
                    $scope.f4_3_5 = false;
                };
                $scope.cf4_3_7 = function () {
                    storage.setItem('f4_3_8', "false");
                    $scope.f4_3_8 = false;
                };
                $scope.cf4_3_8 = function () {
                    storage.setItem('f4_3_7', "false");
                    $scope.f4_3_7 = false;
                };
                $scope.figura_4_3_reset = function () {
                    storage.setItem('f4_3_1', borrar);
                    storage.setItem('f4_3_2', borrar);
                    storage.setItem('f4_3_3', borrar);
                    storage.setItem('f4_3_4', borrar);
                    storage.setItem('f4_3_5', borrar);
                    storage.setItem('f4_3_6', borrar);
                    storage.setItem('f4_3_7', borrar);
                    storage.setItem('f4_3_7', borrar);
                    $scope.f4_3_1 = false;
                    $scope.f4_3_2 = false;
                    $scope.f4_3_3 = false;
                    $scope.f4_3_4 = false;
                    $scope.f4_3_5 = false;
                    $scope.f4_3_6 = false;
                    $scope.f4_3_7 = false;
                    $scope.f4_3_8 = false;
                };
                // figura 4.5 Heredado del la APP iCAPP
                $scope.inra_continuar = function () {
                    var sacubit1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                    var sacubit2 = $scope.$eval(storage.getItem('sacubitrilo2'));
                    if (sacubit1 === true || sacubit2 === true) {
                        window.location = "#/menu/calculadoras/IC_cronica/ICFEr/INRA_2";
                        //alert('si');
                    } else {
                        window.location = "#/menu/calculadoras/IC_cronica/ICFEr/INRA_1";
                    }

                };
                // A confirm dialog para continuar después de IRNA
                $scope.showConfirm = function () {
                    var sacubit1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                    var sacubit2 = $scope.$eval(storage.getItem('sacubitrilo2'));
                    if (sacubit1 === true || sacubit2 === true) {
                        window.location = "#/menu/calculadoras/IC_cronica/ICFEr/Ivabradinal";
                    } else {
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Tratamiento con Sacubritilo/Valsartán',
                            template: '¿Desea NO realizar este tratamiento?',
                            cancelText: 'NO',
                            okText: 'SÍ'
                        });
                        confirmPopup.then(function (res) {
                            if (res) {
                                //alert('Pasar');
                                window.location = "#/menu/calculadoras/IC_cronica/ICFEr/Ivabradinal";
                            } else {
                                //alert('No pasar');
                            }
                        });
                    }

                }


                $scope.scrollBottom = function () {
                    $ionicScrollDelegate.scrollBottom();
                };
                $scope.recalcular = function () {
                    $ionicScrollDelegate.resize();
                };
                $scope.myGoBack = function (id) {
                    $ionicHistory.goBack(id);
                };
            }])


        /* esconder resultados finales al inicio en módulo IC crónica */
        .controller('verControler', ['$scope', function ($scope) {
                $scope.myVar = false;
            }])

        /* Interacciones ***************************/

        .controller('interaccionesCtrl', ['$scope', '$http', '$stateParams', '$ionicLoading', function ($scope, $http, $stateParams, $ionicLoading) {

                /*    
                 $ionicLoading.show({
                 content: 'Loading',
                 animation: 'fade-in',
                 showBackdrop: true,
                 maxWidth: 200,
                 showDelay: 0,
                 duration: 1000
                 });
                 */

                $scope.logo_relevancia = 'ion-ios-circle-filled';
                /* colores relevancia */
                var elevada = '#ff0000';
                var alta = '#ff0000';
                var leve = '#ffcc00';
                var moderada = '#33cc00';
                var incierta = '#007aff';
                $scope.elevada = elevada;
                $scope.alta = alta;
                $scope.leve = leve;
                $scope.moderada = moderada;
                $scope.incierta = incierta;
                // listado
                var idCat = $stateParams.idCat;
                $scope.idCat = idCat;
                // detalle
                var id = $stateParams.id;
                $scope.id = id;
                if (idCat == 1) {
                    $scope.nombreCat = 'Sulfonilureas';
                }
                if (idCat == 2) {
                    $scope.nombreCat = 'Metformina';
                }
                if (idCat == 3) {
                    $scope.nombreCat = 'Glitazonas';
                }
                if (idCat == 4) {
                    $scope.nombreCat = 'Inhibidores de la enzima dipeptidilpeptidasa tipo 4';
                }
                if (idCat == 5) {
                    $scope.nombreCat = 'Glinidas';
                }
                if (idCat == 6) {
                    $scope.nombreCat = 'Análogos del péptido semejante al glucagón tipo 1';
                }
                if (idCat == 7) {
                    $scope.nombreCat = 'Inhibidores del cotransportador sodio-glucosa tipo 2';
                }


                /* sulfonilureas */
                $scope.countList = [
                    {
                        id: 1,
                        idCat: 1,
                        name: 'Fluconazol',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 2,
                        idCat: 1,
                        name: 'Miconazol',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 3,
                        idCat: 1,
                        name: 'Fibratos',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 4,
                        idCat: 1,
                        name: 'Antagonistas H2(cimetidina)',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 5,
                        idCat: 1,
                        name: 'Fenilbutazona',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 6,
                        idCat: 1,
                        name: 'Cloranfenicol',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>9</sub>',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 7,
                        idCat: 1,
                        name: 'Claritromicina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de glicoproteína-P y enzimas CYP',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 8,
                        idCat: 1,
                        name: 'Verapamilo',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de glicoproteína-P y enzimas CYP',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable Monitorización de glucemia'
                    },
                    {
                        id: 9,
                        idCat: 1,
                        name: 'AAS',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Desplazamiento de la unión a proteínas plasmáticas',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 10,
                        idCat: 1,
                        name: 'Fenilbutazona',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Desplazamiento de la unión a proteínas plasmáticas',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 11,
                        idCat: 1,
                        name: 'Sulfonamida',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Desplazamiento de la unión a proteínas plasmáticas',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 12,
                        idCat: 1,
                        name: 'Heparina',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Desplazamiento de la unión a proteínas plasmáticas',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 13,
                        idCat: 1,
                        name: 'IECA',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Sensibilización tisular a la insulina por vasodilatación',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 14,
                        idCat: 1,
                        name: 'Alcohol',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Inhibición de gluconeogénesis',
                        efecto: 'Hipoglucemia prolongada',
                        manejo: 'Evitar el consumo elevado de alcohol'
                    },
                    {
                        id: 15,
                        idCat: 1,
                        name: 'Sales de magnesio',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Elevación del pH gástrico',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Toma de los antidiabéticos al menos una hora antes del uso del antiácido'
                    },
                    {
                        id: 16,
                        idCat: 1,
                        name: 'iDPP-4',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Efecto sinérgico',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable<br>Monitorización de glucemia'
                    },
                    {
                        id: 17,
                        idCat: 1,
                        name: 'aGLP-1',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Efecto sinérgico',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable<br>Monitorización de glucemia'
                    },
                    {
                        id: 18,
                        idCat: 1,
                        name: 'Rifampicina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inducción de CYP<sub>2</sub>C<sub>9</sub> y glicoproteína P',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Eficacia reducida.<br>Hiperglucemia'
                    },
                    {
                        id: 19,
                        idCat: 1,
                        name: 'Colestiramina',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Retrasa absorción gastrointestinal',
                        efecto: 'Eficacia reducida.<br>Hiperglucemia',
                        manejo: 'Tomar la sulfonilurea 2-4 h previas'
                    },
                    {
                        id: 20,
                        idCat: 1,
                        name: 'Betabloqueantes no selectivos',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Bloqueo de los receptores pancreáticos B2',
                        efecto: 'Eficacia reducida.<br>Hiperglucemia',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 21,
                        idCat: 1,
                        name: 'Bosentán',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Elevación de transaminasas',
                        efecto: 'Aumento de hepatoxicidad',
                        manejo: 'Contraindicados'
                    },
                    {
                        id: 22,
                        idCat: 1,
                        name: 'Warfarina',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'No bien definido<br> Desplazamiento de la unión a proteínas plasmáticas',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    {
                        id: 23,
                        idCat: 1,
                        name: 'Estatinas',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Aumentan la concentración plasmática de glibenclamida en un 20 %',
                        efecto: 'Riesgo elevado de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    /* Interacciones de la metformina */
                    {
                        id: 24,
                        idCat: 2,
                        name: 'Cimetidina',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Inhibición de la excreción renal',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    {
                        id: 25,
                        idCat: 2,
                        name: 'Cefalexina',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Inhibición de la excreción renal',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    {
                        id: 26,
                        idCat: 2,
                        name: 'Pirimetamina',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Inhibición de la excreción renal',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    {
                        id: 27,
                        idCat: 2,
                        name: 'Anticolinérgicos',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Absorción gastrointestinal elevada por motilidad alterada',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    {
                        id: 28,
                        idCat: 2,
                        name: 'Tiazidas',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Aumentan la resistencia a la insulina',
                        efecto: 'Disminuyen el efecto terapéutico de la metformina',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 29,
                        idCat: 2,
                        name: 'Contrastes yodados',
                        relevancia: elevada,
                        relNombre: 'Elevada',
                        mecanismo: 'Riesgo elevado de nefropatía por contraste',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Contraindicación de su uso 48 h previas y posteriores al uso del contaste'
                    },
                    /* Interacciones de las glitazonas */
                    {
                        id: 30,
                        idCat: 3,
                        name: 'Ketoconazol',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Inhibición de CYP2C8',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Evitar la combinación <br>Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 31,
                        idCat: 3,
                        name: 'Gemfibrozilo',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Evitar la combinación <br>Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 32,
                        idCat: 3,
                        name: 'Rifampicina',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Evitar la combinación <br>Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 33,
                        idCat: 3,
                        name: 'Fluvoxamina',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Evitar la combinación <br>Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 34,
                        idCat: 3,
                        name: 'Trimethoprim',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Evitar la combinación <br>Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 35,
                        idCat: 3,
                        name: 'Insulina',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Desconocido <br>Efecto sinérgico',
                        efecto: 'Aumento del riesgo CV',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 36,
                        idCat: 3,
                        name: 'AINE',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Desconocido <br>Efecto sinérgico',
                        efecto: 'Aumento del riesgo CV',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 37,
                        idCat: 3,
                        name: 'Sulfonilureas',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Desconocido <br>Efecto sinérgico',
                        efecto: 'Aumento del riesgo CV',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 38,
                        idCat: 3,
                        name: 'Nitratos',
                        relevancia: alta,
                        relNombre: 'Alta',
                        mecanismo: 'Desconocido <br>Efecto sinérgico',
                        efecto: 'Aumento del riesgo CV',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    /* Interacciones de los inhibidores de la enzima dipeptidilpeptidasa tipo 4 */
                    {
                        id: 39,
                        idCat: 4,
                        name: 'Ketoconazol',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 40,
                        idCat: 4,
                        name: 'Diltiazem',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 41,
                        idCat: 4,
                        name: 'Atazanavir',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 42,
                        idCat: 4,
                        name: 'Ritonavir',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 43,
                        idCat: 4,
                        name: 'Claritromicina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Aumento de los niveles plasmáticos <br>Mayor tasa de eventos adversos',
                        manejo: 'Monitorización de glucemia <br>Monitorizar posibles eventos adversos'
                    },
                    {
                        id: 44,
                        idCat: 4,
                        name: 'Rifampicina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> y de glicoproteína P (clínicamente relevante solo en el caso de saxagliptina)',
                        efecto: 'Menor eficacia <br>Hiperglucemia',
                        manejo: 'Monitorización de glucemia <br>Incrementar dosis si aplicable'
                    },
                    {
                        id: 45,
                        idCat: 4,
                        name: 'IECA',
                        relevancia: incierta,
                        relNombre: 'Incierta',
                        mecanismo: 'Efecto aditivo sobre las bradiquininas',
                        efecto: 'Incidencia elevada de angioedema',
                        manejo: 'Precaución en caso de uso concomitante'
                    },
                    /* Interacciones de las glinidas */
                    {
                        id: 46,
                        idCat: 5,
                        name: 'Gemfibrozilo',
                        relevancia: elevada,
                        relNombre: 'Elevada',
                        mecanismo: 'Inhibición de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Hipoglucemias',
                        manejo: 'Uso contraindicado'
                    },
                    {
                        id: 47,
                        idCat: 5,
                        name: 'Rifampicina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub>4</sub> y de CYP<sub>2</sub>C<sub>8</sub>',
                        efecto: 'Menor eficacia <br>Hiperglucemia',
                        manejo: 'Monitorización de glucemia <br>Incrementar dosis si aplicable'
                    },
                    {
                        id: 48,
                        idCat: 5,
                        name: 'Ketoconazol',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Inhibición de CYP<sub>3</sub>A<sub><sub>4</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Hipoglucemias',
                        manejo: 'Monitorización de glucemia'
                    },
                    {
                        id: 49,
                        idCat: 5,
                        name: 'Ciclosporina',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Inhibiciónvde OATP<sub>1</sub>B<sub>1</sub>',
                        efecto: 'Aumento de los niveles plasmáticos <br>Hipoglucemias',
                        manejo: 'Monitorización de glucemia <br>Evitar la combinación en lo posible'
                    },
                    /* Interacciones de los análogos del péptido semejante al glucagón tipo 1 */
                    {
                        id: 50,
                        idCat: 6,
                        name: 'Warfarina',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Prolongación del vaciamiento gástrico',
                        efecto: 'Mal control de INR',
                        manejo: 'Monitorización de INR al inicio del tratamiento'
                    },
                    {
                        id: 51,
                        idCat: 6,
                        name: 'Sulfonilureas',
                        relevancia: moderada,
                        relNombre: 'Moderada',
                        mecanismo: 'Efecto sinérgico',
                        efecto: 'Riesgo de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                    /* Interacciones de los inhibidores del cotransportador sodio-glucosa tipo 2 */
                    {
                        id: 52,
                        idCat: 7,
                        name: 'Diuréticos',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Puede aumentar el efecto diurético de tiazidas y diuréticos del asa',
                        efecto: 'Deshidratación e hipotensión',
                        manejo: 'Mantener adecuada hidratación y volemia'
                    },
                    {
                        id: 53,
                        idCat: 7,
                        name: 'Sulfonilureas',
                        relevancia: leve,
                        relNombre: 'Leve',
                        mecanismo: 'Efecto sinérgico',
                        efecto: 'Riesgo de hipoglucemia',
                        manejo: 'Reducir dosis si es aplicable <br>Monitorización de glucemia'
                    },
                ];
                $scope.countSelected = $scope.countList;
                //$ionicLoading.hide();

            }])

        /* Vademecum ***************************/

        .controller('vademecumCtrl', ['$scope', '$http', '$stateParams', '$ionicLoading', function ($scope, $http, $stateParams, $ionicLoading) {

                $scope.GotoLink = function (url) {
                    window.open(url, '_system');
                };

                $scope.vademecumList = [{
                        "id": 1,
                        "nombre": "ACARBOSA TARBIS Comp. 100 mg",
                        "company": "TARBIS FARMA (FERRER GRUPO)",
                        "contenido": "<p><strong>Composici&oacute;n:</strong><br /> Por 1 comprimido:&nbsp;Acarbosa&nbsp;, 100.0&nbsp;mg</p><p>*ACARBOSA TARBIS&nbsp;Comp. 100 mg<br /> <strong>env. con 100</strong></p><p>Aportaci&oacute;n reducida por el beneficiario</p><p><strong>Fi</strong>: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-acarbosa+tarbis_33243"
                    }, {
                        "id": 2,
                        "nombre": "AMARYL Comp. 2 mg",
                        "company": "SANOFI",
                        "contenido": "<p><strong>Composici&oacute;n:</strong><br /> Por 1 comprimido:&nbsp;Glimepirida, 2.0&nbsp;mg</p><p>AMARYL&nbsp;Comp. 2 mg<br /> <strong>env. con 30 y 120 comp</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p><strong>Fi</strong>: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>AMARYL&nbsp;Comp. 4 mg, envases de 30 y de 120 comp</p>",
                        "enlace": "https://www.vademecum.es/medicamento-amaryl_ficha_4933"
                    }, {
                        "id": 3,
                        "nombre": "BYDUREON",
                        "company": "ASTRAZENECA",
                        "contenido": "<p><strong>BYDUREON&nbsp;Polvo disolv. sol. iny. lib. prolong. 2 mg jeringa</strong></p><p><strong>Composici&oacute;n:</strong><br /> Por 1 vial inyecci&oacute;n:&nbsp;Exenatida, 2.0&nbsp;mg</p><p>BYDUREON&nbsp;Polvo disolv. sol. iny. lib. prolong. 2 mg jeringa<br /> <strong>env. con 4 viales + 4 jeringas</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p><strong>Fi</strong>: Medicamento incluido en la financiaci&oacute;n del SNS</p><p><strong>Vi</strong>: Medicamento que precisa Visado de Inspecci&oacute;n</p><p>BYDUREON&nbsp;Polvo disolv. sol. iny. lib. prolong. 2 mg pluma<br /> <strong>env. con 4 plumas precargadas</strong></p>",
                        "enlace": "https://www.vademecum.es/medicamento-bydureon_38096"
                    }, {
                        "id": 4,
                        "nombre": "BYETTA",
                        "company": "ASTRAZENECA",
                        "contenido": "<p><strong>BYETTA&nbsp;Sol. iny. pluma precargada 10 mcg</strong></p><p><strong>Composici&oacute;n:</strong><br /> Por 1 dosis inyectable en envase multidosis: Exenatida, 10.0&nbsp;mcg</p><p>BYETTA&nbsp;Sol. iny. pluma precargada 10 mcg<br /> <strong>env. con 1 pluma precargada de 60 dosis</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p><strong>Fi</strong>: Medicamento incluido en la financiaci&oacute;n del SNS</p><p><strong>Vi</strong>: Medicamento que precisa Visado de Inspecci&oacute;n</p><p>BYETTA&nbsp;Sol. iny. pluma precargada 5 mcg<br /> <strong>env. con 1 pluma precargada de 60 dosis</strong></p>",
                        "enlace": "https://www.vademecum.es/medicamento-byetta_ficha_31069"
                    }, {
                        "id": 5,
                        "nombre": "DAONIL",
                        "company": "SANOFI",
                        "contenido": "<p><strong>DAONIL&nbsp;Comp. 5 mg</strong></p><p><strong>Composici&oacute;n:</strong><br /> Por 1 comprimido:&nbsp;Giblencamida, 5.0&nbsp;mg</p><p>DAONIL&nbsp;Comp. 5 mg<br /> <strong>env. con 100 env con 30</strong></p>",
                        "enlace": "http://www.vademecum.es/medicamento-daonil_ficha_993"
                    }, {
                        "id": 6,
                        "nombre": "EFFICIB",
                        "company": "ALMIRALL, S.A.",
                        "contenido": "<p><strong>EFFICIB&nbsp;Comp. recub. 50 mg/1000 mg</strong></p><p><strong>Composici&oacute;n:</strong><br /> Por 1 comprimido:&nbsp;Metformina hidrocloruro, 1000.0&nbsp;mg;&nbsp;&nbsp;Sitagliptina, 50.0&nbsp;mg</p><p>EFFICIB&nbsp;Comp. recub. 50 mg/1000 mg<br /> <strong>env. con 56 env con 112 comp</strong>&nbsp;</p><ul><li>Aportaci&oacute;n reducida por el beneficiario</li><li><strong>Fi</strong>: Medicamento incluido en la financiaci&oacute;n del SNS</li></ul>",
                        "enlace": "http://www.vademecum.es/medicamento-efficib_ficha_32770"
                    }, {
                        "id": 7,
                        "nombre": "FORXIGA",
                        "company": "ASTRAZENECA",
                        "contenido": "<p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Dapagliflozina, 10.0&nbsp;mg</p><p>FORXIGA&nbsp;Comp. recub. con pel&iacute;cula 10 mg<br /> <strong>env. con 28</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-forxiga_ficha_40844"
                    }, {
                        "id": 8,
                        "nombre": "INVOKANA",
                        "company": "JANSSEN",
                        "contenido": "<p>INVOKANA&nbsp;Comp. recub. con pel&iacute;cula 100 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Canagliflozina, 100.0&nbsp;mg/300mg</p><p>INVOKANA&nbsp;Comp. recub. con pel&iacute;cula 100 mg/300mg<br /> <strong>env. con 30</strong></p><p>Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-invokana_ficha_43676"
                    }, {
                        "id": 9,
                        "nombre": "JARDIANCE",
                        "company": "BOEHRINGER INGELHEIM ESPAÑA",
                        "contenido": "<p>JARDIANCE&nbsp;Comp. recub. con pel&iacute;cula 10 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Empagliflozina&nbsp;, 10.0&nbsp;mg/25 mg</p><p>JARDIANCE&nbsp;Comp. recub. con pel&iacute;cula 10 mg/ comp 25 mg<br /> <strong>env. con 30</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-jardiance_ficha_43682"
                    }, {
                        "id": 10,
                        "nombre": "JENTADUETO",
                        "company": "BOEHRINGER INGELHEIM ESPAÑA",
                        "contenido": "<p>JENTADUETO&nbsp;Comp. recub. con pel&iacute;cula 2,5/1000 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Linagliptina, 2.5&nbsp;mg;&nbsp;Metformina hidrocloruro, 1000.0&nbsp;mg</p><p>JENTADUETO&nbsp;Comp. recub. con pel&iacute;cula 2,5/1000 mg/ 2.5/850 mg<br /> <strong>env. con 60</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-jentadueto_ficha_40320"
                    }, {
                        "id": 11,
                        "nombre": "KOMBOGLYZE",
                        "company": "ASTRAZENECA",
                        "contenido": "<p>KOMBOGLYZE&nbsp;Comp. recub. con pel&iacute;cula 2,5/1000 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Metformina hidrocloruro, 1000.0&nbsp;mg;&nbsp;&nbsp;Saxagliptina, 2.5&nbsp;mg</p><p>KOMBOGLYZE&nbsp;Comp. recub. con pel&iacute;cula 2,5/1000 mg / 2.5/850mg<br /> <strong>env. con 56</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-komboglyze_ficha_39041"
                    }, {
                        "id": 12,
                        "nombre": "METFORMINA",
                        "company": "(Varios)",
                        "contenido": "<ul><li>METFORMINA ADLER-APOTHEKE&nbsp;Comp. recub. con pel&iacute;cula 1000 mg</li><li>METFORMINA ADLER-APOTHEKE&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA ALMUS EFG&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA APOTEX&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA AUROBINDO&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA AUROVITAS SPAIN&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA BLUEFISH&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA CINFA EFG&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA COMBIX&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA KERN PHARMA&nbsp;Comp. recub. con pel&iacute;cula 1000 mg</li><li>METFORMINA KERN PHARMA EFG&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA MYLAN&nbsp;Comp. recub. con pel&iacute;cula 1000 mg</li><li>METFORMINA MYLAN PHARMACEUTICALS&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA PENSA&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA QUALIGEN&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA RATIOPHARM&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA SANDOZ&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA STADA&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA TARBIS&nbsp;Comp. recub. con pel&iacute;cula 1000 mg</li><li>METFORMINA TARBIS&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA TEVA&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li><li>METFORMINA VIR&nbsp;Comp. recub. con pel&iacute;cula 850 mg</li></ul>",
                        "enlace": "https://www.vademecum.es/buscar?q=metformina"
                    }, {
                        "id": 12,
                        "nombre": "ONGLYZA",
                        "company": "ASTRAZENECA",
                        "contenido": "<p>ONGLYZA&nbsp;Comp. recub. con pel&iacute;cula 2,5 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Saxagliptina hidrocloruro, 2.5&nbsp;mg</p><p>ONGLYZA&nbsp;Comp. recub. con pel&iacute;cula 2,5 mg-5mg<br /> <strong>env. con 28</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p><p>GLUSTIN&nbsp;Comp. 15 mg<br />GLUSTIN&nbsp;Comp. 30 mg</p>",
                        "enlace": "https://www.vademecum.es/medicamento-onglyza_ficha_37288"
                    }, {
                        "id": 13,
                        "nombre": "PRANDIN",
                        "company": "LABORATORIOS MENARINI (MENARINI GRUPO)",
                        "contenido": "<p>PRANDIN&nbsp;Comp. 0,5 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Repaglinida, 0.5&nbsp;mg- 1-2 mg</p><p>PRANDIN&nbsp;Comp. 0,5 mg-1mg-2mg</p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-prandin_ficha_26375"
                    }, {
                        "id": 14,
                        "nombre": "REPAGLINIDA RATIOPHARM",
                        "company": "RATIOPHARM ESPAÑA",
                        "contenido": "<p>REPAGLINIDA RATIOPHARM&nbsp;Comp. 0,5 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Repaglinida, 0.5&nbsp;mg-1-2mg</p><p>REPAGLINIDA RATIOPHARM&nbsp;Comp. 0,5 mg-1-2 mg<br /> <strong>env. con 90 (bl&iacute;ster Al/Al)</strong><br />EFG: Medicamento gen&eacute;rico</p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-repaglinida+ratiopharm_35847"
                    }, {
                        "id": 15,
                        "nombre": "SYNJARDY",
                        "company": "BOEHRINGER INGELHEIM ESPAÑA",
                        "contenido": "<p>SYNJARDY&nbsp;Comp. recub. con pel&iacute;cula 12,5 mg/1000 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Empagliflozina&nbsp;, 12.5&nbsp;mg ;&nbsp;Metformina hidrocloruro&nbsp;, 1000.0&nbsp;mg</p><p>SYNJARDY&nbsp;Comp. recub. con pel&iacute;cula 12,5 mg/1000 mg/ 5mg/1000<br /> <strong>env. con 60</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-synjardy_ficha_44738"
                    }, {
                        "id": 16,
                        "nombre": "TESAVEL",
                        "company": "ALMIRALL, S.A.",
                        "contenido": "<p>TESAVEL&nbsp;Comp. recub. con pel&iacute;cula 100 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Sitagliptina&nbsp;, 100.0&nbsp;mg/25/50mg</p><p>TESAVEL&nbsp;Comp. recub. con pel&iacute;cula 100 mg /25/50 mg<br /> <strong>env. con 28</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-tesavel_ficha_32296"
                    }, {
                        "id": 17,
                        "nombre": "TRAJENTA",
                        "company": "BOEHRINGER INGELHEIM ESPAÑA",
                        "contenido": "<p>TRAJENTA&nbsp;Comp. recub. con pel&iacute;cula 5 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Linagliptina, 5.0&nbsp;mg</p><p>TRAJENTA&nbsp;Comp. recub. con pel&iacute;cula 5 mg<br /> <strong>env. con 30</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-trajenta_ficha_38090"
                    }, {
                        "id": 18,
                        "nombre": "TRULICITY",
                        "company": "LILLY",
                        "contenido": "<p>TRULICITY&nbsp;Sol. iny. en pluma precargada 0,75 mg</p><p>Composici&oacute;n:<br /> Por 1 jeringa precargada:&nbsp;Dulaglutida&nbsp;, 0.75&nbsp;mg/1.5 mg</p><p>TRULICITY&nbsp;Sol. iny. en pluma precargada 0,75 mg/1.5mg<br /> <strong>env. con 4 plumas precargadas</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento financiado s&oacute;lo para determinadas indicaciones</p><p>&nbsp;</p>",
                        "enlace": "https://www.vademecum.es/medicamento-trulicity_ficha_44249"
                    }, {
                        "id": 19,
                        "nombre": "VOKANAMET",
                        "company": "JANSSEN",
                        "contenido": "<p>VOKANAMET&nbsp;Comp. recub. con pel&iacute;cula 150/1000 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Canagliflozina, 150.0&nbsp;mg;&nbsp;Metformina hidrocloruro, 1000.0&nbsp;mg</p><p>VOKANAMET&nbsp;Comp. recub. con pel&iacute;cula 150/1000 mg/ 150/850<br /> <strong>env. con 60</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento financiado s&oacute;lo para determinadas indicaciones</p>",
                        "enlace": "https://www.vademecum.es/medicamento-vokanamet_ficha_43896"
                    }, {
                        "id": 20,
                        "nombre": "XIGDUO",
                        "company": "ASTRAZENECA",
                        "contenido": "<p>XIGDUO&nbsp;Comp. recub. con pel&iacute;cula 5/1000 mg</p><p>Composici&oacute;n:<br /> Por 1 comprimido:&nbsp;Dapagliflozina, 5.0&nbsp;mg;&nbsp;Metformina hidrocloruro, 1000.0&nbsp;mg</p><p>XIGDUO&nbsp;Comp. recub. con pel&iacute;cula 5/1000 mg / 5/850 mg<br /> <strong>env. con 56</strong></p><p>*Aportaci&oacute;n reducida por el beneficiario</p><p>Fi: Medicamento incluido en la financiaci&oacute;n del SNS</p>",
                        "enlace": "https://www.vademecum.es/medicamento-xigduo_ficha_43148"
                    }];
                $scope.countVademecum = $scope.vademecumList;
            }])

// fin controler testCtrl **********************





// Ventanas Modales ******************************************************/

// recuperar contraseña
        .controller('recuperar', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/recuperar.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
// tabla 1.1

        .controller('MyController', function ($scope, $ionicModal) {
            /*
             $ionicModal.fromTemplateUrl('templates/calculadoras/01/tabla-1-1.html', {
             scope: $scope,
             animation: 'slide-in-up'
             }).then(function (modal) {
             $scope.modal = modal;
             });
             */
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
            // Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function () {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function () {
                // Execute action
            });
        })

        .controller('leyendaCtrl', function ($scope, $ionicModal, $stateParams) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/leyenda.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function ($stateParams, $stateParams2, $stateParams3) {
                $scope.modal.show();
                $scope.leyenda = $stateParams;
                $scope.leyenda2 = $stateParams2;
                $scope.leyenda3 = $stateParams3;
                console.log($stateParams, $stateParams2, $stateParams3);
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('leyenda2Ctrl', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/02/modal-dai.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('demoCtrl', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/02/demo.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('c2-22', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/03-contra.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-6', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-6.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
                $scope.Captopril = window.localStorage['Captopril'];
                $scope.Enalapril = window.localStorage['Enalapril'];
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-7', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-7.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-10', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-10.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-12', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-12.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2_14', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-14.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2_15', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-15.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2_16', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-16.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-18', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-18.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-22', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/03-contra.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-23', function ($scope, $ionicModal) {
            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/05-TRC.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
                $scope.valor = "";
                $scope.inibri = "1";
                $scope.ininobri = "1";
                $scope.bri = "0";
                $scope.nobri = "0";
                $scope.bri_1 = "0";
                $scope.bri_2 = "0";
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
                $scope.ver = "0";
            };
            $scope.verBri = function () {
                $scope.ininobri = "0";
                $scope.bri = "1";
                $scope.bri_1 = "0";
                $scope.bri_2 = "0";
                $scope.valor = "";
            }
            $scope.verNobri = function () {
                $scope.inibri = "0";
                $scope.nobri = "1";
                $scope.nobri_1 = "0";
                $scope.nobri_2 = "0";
                $scope.valor = "";
            }
            $scope.verBri_1 = function () {
                $scope.bri_1 = "1";
                $scope.bri_2 = "0";
                $scope.bri = "0";
                $scope.valor = "  ≥ 150 ms";
            }
            $scope.verBri_2 = function () {
                $scope.bri_1 = "0";
                $scope.bri_2 = "1";
                $scope.bri = "0";
                $scope.valor = "  130-149 ms";
            }
            $scope.vernoBri_1 = function () {
                $scope.nobri_1 = "1";
                $scope.nobri_2 = "0";
                $scope.nobri = "0";
                $scope.valor = "  ≥ 150 ms";
            }
            $scope.vernoBri_2 = function () {
                $scope.nobri_1 = "0";
                $scope.nobri_2 = "1";
                $scope.nobri = "0";
                $scope.valor = "  130-149 ms";
            }
            $scope.reset = function () {
                $scope.ininobri = "1";
                $scope.inibri = "1";
                $scope.bri_1 = "0";
                $scope.bri_2 = "0";
                $scope.bri = "0";
                $scope.nobri_1 = "0";
                $scope.nobri_2 = "0";
                $scope.nobri = "0";
                $scope.valor = "";
            }
        })
        .controller('2-24', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFEr/tabla-2-20.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-14', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFE/tabla-2-14.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('2-15', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/ICFE/tabla-2-15.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        .controller('inra', ['$scope', '$stateParams',
            function ($scope, $stateParams) {

                var storage = window.localStorage;
                var sacu1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                var sacu2 = $scope.$eval(storage.getItem('sacubitrilo2'));
                if (sacu1 == true) {
                    $scope.valor1 = "1";
                    $scope.valor2 = "0";
                    $scope.valor3 = "1";
                    $scope.valor4 = "1";
                    $scope.valor5 = "1";
                    $scope.valor6 = "0";
                    $scope.valor7 = "0";
                    $scope.valor8 = "1";
                }
                if (sacu2 == true) {
                    $scope.valor1 = "1";
                    $scope.valor2 = "0";
                    $scope.valor3 = "1";
                    $scope.valor4 = "1";
                    $scope.valor5 = "0";
                    $scope.valor6 = "1";
                    $scope.valor7 = "1";
                    $scope.valor8 = "0";
                }

                if (sacu1 != true && sacu2 != true) {
                    $scope.valor1 = "0";
                    $scope.valor2 = "0";
                    $scope.valor3 = "0";
                    $scope.valor4 = "0";
                    $scope.valor5 = "0";
                    $scope.valor6 = "0";
                    $scope.valor7 = "0";
                    $scope.valor8 = "0";
                }

                $scope.verNo = function () {
                    $scope.valor1 = "1";
                    $scope.valor3 = "1";
                }
                $scope.verNo1 = function () {
                    $scope.valor4 = "1";
                }
                $scope.verSi2 = function () {
                    $scope.valor5 = "1";
                    $scope.valor8 = "1";
                }
                $scope.verNo2 = function () {
                    $scope.valor6 = "1";
                    $scope.valor7 = "1";
                }
                $scope.borrarInra = function () {
                    var storage = window.localStorage;
                    storage.setItem('sacubitrilo1', 'false');
                    storage.setItem('sacubitrilo2', 'false');
                    $scope.valor1 = "0";
                    $scope.valor2 = "0";
                    $scope.valor3 = "0";
                    $scope.valor4 = "0";
                    $scope.valor5 = "0";
                    $scope.valor6 = "0";
                    $scope.valor7 = "0";
                    $scope.valor8 = "0";
                }

            }])

        /********************************************* ayudas ***********************************************************/
        .controller('modalesVentanas', function ($scope, $ionicModal, $stateParams) {

            $ionicModal.fromTemplateUrl('templates/plantilla_tablas.html', {
                scope: $scope,
                animation: 'slide-in-up'
                        //imageSrc: 'img/tabla-1-1-6.png'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function ($stateParams) {
                $scope.var1 = $stateParams;

                if ($scope.var1 == "tabla-1-1") {
                    $scope.titulo = "Diagnóstico de las alteraciones del metabolismo de la glucosa";
                    $scope.imagen = "tabla-1-1.png";
                }
                if ($scope.var1 == "tabla-1-2") {
                    $scope.titulo = "Clasificación de la diabetes mellitus";
                    $scope.imagen = "tabla-1-2.png";
                }
                if ($scope.var1 == "tabla-1-6") {
                    $scope.titulo = "Puntos de corte para el diagnóstico de las alteraciones del metabolismo de la glucosa";
                    $scope.imagen = "tabla-1-6.png";
                }
                if ($scope.var1 == "tabla-1-7") {
                    $scope.titulo = "Mensajes clave en la organización de cuidados en diabetes";
                    $scope.imagen = "tabla-1-7.png";
                }
                if ($scope.var1 == "tabla-1-8") {
                    $scope.titulo = "Componentes de la evaluación médica del paciente diabético";
                    $scope.imagen = "tabla-1-8.png";
                }
                if ($scope.var1 == "tabla-1-9") {
                    $scope.titulo = "Recomendaciones para la organización de cuidados en diabetes";
                    $scope.imagen = "tabla-1-9.png";
                }
                if ($scope.var1 == "tabla-1-10") {
                    $scope.titulo = "Mensajes clave para el autocuidado";
                    $scope.imagen = "tabla-1-10.png";
                }
                if ($scope.var1 == "figura-1-4") {
                    $scope.titulo = "Pasos para el éxito de la estrategia de educación para el autocuidado";
                    $scope.imagen = "figura-1-4.png";
                }
                if ($scope.var1 == "tabla-1-11") {
                    $scope.titulo = "Recomendaciones generales en el autocuidado";
                    $scope.imagen = "tabla-1-11.png";
                }
                if ($scope.var1 == "tabla-2-1") {
                    $scope.titulo = "Objetivos generales del tratamiento dietético en pacientes con diabetes mellitus tipo 2";
                    $scope.imagen = "tabla-2-1.png";
                }
                if ($scope.var1 == "tabla-2-2") {
                    $scope.titulo = "Características principales de la Dieta Mediterránea";
                    $scope.imagen = "tabla-2-2.png";
                }
                if ($scope.var1 == "tabla-2-3") {
                    $scope.titulo = "Aspectos clave de los programas de ejercicio en pacientes con diabetes mellitus tipo 2";
                    $scope.imagen = "tabla-2-3.png";
                }
                if ($scope.var1 == "tabla-2-4") {
                    $scope.titulo = "Consideraciones especiales del ejercicio en pacientes en tratamiento con insulina o con mal control metabólico";
                    $scope.imagen = "tabla-2-4.png";
                }
                if ($scope.var1 == "tabla-2-5") {
                    $scope.titulo = "Características de la intervención breve en el abordaje del tabaquismo";
                    $scope.imagen = "tabla-2-5.png";
                }
                if ($scope.var1 == "tabla-2-7") {
                    $scope.titulo = "Reglas de las 5A en el abordaje del tabaquismo";
                    $scope.imagen = "tabla-2-7.png";
                }
                if ($scope.var1 == "tabla-2-8") {
                    $scope.titulo = "Terapia de sustitución con nicotina";
                    $scope.imagen = "tabla-2-8.png";
                }
                if ($scope.var1 == "tabla-2-9") {
                    $scope.titulo = "Bupropion";
                    $scope.imagen = "tabla-2-9.png";
                }
                if ($scope.var1 == "tabla-2-10") {
                    $scope.titulo = "Vareniclina";
                    $scope.imagen = "tabla-2-10.png";
                }
                if ($scope.var1 == "tabla-2-11") {
                    $scope.titulo = "Corrección del estilo de vida";
                    $scope.imagen = "tabla-2-11.png";
                }
                if ($scope.var1 == "tabla-2-13") {
                    $scope.titulo = "Objetivos de control glucémico";
                    $scope.imagen = "tabla-2-13.png";
                }
                if ($scope.var1 == "tabla-2-14") {
                    $scope.titulo = "Correlación entre los valores de HbA1c y la glucemia media estimada";
                    $scope.imagen = "tabla-2-14.png";
                }
                if ($scope.var1 == "tabla-2-15") {
                    $scope.titulo = "Recomendaciones de control de automedidas de glucemia<sup>a</sup>";
                    $scope.imagen = "tabla-2-15.png";
                }
                if ($scope.var1 == "tabla-2-16") {
                    $scope.titulo = "Estratificación de riesgo de los pacientes hipertensos";
                    $scope.imagen = "tabla-2-16.png";
                }
                if ($scope.var1 == "tabla-2-17") {
                    $scope.titulo = "Intervención terapéutica para el control de la hipertensión arterial según el riesgo añadido de los pacientes";
                    $scope.imagen = "tabla-2-17.png";
                }
                if ($scope.var1 == "tabla-2-18") {
                    $scope.titulo = "Categorias de riesgo";
                    $scope.imagen = "tabla-2-18.png";
                }
                if ($scope.var1 == "tabla-2-19") {
                    $scope.titulo = "Recomendaciones para los objetivos de tratamiento según el colesterol ligado a lipoproteínas de baja densidad";
                    $scope.imagen = "tabla-2-19.png";
                }
                if ($scope.var1 == "tabla-2-21") {
                    $scope.titulo = "Recomendaciones para el tratamiento farmacológico de la hipercolesterolemia";
                    $scope.imagen = "tabla-2-21.png";
                }
                if ($scope.var1 == "tabla-2-22") {
                    $scope.titulo = "Recomendaciones para el tratamiento de la dislipemia en la diabetes";
                    $scope.imagen = "tabla-2-22.png";
                }
                if ($scope.var1 == "tabla-2-23") {
                    $scope.titulo = "Clasificación de las estatinas según su potencia hipolipemiante";
                    $scope.imagen = "tabla-2-23.png";
                }
                if ($scope.var1 == "tabla-2-24") {
                    $scope.titulo = "Recomendaciones de manejo de la diabetes en las guías de prevención cardiovascular de la Sociedad Europea de Cardiología";
                    $scope.imagen = "tabla-2-24.png";
                }
                if ($scope.var1 == "tabla-2-25") {
                    $scope.titulo = "Recomendaciones de tratamiento antiagregante en prevención primaria de la American Diabetes Association 2017";
                    $scope.imagen = "tabla-2-25.png";
                }
                if ($scope.var1 == "tabla-3-1") {
                    $scope.titulo = "Riesgo y beneficio de los fármacos antidiabéticos";
                    $scope.imagen = "tabla-3-1.png";
                }
                if ($scope.var1 == "tabla-3-2") {
                    $scope.titulo = "Estudios de seguridad cardiovascular con inhibidores de la enzima dipeptidilpeptidasa tipo 4";
                    $scope.imagen = "tabla-3-2.png";
                }
                if ($scope.var1 == "tabla-3-3") {
                    $scope.titulo = "Seguridad cardiovascular y beneficio clínico en la reducción de eventos cardiovasculares o eficacia cardiovascular en los estudios clínicos";
                    $scope.imagen = "tabla-3-3.png";
                }
                if ($scope.var1 == "tabla-3-4") {
                    $scope.titulo = "Ajuste de dosis de los antidiabéticos según la función renal";
                    $scope.imagen = "tabla-3-4.png";
                }
                if ($scope.var1 == "tabla-3-5") {
                    $scope.titulo = "Reducción esperada de la hemoglobina glucosilada con diferentes intervenciones hipoglucemiantes";
                    $scope.imagen = "tabla-3-5.png";
                }
                if ($scope.var1 == "tabla-3-6") {
                    $scope.titulo = "Indicaciones de tratamiento con insulina en pacientes con diabetes mellitus tipo 2";
                    $scope.imagen = "tabla-3-6.png";
                }
                if ($scope.var1 == "tabla-3-7") {
                    $scope.titulo = "Factores que considerar al iniciar un tratamiento con insulina";
                    $scope.imagen = "tabla-3-7.png";
                }
                if ($scope.var1 == "tabla-3-8") {
                    $scope.titulo = "Insulinas comercializadas en España y sus características";
                    $scope.imagen = "tabla-3-8.png";
                }
                if ($scope.var1 == "tabla-3-9") {
                    $scope.titulo = "Tipos de insulinas comercializadas en España<sup>a</sup>";
                    $scope.imagen = "tabla-3-9.png";
                }
                if ($scope.var1 == "tabla-3-10") {
                    $scope.titulo = "Tipos de insulina";
                    $scope.imagen = "tabla-3-10.png";
                }
                if ($scope.var1 == "tabla-3-11") {
                    $scope.titulo = "Situaciones que desaconsejan intensificar el tratamiento con insulina";
                    $scope.imagen = "tabla-3-11.png";
                }
                if ($scope.var1 == "tabla-4-1") {
                    $scope.titulo = "Recomendaciones en conductores diabéticos con riesgo alto de hipoglucemia";
                    $scope.imagen = "tabla-4-1.png";
                }
                if ($scope.var1 == "tabla-4-2") {
                    $scope.titulo = "Situaciones que incrementan el riesgo de hipoglucemias";
                    $scope.imagen = "tabla-4-2.png";
                }
                if ($scope.var1 == "tabla-4-3") {
                    $scope.titulo = "Riesgo de hipoglucemia de los fármacos antidiabéticos";
                    $scope.imagen = "tabla-4-3.png";
                }
                if ($scope.var1 == "tabla-4-4") {
                    $scope.titulo = "Pronóstico de la enfermedad renal crónica en función del índice de filtrado glomerular y la albuminuria";
                    $scope.imagen = "tabla-4-4.png";
                }
                if ($scope.var1 == "tabla-4-5") {
                    $scope.titulo = "Intervenciones en el paciente con nefropatía diabética";
                    $scope.imagen = "tabla-4-5.png";
                }
                if ($scope.var1 == "tabla-4-6") {
                    $scope.titulo = "Recomendaciones de uso de metformina en pacientes diabéticos con insuficiencia renal";
                    $scope.imagen = "tabla-4-6.png";
                }
                if ($scope.var1 == "tabla-4-7") {
                    $scope.titulo = "Ajustes de los fármacos antidiabéticos según la función renal del paciente, de acuerdo con la ficha técnica";
                    $scope.imagen = "tabla-4-7.png";
                }
                if ($scope.var1 == "tabla-4-9") {
                    $scope.titulo = "Fisiopatología de los fenotipos de la insuficiencia cardiaca en diabetes";
                    $scope.imagen = "tabla-4-9.png";
                }
                if ($scope.var1 == "tabla-4-10") {
                    $scope.titulo = "Criterios diagnósticos de los fenotipos de la miocardiopatía diabética";
                    $scope.imagen = "tabla-4-10.png";
                }
                if ($scope.var1 == "tabla-4-11") {
                    $scope.titulo = "Recomendaciones de tratamiento para pacientes con insuficiencia cardiaca con fracción de eyección preservada";
                    $scope.imagen = "tabla-4-11.png";
                }
                if ($scope.var1 == "tabla-4-12") {
                    $scope.titulo = "Recomendación de uso de antidiabéticos en insuficiencia cardiaca y enfermedad cardiovascular";
                    $scope.imagen = "tabla-4-12.png";
                }
                if ($scope.var1 == "tabla-4-13") {
                    $scope.titulo = "Protocolo de actuación en el paciente diabético en las primeras 24 horas de hospitalización";
                    $scope.imagen = "tabla-4-13.png";
                }
                if ($scope.var1 == "tabla-4-14") {
                    $scope.titulo = "Protocolo de actuación en el paciente diabético tras las primeras 24 horas de hospitalización";
                    $scope.imagen = "tabla-4-14.png";
                }
                if ($scope.var1 == "tabla-4-15") {
                    $scope.titulo = "Tratamiento antidiabético al alta de hospitalización del paciente diabético";
                    $scope.imagen = "tabla-4-15.png";
                }
                if ($scope.var1 == "tabla-4-16") {
                    $scope.titulo = "Manejo de la meftormina en diabéticos sometidos a estudios con contrastes yodados";
                    $scope.imagen = "tabla-4-16.png";
                }
                if ($scope.var1 == "tabla-4-17") {
                    $scope.titulo = "Recomendaciones para el manejo perioperatorio del paciente diabético";
                    $scope.imagen = "tabla-4-17.png";
                }
                if ($scope.var1 == "tabla-4-18") {
                    $scope.titulo = "Ajuste del tratamiento con insulina en pacientes en tratamiento con corticoides";
                    $scope.imagen = "tabla-4-18.png";
                }
                if ($scope.var1 == "tabla-4-19") {
                    $scope.titulo = "Contraindicaciones absolutas para el uso de los fármacos antidiabéticos";
                    $scope.imagen = "tabla-4-19.png";
                }

                if ($scope.var1 == "figura-2-2") {
                    $scope.titulo = "Pirámide de la Dieta Mediterránea";
                    $scope.imagen = "figura-2-2.png";
                }
                if ($scope.var1 == "figura-2-3") {
                    $scope.titulo = "Pirámide de la Dieta Mediterránea";
                    $scope.imagen = "figura-2-3.png";
                }
                if ($scope.var1 == "figura-2-6") {
                    $scope.titulo = "Objetivos de control glucémico individualizado";
                    $scope.imagen = "figura-2-6.png";
                }
                if ($scope.var1 == "figura-2-8") {
                    $scope.titulo = "Combinaciones de fármacos antihipertensivos";
                    $scope.imagen = "figura-2-8.png";
                }
                if ($scope.var1 == "figura-2-10") {
                    $scope.titulo = "Recomendación de aspirina en prevención secundaria de la enfermedad cardiovascular";
                    $scope.imagen = "figura-2-10.png";
                }
                if ($scope.var1 == "figura-2-11") {
                    $scope.titulo = "Recomendación de clopidogrel como alternativa a la aspirina en prevención secundaria de la enfermedad cardiovascular";
                    $scope.imagen = "figura-2-11.png";
                }
                if ($scope.var1 == "figura-2-12") {
                    $scope.titulo = "Recomendación de tratamiento con un inhibidor del receptor P2Y<sub>12</sub> en prevención secundaria tras un síndrome coronario agudo";
                    $scope.imagen = "figura-2-12.png";
                }
                if ($scope.var1 == "figura-3-2") {
                    $scope.titulo = "Dispositivos para la administración de insulina en 2017";
                    $scope.imagen = "figura-3-2.png";
                }
                if ($scope.var1 == "figura-3-4") {
                    $scope.titulo = "Cálculo de la dosis en la terapia bolo-basal";
                    $scope.imagen = "figura-3-4.png";
                }




                // solo para ICFEr heredado del la app ICapp
                if ($scope.var1 == "ctabla-2-1") {
                    $scope.titulo = "Recomendaciones para prevenir o retrasar el desarrollo de la insuficiencia cardiaca o prevenir la mortalidad antes del inicio de los síntomas";
                    $scope.imagen = "ICFEr/tabla-2-1.png";
                }
                if ($scope.var1 == "ctabla-2-2") {
                    $scope.titulo = "Medidas no farmacológicas recomendadas en el paciente con insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-2.png";
                }
                if ($scope.var1 == "ctabla-2-3") {
                    $scope.titulo = "Recomendaciones de autocuidado en el paciente con insuficiencia cardiaca";
                    $scope.imagen = "ICFEr/tabla-2-3.png";
                }
                if ($scope.var1 == "ctabla-2-4") {
                    $scope.titulo = "Recomendaciones del uso de inhibidores de la enzima convertidora de la angiotensina o antagonistas del receptores de la angiotensina II en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-4.png";
                }
                if ($scope.var1 == "ctabla-2-8") {
                    $scope.titulo = "Recomendaciones del uso de betabloqueantes en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-8.png";
                }
                if ($scope.var1 == "ctabla-2-11") {
                    $scope.titulo = "Recomendación del uso de los ARM en pacientes con ICFEr";
                    $scope.imagen = "ICFEr/tabla-2-11.png";
                }
                if ($scope.var1 == "ctabla-2-13") {
                    $scope.titulo = "Recomendaciones del uso de diuréticos en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-13.png";
                }
                if ($scope.var1 == "ctabla-2-17") {
                    $scope.titulo = "Recomendaciones del uso de ivabradina en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-17.png";
                }
                if ($scope.var1 == "ctabla-2-19") {
                    $scope.titulo = "Recomendaciones del uso de digoxina en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-19.png";
                }
                if ($scope.var1 == "ctabla-2-21") {
                    $scope.titulo = "Recomendaciones del uso de sacubitrilo/valsartán en la insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-21.png";
                }
                if ($scope.var1 == "ctabla-2-22-1") {
                    $scope.titulo = "Manejo de la hipotensión arterial";
                    $scope.imagen = "ICFEr/tabla-2-22-1.png";
                }
                if ($scope.var1 == "ctabla-2-22-2") {
                    $scope.titulo = "Manejo de la hiperpotasemia";
                    $scope.imagen = "ICFEr/tabla-2-22-2.png";
                }
                if ($scope.var1 == "ctabla-2-23") {
                    $scope.titulo = "Contraindicaciones para el uso de sacubitrilo/valsartán";
                    $scope.imagen = "ICFEr/tabla-2-23.png";
                }
                if ($scope.var1 == "ctabla-2-25") {
                    $scope.titulo = "Fármacos no recomendados en el paciente con insuficiencia cardiaca con fracción de eyección reducida";
                    $scope.imagen = "ICFEr/tabla-2-25.png";
                }
                if ($scope.var1 == "ctabla-2-27") {
                    $scope.titulo = "Recomendaciones para el implante de una terapia de resincronización cardiaca en pacientes con insuficiencia cardiaca";
                    $scope.imagen = "ICFEr/tabla-2-27.png";
                }
                if ($scope.var1 == "ctabla-2-28") {
                    $scope.titulo = "Recomendaciones para el implante de un desfibrilador automático implantable en pacientes con insuficiencia cardiaca";
                    $scope.imagen = "ICFEr/tabla-2-28.png";
                }
                if ($scope.var1 == "ctabla-2-29") {
                    $scope.titulo = "Recomendaciones para el tratamiento de la angina de pecho estable en pacientes sintomáticos (CF II-IV de la NYHA) con ICFEr";
                    $scope.imagen = "ICFEr/tabla-2-29.png";
                }
                if ($scope.var1 == "ctabla-2-30") {
                    $scope.titulo = "Recomendaciones para el tratamiento de las lesiones valvulares en pacientes con insuficiencia cardiaca";
                    $scope.imagen = "ICFEr/tabla-2-30.png";
                }
                if ($scope.var1 == "ctabla-3-18") {
                    $scope.titulo = "Criterios para la indicación de una asistencia mecánica ventricular de corta duración";
                    $scope.imagen = "ICFEr/tabla-3-18.png";
                }
                if ($scope.var1 == "ctabla-3-24") {
                    $scope.titulo = "Clasificación de pacientes con insuficiencia cardiaca aguda según la escala INTERMACS (Interagency Registry for Mechanically Assisted Circulatory Support)";
                    $scope.imagen = "ICFEr/tabla-3-24.png";
                }
                if ($scope.var1 == "ctabla-3-25") {
                    $scope.titulo = "Pacientes potencialmente seleccionables para el implante de un dispositivo de asistencia ventricular izquierda";
                    $scope.imagen = "ICFEr/tabla-3-25.png";
                }
                if ($scope.var1 == "ctabla-3-26") {
                    $scope.titulo = "Recomendaciones para el implante de soporte mecánico circulatorio en pacientes con insuficiencia cardiaca refractaria";
                    $scope.imagen = "ICFEr/tabla-3-26.png";
                }
                if ($scope.var1 == "ctabla-3-27") {
                    $scope.titulo = "Contraindicaciones para el implante de una asistencia ventricular mecánica de corta duración";
                    $scope.imagen = "ICFEr/tabla-3-27.png";
                }
                if ($scope.var1 == "ctabla-3-28") {
                    $scope.titulo = "Indicaciones para el implante de una asistencia ventricular mecánica de corta duración";
                    $scope.imagen = "ICFEr/tabla-3-28.png";
                }


                // ......


                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };


        })

        /********************************************* FIN ayudas ***********************************************************/
        .controller('modalVademecum', function ($scope, $ionicModal, $stateParams) {

            $ionicModal.fromTemplateUrl('templates/calculadoras/04/vademecum/vademecum.html', {
                scope: $scope,
                animation: 'slide-in-up'
                        //imageSrc: 'img/tabla-1-1-6.png'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function ($stateParams) {

                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })


        .controller('diureticosCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                $scope.diureticos_con = "templates/calculadoras/ICFEr/diureticos.html";
            }])
        // borrar datos de diureticos y Dai cada vez que entramos en un apartado
        .controller('borrar_diureticos_dai', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                var storage = window.localStorage;
                storage.setItem('diureticos', 'false');
                storage.setItem('dai', 'false');
                storage.setItem('Furosemida', 'false');
                storage.setItem('Torasemida', 'false');
                storage.setItem('Hidroclorotiazida', 'false');
                storage.setItem('Metolazona', 'false');
                storage.setItem('Indapamida', 'false');
                storage.setItem('Espironolactona_Eplerenona', 'false');
                storage.setItem('Amilorida', 'false');
                storage.setItem('Triamtereno', 'false');
            }])
        // reset figura 3.1
        .controller('f3_1_reset', ['$scope', '$stateParams',
            function ($scope, $stateParams) {

                var storage = window.localStorage;
                var borrar = '';
                storage.setItem('HbA_1_1', borrar);
                storage.setItem('HbA_1_2', borrar);
                storage.setItem('HbA_1_3', borrar);
                storage.setItem('HbA_1_4', borrar);
                storage.setItem('HbA_1_5', borrar);
                storage.setItem('HbA_2_1', borrar);
                storage.setItem('HbA_2_2', borrar);
                storage.setItem('HbA_2_3', borrar);
                storage.setItem('HbA_2_4', borrar);
                storage.setItem('HbA_2_5', borrar);
                storage.setItem('HbA_3_1', borrar);
                storage.setItem('HbA_3_2', borrar);
                storage.setItem('HbA_3_3', borrar);

                $scope.HbA_1_1 = false;
                $scope.HbA_1_2 = false;
                $scope.HbA_1_3 = false;
                $scope.HbA_1_4 = false;
                $scope.HbA_1_5 = false;
                $scope.HbA_2_1 = false;
                $scope.HbA_2_1 = false;
                $scope.HbA_2_1 = false;
                $scope.HbA_2_1 = false;
                $scope.HbA_2_1 = false;
                $scope.HbA_3_1 = false;
                $scope.HbA_3_2 = false;
                $scope.HbA_3_3 = false;

            }])



        .controller('resetTodo', ['$scope', '$stateParams', '$ionicPopup', '$state', '$ionicSideMenuDelegate',
            function ($scope, $stateParams, $ionicPopup, $state, $ionicSideMenuDelegate) {

                // A confirm dialog para continuar después de IRNA
                $scope.showReset = function () {

                    var confirmPopup = $ionicPopup.confirm({
                        title: 'Al pulsar en Limpiar se borrarán los datos de la aplicación para comenzar de nuevo ¿Limpiar todos los datos?',
                        template: '',
                        cancelText: 'Cancelar',
                        okText: 'Limpiar'
                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            //alert('Borrar');
                            $scope.todoslosDatos();
                            $state.go("menu.home");
                            $ionicSideMenuDelegate.toggleLeft();
                        } else {
                            //alert('No pasar');
                        }
                    });
                }


                //$scope.showReset();

                $scope.todoslosDatos = function () {

                    var storage = window.localStorage;
                    var borrar = '';
                    // figura 4.5 heredado del la app ICapp
                    storage.setItem('Captopril', borrar);
                    storage.setItem('Enalapril', borrar);
                    storage.setItem('Lisinopril', borrar);
                    storage.setItem('Ramipril', borrar);
                    storage.setItem('Trandopril', borrar);
                    storage.setItem('Candesartan', borrar);
                    storage.setItem('Valsartan', borrar);
                    storage.setItem('Losartan', borrar);
                    storage.setItem('Bisoprolol', borrar);
                    storage.setItem('Carvedilol', borrar);
                    storage.setItem('Metoprolol', borrar);
                    storage.setItem('Nebivolol', borrar);
                    storage.setItem('diureticos', borrar);
                    storage.setItem('dai', borrar);
                    storage.setItem('Espironolactona', borrar);
                    storage.setItem('Eplerenona', borrar);
                    storage.setItem('Furosemida', borrar);
                    storage.setItem('Torasemida', borrar);
                    storage.setItem('Hidroclorotiazida', borrar);
                    storage.setItem('Metolazona', borrar);
                    storage.setItem('Indapamida', borrar);
                    storage.setItem('Espironolactona_Eplerenona', borrar);
                    storage.setItem('Amilorida', borrar);
                    storage.setItem('Triamtereno', borrar);
                    storage.setItem('Ivabradina', borrar);
                    storage.setItem('digoxina', borrar);
                    storage.setItem('trc_1', borrar);
                    storage.setItem('trc_2', borrar);
                    storage.setItem('trc_3', borrar);
                    storage.setItem('trc_4', borrar);
                    // ****************************************
                    storage.setItem('dm_ecv', borrar);
                    storage.setItem('ecv_dm', borrar);
                    storage.setItem('ecv_desconocido', borrar);
                    storage.setItem('ecv_desconocido_1', borrar);
                    storage.setItem('ecv_desconocido_2', borrar);
                    storage.setItem('ecv_conocido', borrar);
                    storage.setItem('dm_conocido', borrar);
                    storage.setItem('dm_desconocido', borrar);
                    storage.setItem('dm_desconocido_1', borrar);
                    storage.setItem('dm_desconocido_2', borrar);
                    storage.setItem('t1_3_1', borrar);
                    storage.setItem('t1_3_2', borrar);
                    storage.setItem('t1_3_3', borrar);
                    storage.setItem('t1_3_4', borrar);
                    storage.setItem('t1_3_5', borrar);
                    storage.setItem('t1_3_6', borrar);
                    storage.setItem('t1_3_7', borrar);
                    storage.setItem('t1_3_8', borrar);
                    storage.setItem('t1_3_9', borrar);
                    storage.setItem('t1_3_10', borrar);
                    storage.setItem('t1_4_1', borrar);
                    storage.setItem('t1_4_2', borrar);
                    storage.setItem('t1_4_3', borrar);
                    storage.setItem('t1_5_1', borrar);
                    storage.setItem('t1_5_2', borrar);
                    storage.setItem('t1_5_3', borrar);
                    storage.setItem('t1_5_4', borrar);
                    storage.setItem('fig_2_3_no', borrar);
                    storage.setItem('fig_2_3_si', borrar);
                    storage.setItem('fig_2_3_1_no', borrar);
                    storage.setItem('fig_2_3_1_si', borrar);
                    storage.setItem('f2_6_1', borrar);
                    storage.setItem('f2_6_2', borrar);
                    storage.setItem('f2_6_3', borrar);
                    storage.setItem('f2_6_no', borrar);
                    storage.setItem('f2_6_1_no', borrar);
                    storage.setItem('f2_6_1_si', borrar);
                    storage.setItem('f2_6_2_no', borrar);
                    storage.setItem('f2_6_2_si', borrar);
                    storage.setItem('f2_8_1', borrar);
                    storage.setItem('f2_8_3', borrar);
                    storage.setItem('f2_8_no', borrar);
                    storage.setItem('f2_8_1_no', borrar);
                    storage.setItem('f2_8_1_si', borrar);
                    storage.setItem('f2_8_2_no', borrar);
                    storage.setItem('f2_8_2_si', borrar);
                    storage.setItem('HbA_1', borrar);
                    storage.setItem('HbA_2', borrar);
                    storage.setItem('HbA_3', borrar);
                    storage.setItem('HbA_1_1', borrar);
                    storage.setItem('HbA_1_2', borrar);
                    storage.setItem('HbA_1_3', borrar);
                    storage.setItem('HbA_1_4', borrar);
                    storage.setItem('HbA_1_5', borrar);
                    storage.setItem('HbA_2_1', borrar);
                    storage.setItem('HbA_2_2', borrar);
                    storage.setItem('HbA_2_3', borrar);
                    storage.setItem('HbA_2_4', borrar);
                    storage.setItem('HbA_2_5', borrar);
                    storage.setItem('HbA_3_1', borrar);
                    storage.setItem('HbA_3_2', borrar);
                    storage.setItem('HbA_3_3', borrar);
                    storage.setItem('fig_3_3_no', borrar);
                    storage.setItem('fig_3_3_si', borrar);
                    storage.setItem('f3_3_1', borrar);
                    storage.setItem('f3_3_2', borrar);
                    storage.setItem('f3_3_3', borrar);
                    storage.setItem('f3_3_4', borrar);
                    storage.setItem('f3_3_5', borrar);
                    storage.setItem('f3_3_5_1', borrar);
                    storage.setItem('f3_3_6', borrar);
                    storage.setItem('f3_3_6_1', borrar);
                    storage.setItem('f3_3_7', borrar);
                    storage.setItem('f3_3_8', borrar);
                    storage.setItem('f3_3_9', borrar);
                    storage.setItem('f3_3_10', borrar);
                    storage.setItem('f3_3_11', borrar);
                    storage.setItem('f3_3_12', borrar);
                    storage.setItem('f3_3_13', borrar);
                    storage.setItem('f3_3_14', borrar);
                    storage.setItem('f3_3_15', borrar);
                    storage.setItem('f3_3_16', borrar);
                    storage.setItem('f3_5_1', borrar);
                    storage.setItem('f3_5_2', borrar);
                    storage.setItem('f3_5_3', borrar);
                    storage.setItem('f3_5_4', borrar);
                    storage.setItem('f3_5_5', borrar);
                    storage.setItem('f3_5_6', borrar);
                    storage.setItem('f3_5_7', borrar);
                    storage.setItem('f3_5_8', borrar);
                    storage.setItem('f3_5_1_si', borrar);
                    storage.setItem('f3_5_1_no', borrar);
                    storage.setItem('f3_5_2_si', borrar);
                    storage.setItem('f3_5_2_no', borrar);
                    storage.setItem('f3_5_3_si', borrar);
                    storage.setItem('f3_5_3_no', borrar);
                    storage.setItem('f3_5_4_si', borrar);
                    storage.setItem('f3_5_4_no', borrar);
                    storage.setItem('f4_3_1', borrar);
                    storage.setItem('f4_3_2', borrar);
                    storage.setItem('f4_3_3', borrar);
                    storage.setItem('f4_3_4', borrar);
                    storage.setItem('f4_3_5', borrar);
                    storage.setItem('f4_3_6', borrar);
                    storage.setItem('f4_3_7', borrar);
                    storage.setItem('f4_3_7', borrar);
                }


            }])





















 