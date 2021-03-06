import Vue from 'vue'
import VueRouter from 'vue-router'
import Ambassador from '../views/Ambassador.vue'
import BecomeAmbassador from '../views/AmbassadorForm.vue'
import SignIn from '../views/SignIn.vue'
import SigninWithoutCAS from '../views/SignInWithoutCAS'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import BecomeGodchild from '../views/BecomeGodchild.vue'
import BecomeGodfather from '../views/BecomeGodfather.vue'
import Wait from '../views/Wait.vue'
import Help from '../views/Help.vue'
import Matching from '../views/Matching.vue'
import NeedHelp from '../views/NeedHelp.vue'
import Updatepassword from '../views/Updatepassword.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/ambassador', name: 'Ambassador', component: Ambassador},
  {path: '/becomeAmbassador', name: 'BecomeAmbassador', component: BecomeAmbassador},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/becomegodchild', name: 'BecomeGodchild', component: BecomeGodchild},
  {path: '/becomegodfather', name: 'BecomeGodfather', component: BecomeGodfather},
  {path: '/signin', name: 'SignIn', component: SignIn},
  {path: '/signinWithoutCAS', name: 'signinWithoutCAS', component: SigninWithoutCAS},
  {path: '/signup', name: 'SignUp', component: SignUp},
  {path: '/updatepassword', name: 'updatepassword', component: Updatepassword},
  {path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword},
  {path: '/resetpassword', name: 'ResetPassword', component: ResetPassword},
  {path: '/wait', name: 'Wait', component: Wait},
  {path: '/help', name: 'Help', component: Help},
  {path: '/matching', name: 'Matching', component: Matching},
  {path: '/needhelp', name: 'NeedHelp', component: NeedHelp},
  {path: '*', component: Profile }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/signup','/signin', '/forgotpassword', '/resetpassword', '/signinWithoutCAS'];
  const authRequest = !publicPages.includes(to.path);
  const signedIn = localStorage.getItem('user');

  if (authRequest && !signedIn){
    next('/signin');
  }else {
    next();
  }
});

export default router;
