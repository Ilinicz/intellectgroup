import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollactive from 'vue-scrollactive';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.use(VueScrollactive);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
