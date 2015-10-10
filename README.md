# Meteor Inflector 
[![Build Status](https://travis-ci.org/katrotz/meteor-inflector.svg)](https://travis-ci.org/katrotz/meteor-inflector)
> The [Inflector](http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html) transforms words from singular to plural, class names to table names, modularized class names to ones without, and class names to foreign keys. The default inflections for pluralization, singularization, and uncountable words are kept in inflections.rb *(ruby on rails)*

## About
This is a meteor package wrapping the [NodeJS inflection](https://github.com/dreamerslab/node.inflection) package which is a port of [inflection-js](https://code.google.com/p/inflection-js/) which is a port of Ruby on Rails [Inflector module](http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html)

<img src="https://matthewghamilton.files.wordpress.com/2014/11/lol.jpg" alt="Inception LOL"/>

## How to use

### Server and Client
This package exports the `Inflector` object that can be accessed from the global scope which exposes all the inflection methods from nodes package:

	Inflector.indexOf(arr, item, fromIndex, compareFunc)
> Checks if an array contains a given element.

	Inflector.pluralize(string, plural)
> Computes the plural form of a noun.
	
	Inflector.singularize(string, singular)
> The reverse of pluralize, returns the singular form of a word.

	Inflector.inflect(string, count, singular, plural)
> This function will pluralize or singularlize a string respectively based on an count value

	Inflector.camelize(string, lowFirstLetter)
> Lower case underscored words will be returned in camel case. Additionally "/" is translated to "::"

	Inflector.underscore(string, allUpperCase)
> Camel cased words are returned as lower cased and underscored. Additionally "::" is translated to "/"

	Inflector.humanize(string, lowFirstLetter)
> Lower case underscored words will be returned in humanized form.

	Inflector.capitalize(string)
> All characters will be lower case and the first will be upper.

	Inflector.dasherize(string)
> Replaces underscores with dashes in the string.

	Inflector.titleize(string)
> Capitalizes words as you would for a book title.

	Inflector.demodulize(string)
> Removes module names leaving only class names.(Ruby style)

	Inflector.tableize(string)
> Return camel cased words into their underscored plural form.

	Inflector.classify(string)
> Create a class name from a plural table name like Rails does for table names to models.

	Inflector.foreign_key(string, dropIdUnderscore)
> Creates a foreign key name from a class name.

	Inflector.ordinalize(string)
> Turns a number into an ordinal string used to denote the position in an ordered sequence such as 1st, 2nd, 3rd, 4th.

	Inflector.transform(string, transforms)
> This function performs multiple inflection methods on a string

### Client template helpers
The inflector helpers work with both positional and keyword arguments. For the sake of example, both mandatory and optional keyword arguments are listed:

- ```{{pluralize string plural=}}```
- ```{{singularize string singular=}}```
- ```{{inflect string count singular= plural=}}```
- ```{{camelize string lowFirstLetter=}}```
- ```{{underscore string allUpperCase=}}```
- ```{{humanize string lowFirstLetter=}}```
- ```{{capitalize string}}```
- ```{{dasherize string}}```
- ```{{titleize string}}```
- ```{{ordinalize string}}```
