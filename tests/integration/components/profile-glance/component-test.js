import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-glance', 'Integration | Component | profile glance', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{profile-glance}}`);

  assert.ok(this.$().has('.h4:contains("Chirps")'));
  assert.ok(this.$().has('.h4:contains("Following")'));
  assert.ok(this.$().has('.h4:contains("Followers")'));
  assert.ok(this.$().has('.cover-photo'));
  assert.ok(this.$().has('.avatar'));
});
