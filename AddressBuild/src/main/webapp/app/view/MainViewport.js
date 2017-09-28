Ext.define('MyApp.view.MainViewport', {
    extend : 'Ext.container.Viewport',
    alias : 'widget.mainViewport',
    requires: [
        'MyApp.view.MainContainer'
    ],
    items : [{
        xtype : 'mainContainer'
    }]
});