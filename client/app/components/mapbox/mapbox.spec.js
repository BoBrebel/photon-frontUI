import MapboxModule from './mapbox'
import MapboxController from './mapbox.controller';
import MapboxComponent from './mapbox.component';
import MapboxTemplate from './mapbox.html';

describe('Mapbox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MapboxModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MapboxController();
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
      expect(MapboxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MapboxComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MapboxTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MapboxController);
      });
  });
});
