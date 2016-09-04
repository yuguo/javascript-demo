describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function saveTest(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
