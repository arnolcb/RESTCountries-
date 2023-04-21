import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//importsf

import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

import PrimeVue from 'primevue/config';

import i18n from './locales/i18n';

import './assets/main.css';

//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css';
//core
import 'primevue/resources/primevue.min.css';
//icons
import 'primeicons/primeicons.css';

const app = createApp(App);

app.component('Card', Card);
app.component('Button', Button);
app.component('Panel', Panel);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);

app.use(router);
app.use(i18n);

//Para usar primeVue
app.use(PrimeVue);
app.mount('#app');