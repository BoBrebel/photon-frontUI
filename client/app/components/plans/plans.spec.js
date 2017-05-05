import PlansModule from './plans'
import PlansController from './plans.controller';
import PlansComponent from './plans.component';
import PlansTemplate from './plans.html';

describe('Plans', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PlansModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PlansController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PlansTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PlansComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PlansTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PlansController);
      });
  });
});
