describe('BloomFilter test', function() {
  var filter;

  beforeEach(function() {
    filter = new BloomFilter();
  });

  it('should insert an element into the filter and check if it contains it', function() {
    filter.insert('cat');
    expect(filter.contains('cat')).to.equal(true);
    filter.insert('dog');
    expect(filter.contains('dog')).to.equal(true);
    filter.insert('bird');
    expect(filter.contains('bird')).to.equal(true);
    filter.insert('elephant');
    expect(filter.contains('elephant')).to.equal(true);
    filter.insert('lion');
    expect(filter.contains('lion')).to.equal(true);
    filter.insert('tiger');
    expect(filter.contains('tiger')).to.equal(true);
    filter.insert('mouse');
    expect(filter.contains('mouse')).to.equal(true);
  });

  it('should return false if filter does not contain', function() {
    expect(filter.contains('cat')).to.equal(false);
    expect(filter.contains('dog')).to.equal(false);
    expect(filter.contains('bird')).to.equal(false);
    expect(filter.contains('elephant')).to.equal(false);
    expect(filter.contains('lion')).to.equal(false);
    expect(filter.contains('tiger')).to.equal(false);
    expect(filter.contains('mouse')).to.equal(false);
  });


  it('should return an analysis of false positives', function() {
    console.log(falsePositives(['cAt', 'doG', 'mOuSe', 'liON', 'elEPhant', 'FISH', 'balugaWhale']));
  });
});