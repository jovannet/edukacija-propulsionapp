$(function() {
	
	var data = [
		{name: "My Name1", type: "My Type1", desc: "My Desc1"},
		{name: "My Name2", type: "My Type2", desc: "My Desc2"}
	];
	var config = {
		columns: [
		{title: "Name", property: "name", width: 50},
		{title: "Type", property: "type", width: 100},
		{title: "Description", property: "desc", width: 150, align: "left"}
		]
	};	
	$('.dataGridtable').datagrid(config, data);
});
