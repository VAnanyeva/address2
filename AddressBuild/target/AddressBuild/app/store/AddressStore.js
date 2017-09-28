Ext.define('MyApp.store.AddressStore', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.AddressModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        url : 'spring/addresses',
        reader:{
            type: 'json',
            root: 'addresses'
        },
		writer: {
		    type: 'json',
		    writeAllFields: false,
		    root: 'addresses'
		}
    }

});