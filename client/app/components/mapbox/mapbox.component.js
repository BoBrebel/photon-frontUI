import template from './mapbox.html';
import controller from './mapbox.controller';
import './mapbox.scss';

let mapboxComponent = {
  restrict: 'E',
  bindings: {
    order : '='
  },
  template,
  controller:['Users','Cars','$interval','leafletMarkerEvents','$rootScope','$http',controller]
};

export default mapboxComponent;
