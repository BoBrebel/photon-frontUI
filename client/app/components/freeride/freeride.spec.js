import FreerideModule from './freeride'
import FreerideController from './freeride.controller';
import FreerideComponent from './freeride.component';
import FreerideTemplate from './freeride.html';

describe('Freeride', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FreerideModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FreerideController();
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
      expect(FreerideTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FreerideComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FreerideTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FreerideController);
      });
  });
});
