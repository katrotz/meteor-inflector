/*Expose Inflector server side*/
if (Meteor.isServer) {
  Inflector = Npm.require('inflection');
}

/*Expose Inflector client side*/
if (Meteor.isClient) {
  Inflector = window.inflection;
}

/*Register Inflector methods as template helpers*/
if (Meteor.isClient) {
  Template.registerHelper('pluralize', function(string, plural) {
    return Inflector.pluralize.apply(Inflector, argumentsToArray(['string', 'plural'], arguments));
  });

  Template.registerHelper('singularize', function(string, singular) {
    return Inflector.singularize.apply(Inflector, argumentsToArray(['string', 'singular'], arguments));
  });

  Template.registerHelper('inflect', function(string, count, singular, plural) {
    return Inflector.inflect.apply(Inflector, argumentsToArray(['string', 'count', 'singular', 'plural'], arguments));
  });

  Template.registerHelper('camelize', function(string, lowFirstLetter) {
    return Inflector.camelize.apply(Inflector, argumentsToArray(['string', 'lowFirstLetter'], arguments));
  });

  Template.registerHelper('underscore', function(string, allUpperCase) {
    return Inflector.underscore.apply(Inflector, argumentsToArray(['string', 'allUpperCase'], arguments));
  });

  Template.registerHelper('humanize', function(string, lowFirstLetter) {
    return Inflector.humanize.apply(Inflector, argumentsToArray(['string', 'lowFirstLetter'], arguments));
  });

  Template.registerHelper('capitalize', function(string) {
    return Inflector.capitalize.apply(Inflector, argumentsToArray(['string'], arguments));
  });

  Template.registerHelper('dasherize', function(string) {
    return Inflector.dasherize.apply(Inflector, argumentsToArray(['string'], arguments));
  });

  Template.registerHelper('titleize', function(string) {
    return Inflector.titleize.apply(Inflector, argumentsToArray(['string'], arguments));
  });

  Template.registerHelper('ordinalize', function(string) {
    return Inflector.ordinalize.apply(Inflector, argumentsToArray(['string'], arguments));
  });

  function argumentsToArray(kwKeys, args) {
    args = Array.prototype.slice.call(args);

    var kw = args.pop();
    if (!(kw instanceof Spacebars.kw)) {
      args.push(kw);
      kw = {};
    }

    return kwKeys.map(function(key) {
      var hash = kw.hash || {};
      if (!args.length) {
        return hash[key];
      }

      return args.shift();
    }).filter(function(v) {
      return (typeof v !== 'undefined');
    });
  }
}