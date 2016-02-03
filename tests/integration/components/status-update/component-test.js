import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('status-update', 'Integration | Component | status update', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{status-update}}`);

  assert.ok(this.$().has('button:contains("What are you doing?")'), '');
  assert.ok(this.$().has('img.avatar'), '');
});
