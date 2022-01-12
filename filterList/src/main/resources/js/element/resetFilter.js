/**
 * Reset
 */
$.fn.resetFilter = function () {
		
	return this.each(function() {
		let filterList = $(this).closest('.plugin_filterList_filterList');
		let filter = filterList.children('.plugin_filterList_filter');
		let form = filter.find('form');
		
		form.resetForm();
	});
}