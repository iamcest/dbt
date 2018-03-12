angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    .state('menu', {
                        url: '/menu',
                        templateUrl: 'templates/menu.html',
                        //controller: 'menuCtrl',

                    })

                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    })
                    .state('cerrar', {
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'cerrarCtrl'
                    })
                    // página Home logos
                    .state('menu.index', {
                        url: '/home',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/index.html'
                            }
                        }
                    })
                    // página Selección de Calculadoras
                    .state('menu.home', {
                        url: '/calculadoras',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/home.html',
                                controller: 'homeCtrl'
                            }
                        }
                    })

                    .state('menu.presentacion', {
                        url: '/presentacion',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/presentacion.html',
                                controller: 'presentacionCtrl'
                            }
                        }
                    })

                    .state('menu.prologo', {
                        url: '/prologo',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/prologo.html'
                            }
                        }
                    })
                    .state('menu.directores', {
                        url: '/directores',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/directores.html'
                            }
                        }
                    })
                    .state('menu.autores', {
                        url: '/autores',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/autores.html'
                            }
                        }
                    })
                    .state('menu.aviso-legal', {
                        url: '/aviso-legal',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/aviso-legal.html'
                            }
                        }
                    })
                    .state('menu.bibliografia', {
                        url: '/bibliografia',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/bibliografia.html'
                            }
                        }
                    })
                    .state('menu.b1', {
                        url: '/b1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/b1.html'
                            }
                        }
                    })
                    .state('menu.b2', {
                        url: '/b2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/b2.html'
                            }
                        }
                    })
                    .state('menu.b3', {
                        url: '/b3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/b3.html'
                            }
                        }
                    })
                    .state('menu.b4', {
                        url: '/b4',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/b4.html'
                            }
                        }
                    })
                    .state('menu.abreviaturas', {
                        url: '/abreviaturas',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/abreviaturas.html'
                            }
                        }
                    })
                    .state('menu.creditos', {
                        url: '/creditos',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/creditos.html'
                            }
                        }
                    })
                    .state('menu.disclaimer', {
                        url: '/disclaimer',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/disclaimer.html'
                            }
                        }
                    })


                    /* CALCULADORAS **************************************/


                    /* Calculadora 01 Diagnóstico MENU INICIO******************/
                    .state('menu.01', {
                        cache: false,
                        url: '/calculadoras/Diagnóstico_Gestión integral',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-01', {
                        cache: false,
                        url: '/calculadoras/Diagnostico',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* algoritmo 1.2 */
                    .state('menu.01-figura-1-2', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/figura-1-2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/figura-1-2/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /********/
                    .state('menu.01-02', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/02.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-02-1', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/2-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/02-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-03', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/03.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-final', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/final.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-04', {
                        cache: false,
                        url: '/calculadoras/Diagnostico/01-04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/diagnostico/04.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-05', {
                        cache: false,
                        url: '/calculadoras/gestion',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/01/gestion/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* calculadora 2 */
                    .state('menu.02-01', {
                        cache: false,
                        url: '/calculadoras/objetivos02-01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-01-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-01-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/01-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-01-1-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-01-1-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/01-1-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-01-1-2', {
                        cache: false,
                        url: '/calculadoras/objetivos02-01-1-2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/01-1-2.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-01-1-3', {
                        cache: false,
                        url: '/calculadoras/objetivos02-01-1-3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/01-1-3.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* figura 2.3 */
                    .state('menu.figura-2-3', {
                        cache: false,
                        url: '/calculadoras/objetivos/figura-2-3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/figura-2-3/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-02-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-02-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/02-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-03-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-03-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/03-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-04-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-04-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/04-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-05-1', {
                        cache: false,
                        url: '/calculadoras/objetivos02-05-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/05-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    /* figura 2.6 */
                    .state('menu.figura-2-6', {
                        cache: false,
                        url: '/calculadoras/objetivos/figura2-6',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/figura-2-6/1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* figura 2.8 */
                    .state('menu.figura-2-8', {
                        cache: false,
                        url: '/calculadoras/objetivos/figura2-8',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/02/figura-2-8/1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    /* calculadora 3 */
                    .state('menu.03-01', {
                        cache: false,
                        url: '/calculadoras/03/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* calculadora 3 */
                    .state('menu.03-02', {
                        cache: false,
                        url: '/calculadoras/03/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/02.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-02-1', {
                        cache: false,
                        url: '/calculadoras/03/02-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/02-1.html',
                                controller: 'f3_1_reset',
                            }
                        }
                    })
                    .state('menu.03-03', {
                        cache: false,
                        url: '/calculadoras/03/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/03-resultados.html',
                                
                            }
                        }
                    })
                    // seguimiento fig 3.1
                    .state('menu.03-03-seg-1', {
                        cache: false,
                        url: '/calculadoras/03/seg/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/seguimiento/02.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-03-seg-2', {
                        cache: false,
                        url: '/calculadoras/03/seg/02-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/seguimiento/02-1.html',
                                controller: 'f3_1_reset',
                            }
                        }
                    })
                    // figura 3.3
                    .state('menu.03-fig_3_3_1', {
                        cache: false,
                        url: '/calculadoras/03/fig_3_3/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/fig_3_3/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // figura 3.4
                    .state('menu.03-fig_3_4', {
                        cache: false,
                        url: '/calculadoras/03/fig_3_4/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/fig_3_4/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // figura 3.5
                    .state('menu.03-fig_3_5', {
                        cache: false,
                        url: '/calculadoras/03/fig_3_5/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/03/fig_3_5/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // calculadora 4
                    .state('menu.04-01', {
                        cache: false,
                        url: '/calculadoras/04/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-01', {
                        cache: false,
                        url: '/calculadoras/04/01-01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-1.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-02', {
                        cache: false,
                        url: '/calculadoras/04/01-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-2.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-03', {
                        cache: false,
                        url: '/calculadoras/04/01-03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-3.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-04', {
                        cache: false,
                        url: '/calculadoras/04/01-04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-4.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-05', {
                        cache: false,
                        url: '/calculadoras/04/01-05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-5.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-01-06', {
                        cache: false,
                        url: '/calculadoras/04/01-06',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/01-6.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-fig-4-3', {
                        cache: false,
                        url: '/calculadoras/04/fig-4-3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/figura-4-3/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    // figura 4.5 Heredado del la APP iCAPP ******************************
                    .state('menu.2-icfer-01', {
                        cache: false,
                        url: '/calculadoras/04/ICFEr',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/01.html',
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.2-icfer-01-1', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/IECA',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/01-1.html',
                                controller: 'borrar_diureticos_dai'
                            }
                        }
                    })
                    .state('menu.2-icfer-01-2', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/IECA_1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/01-2.html'
                            }
                        }
                    })
                    .state('menu.2-icfer-01-3', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/IECA_fin',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/01-3.html'
                            }
                        }
                    })

                    .state('menu.2-icfer-02', {
                        url: '/calculadoras/IC_cronica/ICFEr/ARM',
                        cache: false,
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/02.html',
                                controller: 'borrar_diureticos_dai'
                            }
                        }
                    })
                    .state('menu.2-icfer-02-2', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/ARM_2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/02-2.html'
                            }
                        }
                    })
                    .state('menu.2-icfer-02-3', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/ARM_final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/02-3.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-03', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/INRA',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/03.html',
                                controller: 'borrar_diureticos_dai'
                            }
                        }
                    })
                    .state('menu.2-icfer-03-1', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/INRA_1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/03-1.html'
                            }
                        }
                    })
                    .state('menu.2-icfer-03-2', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/INRA_2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/03-2.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-03-3', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/INRA_final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/03-3.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-04', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/Ivabradinal',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/04.html',
                                controller: 'borrar_diureticos_dai'
                            }
                        }
                    })
                    .state('menu.2-icfer-04-2', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/Ivabradinal_2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/04-2.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-04-3', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/Ivabradinal_final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/04-3.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-05', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/TRC',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/05.html',
                                controller: 'borrar_diureticos_dai'
                            }
                        }
                    })
                    .state('menu.2-icfer-05-2', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/TRC_2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/05-2.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-05-3', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/TRC_final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/05-3.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-06-0', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/digoxina',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/06-0.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-06-1', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/final-diureticos',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/06-1.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2-icfer-06', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/06.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-6', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-6',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-6.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-7', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-7',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-7.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-10', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-10',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-10.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-14', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-14',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-14.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-15', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-15',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-15.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    .state('menu.2tabla-2-16', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFEr/2tabla-2-16',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFEr/tabla-2-16.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })

                    /* Recomendaciones de tratamiento para pacientes con ICFEp e ICFEi */

                    .state('menu.2-icfe-01', {
                        cache: false,
                        url: '/calculadoras/IC_cronica/ICFE/',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/ICFE/01.html'
                                        //controller: '02-1Ctrl'
                            }
                        }
                    })
                    // ****************************************
                    // Interacciones
                    .state('menu.4-interacciones', {
                        cache: false,
                        url: '/calculadoras/04/interacciones/:idCat',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/interacciones/01.html'
                                //controller: 'interaccionesCtrl'
                            }
                        }
                    })
                    .state('menu.4-interacciones/detalle', {
                        cache: false,
                        url: '/calculadoras/04/interacciones/detalle/:idCat/:id',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/calculadoras/04/interacciones/02.html'
                                //controller: 'interaccionesCtrl'
                            }
                        }
                    })



                    //*****************************************
                    
                    
                    

            // página de inicio por defecto (Login) IMPORTATE ¡¡¡¡¡ DEJAR ESTA LÍNEA AL FINAL
            //$urlRouterProvider.otherwise('/login');
            $urlRouterProvider.otherwise('/menu/home');


        });