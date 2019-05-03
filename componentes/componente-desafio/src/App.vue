<template>
	<v-app>
		<app-navigation></app-navigation>

		<app-toolbar></app-toolbar>

		<v-content>
			<app-carousel></app-carousel>
		</v-content>

		<app-footer></app-footer>
	</v-app>
</template>

<script>
import Navigation from '@/components/template/Navigation.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
	components: {
		appFooter: Footer,
		appCarousel: Carousel,
		appToolbar: Toolbar,
		appNavigation: Navigation
	}
}
</script>
