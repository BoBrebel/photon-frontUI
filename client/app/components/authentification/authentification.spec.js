import AuthentificationModule from './authentification'
import AuthentificationController from './authentification.controller';
import AuthentificationComponent from './authentification.component';
import AuthentificationTemplate from './authentification.html';

describe('Authentification', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AuthentificationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AuthentificationController();
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
      expect(AuthentificationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AuthentificationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AuthentificationTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AuthentificationController);
      });
  });
});
