<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"/>
		<transition mode="out-in"
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
			>
			<router-view />
		</transition>
		<router-view name="menuInferior"/>
	</div>
	<!--div>
		<table class="table">
			<thead>
				<tr>
					<th><input type="checkbox" @click='checkAll()' v-model='isCheckAll'></th>
					<th>ID</th>
					<th>Descrição</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in sku_list" :key="item.id">
					<td><input type="checkbox" :value="item.sku" v-model="skus"></td>
					<td v-for="sku in item" :key="sku">{{sku}}</td>
				</tr>
			</tbody>
		</table>
		<input type='button' @click='printValues()' value='Print Selected Values'>
		<p>{{selectedSku}}</p>
	</div-->
</template>

<script>

export default {
	data() {
		return {
			isCheckAll: false,
			skus: [],
			selectedSku: "",
			sku_list:[
				{id:1, sku: 123, name: 'Ampola'},
				{id:2, sku: 123, name: 'Seringa'},
				{id:3, sku: 1235, name: 'Ibuprofeno'},
				{id:4, sku: 1236, name: 'Camisinha'},
				{id:5, sku: 1237, name: 'Paplem higienico'},
				{id:6, sku: 1238, name: 'Paracetamol'},
			]
		}
	},
	methods: {
		printValues: function(){
			this.selectedSku = "";
			// Read Checked checkboxes value
			for (var key in this.skus) {
				this.selectedSku += this.skus[key]+", "; 
			}
		},
		checkAll: function() {
			this.isCheckAll = !this.isCheckAll;
			this.skus = [];
			if(this.isCheckAll){ // Check all
				for (var key in this.sku_list) {
					this.skus.push(this.sku_list[key].sku);
				}
				this.skus = [...new Set(this.skus)]
			}
		},
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

