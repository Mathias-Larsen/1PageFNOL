/**
 * Created by Mathias on 29-Jan-15.
 */
(function() {

    'use strict';

    angular.module('1pageFNOL').factory('FNOLService', FNOLService);

    function FNOLService() {

        var service ={
            ///////////////// Example code (Can be deleted) )/////////////////
            someMethod: someMethod,
            someOtherMethod: someOtherMethod
            ///////////////// Example code (Can be deleted) )/////////////////
        };

        return service;

        ///////////////// Example code (Can be deleted) )/////////////////
        // Service variables and functions
        var someMeaningfulVariable = 42;

        function someMethod() {
            var methodGeneratedNumber = 43;
            // Service logic
            // ...
            return someMeaningfulVariable + methodGeneratedNumber;
        };

        function someOtherMethod() {
            // Service logic
            // ...
        };
        ///////////////// Example code (Can be deleted) )/////////////////
    }

})();