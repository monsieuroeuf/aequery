/*jshint ignore:start*/
#include "aeq.js";
#include "aeq-ui.js";
/*jshint ignore:end*/

function buildUI(win) {
	win.set({
		alignment: ['fill', 'top'],
		alignChildren: ['fill', 'top']
	});
	win.addStatictext('Statictext text');
	win.addEditText('EditText text');
	win.addButton('Button Name', function() {
		alert('Button clicked');
	});
	win.addCheckbox('Checkbox Name', function() {
		alert(this.value);
	});
	win.addRadioButton('Radiobutton text', function() {
		alert(this.value);
	});
	win.addDropdownList(['Item 1', 'Item 2', 'Item 3', 'Item 4'], function() {
		alert(this.selection);
	});
	win.addListbox(['Item 1', 'Item 2', 'Item 3', 'Item 4'], {
		multiselect: true,
		numberOfColumns: 1
	}, function() {
		alert(this.selection);
	});

	var buttonGroup = win.addGroup();
	buttonGroup.alignChildren('fill', 'top');
	buttonGroup.addButton('Button 1');
	buttonGroup.addButton('Button 2');
	buttonGroup.addButton('Button 3');

	var buttonPanel = win.addPanel('Panel Name');
	buttonPanel.set({ alignChildren: 'fill' });
	buttonPanel.addButton('Button 1');
	buttonPanel.addButton('Button 2');
	buttonPanel.addButton('Button 3');

	var tabbedpanel = win.addTabbedPanel();
	var tab1 = tabbedpanel.addTab('Tab 1');
	tab1.addButton('Tab 1 Button');
	var tab2 = tabbedpanel.addTab('Tab 2');
	tab2.addButton('Tab 2 Button');

	win.addProgressbar(50);

	var treeview = win.addTreeview(['Item 1', 'Item 2'], function() {
		alert(this.selection);
	});
	var treeviewNode = treeview.add('node', 'item 3');
	treeviewNode.add('item', 'item 3.1');

	win.addSlider(0, 100, 200);
	win.addScrollbar();

}

aeq.ui.ready(function()
{
	var win = aeq.ui.createMainWindow("Panel Name");

	buildUI(win);

	win.show();
});
function redefineAeq(aeqFile, aeqUiFile) {
	$.evalFile(aeqFile);
	$.evalFile(aeqUiFile);
	return aeq;
}
