Ext.define('GS.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],
	config: {
		title: 'contact',
		iconCls: 'user',
		url: 'contact.php',
		items: [
			{
				xtype: 'fieldset',
				title: 'Contact us',
				instructions: '(Email is not required!)',
				
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						label: 'Name:'
					},
					{
						xtype: 'emailfield',
						name: 'email',
						label: 'Email:'
					},
					{
						xtype: 'textareafield',
						name: 'message',
						label: 'Message:'
					}			
				]
			},
			{
				xtype: 'button',
				text: 'send',
				ui: 'confirm',
				handler: function() {
					this.up('contactform').submit();
				}
			}
		]
	}
});