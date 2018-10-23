//calcular splits por familia
async function verificar_name_changes(left_nodes, rigth_nodes){
	let left_map = {};
	let rigth_map = {};


	left_nodes.forEach(function (node){
		left_map[node.n] = node;
	});

	rigth_nodes.forEach(function (node){
		rigth_map[node.n] = node;
	});

	let splits = [];
	let merges = [];

	left_nodes.forEach(function (node){
		node.s.forEach(function(sinonym){
			let sinonym_node = rigth_map[sinonym];
			if(sinonym_node){
				splits.push({left: node, rigth: sinonym_node});
			}
		});
	});

	rigth_nodes.forEach(function (node){
		node.s.forEach(function(sinonym){
			let sinonym_node = left_map[sinonym];
			if(sinonym_node){
				merges.push({left: sinonym_node, rigth: node});
			}
		});
	});
	let result = 
	console.log({"merges" : merges, "splits" : splits});
	return {"merges" : merges, "splits" : splits};
}

function calculate_all_merges(left_tree, rigth_tree){
	verificar_name_changes(left_tree["kingdom"],rigth_tree["kingdom"]);
	verificar_name_changes(left_tree["phylum"],rigth_tree["phylum"]);
	verificar_name_changes(left_tree["class"],rigth_tree["class"]);
	verificar_name_changes(left_tree["order"],rigth_tree["order"]);
	verificar_name_changes(left_tree["superfamily"],rigth_tree["superfamily"]);
	verificar_name_changes(left_tree["family"],rigth_tree["family"]);
	verificar_name_changes(left_tree["subfamily"],rigth_tree["subfamily"]);
	verificar_name_changes(left_tree["tribe"],rigth_tree["tribe"]);
	verificar_name_changes(left_tree["subtribe"],rigth_tree["subtribe"]);
	console.log("genus");
	verificar_name_changes(left_tree["genus"],rigth_tree["genus"]);
	verificar_name_changes(left_tree["subgenus"],rigth_tree["subgenus"]);
	console.log("species");
	verificar_name_changes(left_tree["species"],rigth_tree["species"]);
	console.log("infraspecies");
	verificar_name_changes(left_tree["infraspecies"],rigth_tree["infraspecies"]);
	console.log("subspecies");
	verificar_name_changes(left_tree["subspecies"],rigth_tree["subspecies"]);

}