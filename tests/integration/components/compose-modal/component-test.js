import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compose-modal', 'Integration | Component | compose modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{compose-modal}}`);

  assert.equal(this.$().find('h6').text().trim(), 'Compose Chirp');
  assert.ok(this.$().has('button.chirp'), 'It has chirp button');
});
