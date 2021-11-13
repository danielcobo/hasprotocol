const hasProtocol = require('./index.js');

test('parameter type', function () {
  'Throws if parameter is not a string';
  expect(() => hasProtocol(null)).toThrow(
    'hasprotocol() : expected string argument, received: object'
  );
});

['http://', 'https://', 'localhost://', 'file:///', 'file://'].forEach(
  function (protocol) {
    describe(protocol, function () {
      test('Identical string', function () {
        expect(hasProtocol(protocol)).toStrictEqual(true);
      });
      test('String with append string', function () {
        expect(hasProtocol(protocol + 'hello')).toStrictEqual(true);
      });
      test('Prepend string', function () {
        expect(hasProtocol('helloworld' + protocol + 'hello')).toStrictEqual(
          false
        );
      });
    });
  }
);
