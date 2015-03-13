/**
 * Created by Mathias on 29-Jan-15.
 */
(function () {

    'use strict';

    angular.module('1pageFNOL').controller('FNOLController', FNOLController);

    function FNOLController() {

        var vm = this;
        vm.generalExpand = false;
        vm.currentDate = new Date();


        activate();

        function activate() {

        }
    }

})();