// Generated by CoffeeScript 1.3.1
/* Behaviour
*/

var Behaviour;

Behaviour = (function() {

  Behaviour.name = 'Behaviour';

  Behaviour.GUID = 0;

  function Behaviour() {
    this.GUID = Behaviour.GUID++;
    this.interval = 1;
  }

  Behaviour.prototype.apply = function(p, dt, index) {
    var _name, _ref;
    return ((_ref = p[_name = '__behaviour' + this.GUID]) != null ? _ref : p[_name] = {
      counter: 0
    }).counter++;
  };

  return Behaviour;

})();
