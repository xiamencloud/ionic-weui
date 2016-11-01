/**
 * Created by linys on 16/10/20.
 */
angular.module('weui.routes', [])
    .config(function ($stateProvider, $urlRouterProvider)
    {
        $stateProvider.
        state('home',{
            url:'/',
            templateUrl: 'template/home.html',
            controller: 'homeCtrl'
        }).
        state('weui', {
            url :'/weui',
            abstract: true,
            templateUrl: 'template/weui.html',
        }).
        state('weui.nav', {
            url : '/nav',
            views : {
                'weui-content': {
                    templateUrl: 'template/weui-nav.html',
                    controller : 'navCtrl'
                }
            }
        }).
        state('weui.button', {
            url : '/button',
            views : {
                'weui-content': {
                    templateUrl: 'template/form/button.html',
                    controller : 'btnCtrl'
                }
            }
        }).
        state('weui.input', {
            url : '/input',
            views : {
                'weui-content': {
                    templateUrl: 'template/form/input.html',
                    controller : 'inputCtrl'
                }
            }
        }).
        state('weui.list', {
            url : '/list',
            views : {
                'weui-content': {
                    templateUrl: 'template/form/list.html',
                    controller : 'listCtrl'
                }
            }
        }).
        state('weui.uploader', {
            url : '/uploader',
            views : {
                'weui-content': {
                    templateUrl: 'template/form/uploader.html',
                    controller : 'uploadCtrl'
                }
            }
        }).
        state('weui.article', {
            url : '/article',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/article.html',
                    controller : 'articleCtrl'
                }
            }
        }).
        state('weui.flex', {
            url : '/flex',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/flex.html',
                    controller : 'flexCtrl'
                }
            }
        }).
        state('weui.footer', {
            url : '/footer',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/footer.html',
                    controller : 'footerCtrl'
                }
            }
        }).
        state('weui.gallery', {
            url : '/gallery',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/gallery.html',
                    controller : 'galleryCtrl'
                }
            }
        }).
        state('weui.grid', {
            url : '/grid',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/grid.html',
                    controller : 'gridCtrl'
                }
            }
        }).
        state('weui.icons', {
            url : '/icons',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/icons.html',
                    controller : 'iconsCtrl'
                }
            }
        }).
        state('weui.loadmore', {
            url : '/loadmore',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/loadmore.html',
                    controller : 'loadmoreCtrl'
                }
            }
        }).
        state('weui.panel', {
            url : '/panel',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/panel.html',
                    controller : 'panelCtrl'
                }
            }
        }).
        state('weui.preview', {
            url : '/preview',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/preview.html',
                    controller : 'previewCtrl'
                }
            }
        }).
        state('weui.progress', {
            url : '/progress',
            views : {
                'weui-content': {
                    templateUrl: 'template/layout/progress.html',
                    controller : 'progressCtrl'
                }
            }
        })
        ;
        $urlRouterProvider.otherwise('/');
    });
