Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    store: ['AddressStore'],
    controllers: ['AddressController'],
    launch: function () {
        Ext.create('MyApp.view.MainViewport');
        
    }
});
