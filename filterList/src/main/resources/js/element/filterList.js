/**
 * Initialise le filter list
 */
$.fn.filterList = function (collapsable) {
		
	return this.each(function() {
		
		let filterList = $(this);
		let filter;
		let list;
		if (collapsable) {
			let title = filterList.children().eq(0);
			filter = filterList.children().eq(1);
			list = filterList.children().eq(2);
			
			title.addClass('plugin_filterList_filterTitle')
			
			title.collapsable(filter);
			
		} else {
			filter = filterList.children().eq(0);
			list = filterList.children().eq(1);
		}
		
		filterList.addClass('plugin_filterList_filterList');
		filter.addClass('plugin_filterList_filter');
		list.addClass('plugin_filterList_list');
		
		filter.searchFilter();
	});
}