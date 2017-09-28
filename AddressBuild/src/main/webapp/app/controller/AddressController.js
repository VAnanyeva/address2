Ext.define('MyApp.controller.AddressController', {
    extend: 'Ext.app.Controller',
    stores: ['AddressStore'],
    views: ['MainContainer'],
    requires: [
        'Ext.grid.plugin.CellEditing',
    	'Ext.button.Button'
    ],
    refs:[
        {
            ref: 'mainContainer',
            selector: 'mainContainer'
        },
        {
            ref: 'editableGrid',
            selector: 'mainContainer > gridpanel[name=editableGrid]'
        },
        {
            ref: 'buttonDelete',
            selector: 'mainContainer > gridpanel[name=editableGrid] > toolbar > button[action=remove]'
        }
    ],

    init: function () {
        this.control({
            'mainContainer > gridpanel[name=editableGrid]' : {
                selectionchange: this.onSelectionChange
            },
            'mainContainer > gridpanel > toolbar > button[action=add]' : {
                click: this.onAddAddress
            },
            'mainContainer > gridpanel > toolbar > button[action=remove]' : {
                click: this.onRemoveAddress
            }
        });
    },
	
	onAddAddress: function(button) {
		var cnt = this.getAddressStoreStore().getCount()+10;
		var rec = new  MyApp.model.AddressModel({
			id : cnt,
	        first: '',
	        last: '',
	        email: ''
	    });
		this.getAddressStoreStore().insert(0, rec);
	},
	
	onSelectionChange: function(current, selections) {
		this.getButtonDelete().setDisabled(selections.length === 0);
    },
    
    onRemoveAddress: function(button) {
    	var selection = this.getEditableGrid().getView().getSelectionModel().getSelection()[0];
        if (selection) {
        	this.getAddressStoreStore().remove(selection);
        }
    }
    
});