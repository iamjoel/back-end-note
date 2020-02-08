
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'Hello Egg';
    }
  }
  return HomeController;
};