(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['tasks_backend_url_suffix'] = '${TASKS_BACKEND_URL_SUFFIX}';
  window['env']['users_backend_url_suffix'] = '${USERS_BACKEND_URL_SUFFIX}';
  window['env']['app_title'] = '${FRONTEND_NAME}' + ' v' + '${APP_FRONTEND_VERSION}';
})(this);
