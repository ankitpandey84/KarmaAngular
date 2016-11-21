describe('Hello World example', function() {

beforeEach(module('myApp'));

var HelloWorldController,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
HelloWorldController = $controller('HelloWorldControllerKarma', {
$scope: scope
});
}));
it('says hello world!', function () {
expect(scope.welcome).toEqual("Hello World");
});

});
