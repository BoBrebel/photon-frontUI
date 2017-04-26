import AddsModule from './adds'
import AddsController from './adds.controller';
import AddsComponent from './adds.component';
import AddsTemplate from './adds.html';

describe('Adds', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddsController();
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
      expect(AddsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AddsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AddsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AddsController);
      });
  });
});
