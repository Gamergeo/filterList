/**
 * Initialise le filter list
 */
$.fn.filterList = function () {
		
	return this.each(function() {
		let filterList = $(this);
		let filter = filterList.children().eq(0);
		let list = filterList.children().eq(1);
		
		filterList.addClass('plugin_filterList_filterList');
		filter.addClass('plugin_filterList_filter');
		list.addClass('plugin_filterList_list');
		
		filter.searchFilter();
	});
}