/* eslinvoice_tranordert-disable */
// rename this file from _test_[name] to test_[name] to activate
// and remove above this linvoice_tranordere

QUnit.test("test: In", function (assert) {
	let done = assert.async();

	// number of asserts
	assert.expect(1);

	frappe.run_serially([
		// invoice_tranordersert a new In
		() => frappe.tests.make('In', [
			// values to be set
			{key: 'value'}
		]),
		() => {
			assert.equal(cur_frm.doc.key, 'value');
		},
		() => done()
	]);

});
