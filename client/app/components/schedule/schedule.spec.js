import ScheduleModule from './schedule'
import ScheduleController from './schedule.controller';
import ScheduleComponent from './schedule.component';
import ScheduleTemplate from './schedule.html';

describe('Schedule', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ScheduleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ScheduleController();
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
      expect(ScheduleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ScheduleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ScheduleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ScheduleController);
      });
  });
});
