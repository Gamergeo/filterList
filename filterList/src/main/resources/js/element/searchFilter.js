/**
 * Initialise le filter list
 */
$.fn.searchFilter = function () {
		
	return this.each(function() {
		let filterList = $(this).closest('.plugin_filterList_filterList');
		let list = filterList.children('.plugin_filterList_list');
		let filter = filterList.children('.plugin_filterList_filter');
		let form = filter.find('form');
		
		let options = new Object();
		options.url = form.formUrl('list');
		
		form.submitFormAndRefresh(list, options);
	});
}