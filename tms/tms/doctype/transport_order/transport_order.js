// Copyright (c) 2019, mdb and contributors
// For license information, please see license.txt

frappe.ui.form.on('Transport Order', {
    customer2_id: function(frm){
	if (frm.doc.customer2_id != null) {
		frm.toggle_display("customer2_name", true);
		frm.toggle_display("customer2_address", true);
		frm.toggle_display("distance2_costumer", true);
    	}else{
			frm.toggle_display("distance2_costumer", false);
    		frm.toggle_display("customer2_name", false);
			frm.toggle_display("customer2_address", false);
    	}
	},
	customer_id: function(frm){
	if (frm.doc.customer_id != null) {
		frm.toggle_display("customer_name", true);
		frm.toggle_display("customer_address", true);
		frm.toggle_display("distance_costumer", true);
    	}else{
    		frm.toggle_display("customer_name", false);
			frm.toggle_display("customer_address", false);
			frm.toggle_display("distance_costumer", false);
    	}
	},
	client_id: function(frm){
	if (frm.doc.client_id != null) {
		frm.toggle_display("client_name", true);
		frm.toggle_display("address_client", true);
		frm.toggle_display("distance_client", true);
    	}else{
    		frm.toggle_display("client_name", false);
			frm.toggle_display("address_client", false);
			frm.toggle_display("distance_client", false);
    	}
	}   
});
