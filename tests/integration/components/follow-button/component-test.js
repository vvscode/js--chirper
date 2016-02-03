import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('follow-button', 'Integration | Component | follow button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.set('user', { followers: [] });
  this.render(hbs`{{follow-button profile=user}}`);

  assert.equal(this.$().text().trim(), 'Follow');
  assert.ok(this.$().has('button'), 'Follow button');
});
