window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = require('jquery');

  require('bootstrap-sass');
} catch (e) {}

/**
 * The HTTP library automatically handles sending the CSRF token as a header
 * based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Register the CSRF Token to all outgoing HTTP requests automatically.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error(
    'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token'
  );
}

/**
 * Pusher, a real-time web app for pub/sub messaging and helper library Echo
 * to easily subscribe and listen to Pusher events that are broadcast by Laravel.
 */

import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '5d4645eff37eab5886d7',
  cluster: 'mt1',
  encrypted: true
});
