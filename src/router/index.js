import Vue from 'vue'
import VueRouter from 'vue-router'
import Ambassador from '../components/Ambassador.vue'
import BecomeAmbassador from '../components/AmbassadorForm.vue'
import Buddy from '../components/Buddy.vue'
import Home from '../components/Home.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'
import BecomeGodchild from '../components/BecomeGodchild.vue'
import BecomeGodfather from '../components/BecomeGodfather.vue'
import Wait from '../components/Wait.vue'
import Help from '../components/Help.vue'
import Matching from '../components/Matching.vue'
import Problem from '../components/Problem.vue'
import NeedHelp from '../components/NeedHelp.vue'
import Updatepassword from '../components/Updatepassword.vue'
import Profil from '../components/Profil.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/home', component: Home},
  {path: '/ambassador', name: 'Ambassador', component: Ambassador},
  {path: '/becomeAmbassador', name: 'BecomeAmbassador', component: BecomeAmbassador},
  {path: '/buddy', name: 'Buddy', component: Buddy},
  {path: '/profil', name: 'Profil', component: Profil},
  {path: '/becomegodchild', name: 'BecomeGodchild', component: BecomeGodchild},
  {path: '/becomegodfather', name: 'BecomeGodfather', component: BecomeGodfather},
  {path: '/signin', name: 'SignIn', component: SignIn},
  {path: '/signup', name: 'SignUp', component: SignUp},
  {path: '/updatepassword', name: 'updatepassword', component: Updatepassword},
  {path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword},
  {path: '/resetpassword', name: 'ResetPassword', component: ResetPassword},
  {path: '/wait', name: 'Wait', component: Wait},
  {path: '/help', name: 'Help', component: Help},
  {path: '/matching', name: 'Matching', component: Matching},
  {path: '/problem', name: 'Problem', component: Problem},
  {path: '/needhelp', name: 'NeedHelp', component: NeedHelp},
  {path: '*', component: Home }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/','/home','/signup','/signin', '/forgotpassword', '/resetpassword'];
  const authRequiest = !publicPages.includes(to.path);
  const signedIn = localStorage.getItem('user');

  if (authRequiest && !signedIn){
    next('/signin');
  }else {
    next();
  }
});

export default router;
