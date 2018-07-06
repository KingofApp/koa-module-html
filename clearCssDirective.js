angular.directive('koastyles', function () {
    return {
        scope: { code: '=' },
        template: "{{styleCode}}",
        link: function (scope, element, attrs) {
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    //console.log("css before transformation", newVal);
                    newVal = newVal.replace(/\/\*((?!\*\/).)*\*\//g, "");
                    newVal = newVal.replace(/\s{2,}/g, " ");
                    newVal = newVal.replace(/\s*([:;{}])\s*/g, "$1");
                    newVal = newVal.replace(/;}/g, "}");
                    
                    newVal = "." + attrs.setclass + " " + newVal;
                    newVal = newVal.replace(/[}](?!$)/g, "} ." + attrs.setclass + " ");
                    
                    //debug line
                    //console.log("css after transformation", newVal);
                    
                    scope.styleCode = newVal
                }
            });
        }
    };
});