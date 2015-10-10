// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
Tinytest.add('Inflector package exports', function(test) {
  test.equal(typeof Inflector === 'object', true);
});

if (Meteor.isClient) {
  Tinytest.add('Inflector template methods', function(test) {
    var pluralize = Blaze._globalHelpers.pluralize;
    var singularize = Blaze._globalHelpers.singularize;
    var inflect = Blaze._globalHelpers.inflect;
    var camelize = Blaze._globalHelpers.camelize;
    var underscore = Blaze._globalHelpers.underscore;
    var humanize = Blaze._globalHelpers.humanize;
    var capitalize = Blaze._globalHelpers.capitalize;
    var dasherize = Blaze._globalHelpers.dasherize;
    var titleize = Blaze._globalHelpers.titleize;
    var ordinalize = Blaze._globalHelpers.ordinalize;
    test.equal(pluralize('man'), 'men', helperErrorMsg('pluralize'));
    test.equal(pluralize('man', 'dudes'), 'dudes', helperErrorMsg('pluralize'));
    test.equal(singularize('women'), 'woman', helperErrorMsg('singularize'));
    test.equal(singularize('women', 'baby'), 'baby', helperErrorMsg('singularize'));
    test.equal(inflect('car', 1), 'car', helperErrorMsg('inflect'));
    test.equal(inflect('car', 2), 'cars', helperErrorMsg('inflect'));
    test.equal(inflect('car', 1, 'ride', 'rides'), 'ride', helperErrorMsg('inflect'));
    test.equal(inflect('car', 2, 'ride', 'rides'), 'rides', helperErrorMsg('inflect'));
    test.equal(camelize('big_fish'), 'BigFish', helperErrorMsg('camelize'));
    test.equal(camelize('big_fish', true), 'bigFish', helperErrorMsg('camelize'));
    test.equal(underscore('BigFish'), 'big_fish', helperErrorMsg('underscore'));
    test.equal(underscore('BF'), 'b_f', helperErrorMsg('underscore'));
    test.equal(underscore('BF', true), 'BF', helperErrorMsg('underscore'));
    test.equal(underscore('Big::Fish', true), 'big/fish', helperErrorMsg('underscore'));
    test.equal(humanize('big_fish'), 'Big fish', helperErrorMsg('humanize'));
    test.equal(humanize('big_fish', true), 'big fish', helperErrorMsg('humanize'));
    test.equal(capitalize('big fish'), 'Big fish', helperErrorMsg('capitalize'));
    test.equal(dasherize('big_fish'), 'big-fish', helperErrorMsg('dasherize'));
    test.equal(dasherize('big fish'), 'big-fish', helperErrorMsg('dasherize'));
    test.equal(titleize('big_fish'), 'Big Fish', helperErrorMsg('titleize'));
    test.equal(titleize('big fish'), 'Big Fish', helperErrorMsg('titleize'));
    test.equal(ordinalize('the 1 big fish'), 'the 1st big fish', helperErrorMsg('ordinalize'));
    test.equal(ordinalize('the 2 big fish'), 'the 2nd big fish', helperErrorMsg('ordinalize'));
    test.equal(ordinalize('the 3 big fish'), 'the 3rd big fish', helperErrorMsg('ordinalize'));
    test.equal(ordinalize('the 4 big fish'), 'the 4th big fish', helperErrorMsg('ordinalize'));
    function helperErrorMsg(helperName) {
      return 'Failed ' + helperName + ' test';
    }
  });
}

Tinytest.add('Inflector methods', function(test) {
  test.isTrue(typeof Inflector.indexOf == 'function');
  test.isTrue(typeof Inflector.pluralize == 'function');
  test.isTrue(typeof Inflector.singularize == 'function');
  test.isTrue(typeof Inflector.inflect == 'function');
  test.isTrue(typeof Inflector.camelize == 'function');
  test.isTrue(typeof Inflector.underscore == 'function');
  test.isTrue(typeof Inflector.humanize == 'function');
  test.isTrue(typeof Inflector.capitalize == 'function');
  test.isTrue(typeof Inflector.dasherize == 'function');
  test.isTrue(typeof Inflector.titleize == 'function');
  test.isTrue(typeof Inflector.demodulize == 'function');
  test.isTrue(typeof Inflector.tableize == 'function');
  test.isTrue(typeof Inflector.classify == 'function');
  test.isTrue(typeof Inflector.foreign_key == 'function');
  test.isTrue(typeof Inflector.ordinalize == 'function');
  test.isTrue(typeof Inflector.transform == 'function');
});
