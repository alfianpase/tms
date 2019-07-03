# -*- coding: utf-8 -*-
# Copyright (c) 2019, mdb and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TransportOrder(Document):
	pass

	def on_submit(self):
		self.change_status_transporter()

	def change_status_transporter(self):
		if(self.docstatus == 1):
			transporter = frappe.get_doc("Master Transporter",self.transporter_id)
			transporter.status_transporter = 'On The Way'
			transporter.save()