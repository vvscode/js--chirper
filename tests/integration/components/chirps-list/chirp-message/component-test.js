import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chirps-list/chirp-message', 'Integration | Component | chirps list/chirp message', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{chirps-list/chirp-message}}`);

  assert.ok(this.$().has('.avatar'), 'It has avatar block');
  assert.ok(this.$().has('.info'), 'It has info block');
});
