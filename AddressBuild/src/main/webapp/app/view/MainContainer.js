Ext.define('MyApp.view.MainContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainContainer',
    items:[
        {
            xtype: 'gridpanel',
            name: 'editableGrid',
            store: 'AddressStore',
            columns: [
                {text: 'Id', dataIndex: 'id', width: 50},
                {text: 'First', dataIndex: 'first', width: 150,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }},
                {text: 'Last', dataIndex: 'last', width: 150,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }},
                {text: 'EMail', dataIndex: 'email', width: 150,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }}
            ],
            columnLines: true,
            selModel: 'rowmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2
                })
            ],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    action: 'add',
                    text:'Добавить'
                },'-',{
                    action: 'remove',
                    text:'Удалить',
                    disabled: true
                }]
            }],
            width: 600,
            height: 300
        }
    ]
});