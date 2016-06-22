import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fixture-scores', 'Integration | Component | fixture scores', {
  integration: true
});

test('it renders', function(assert) {
  let match = {
    id: 1,
    name: 'France vs Germany',
    matches_teams: [{
      id: 1,
      match_id: 1,
      team_id: 1,
      score: 1
    }, {
      id: 2,
      match_id: 1,
      team_id: 2,
      score: 3
    }]
  };

  let teams = {
    fetch() {
      return {
        then(cb) {
          cb([{
            id: 1,
            country: 'France'
          }, {
            id: 2,
            country: 'Germany'
          }]);
        }
      }
    }
  };

    this.set('match', match);
    this.set('teams', teams);

    this.render(hbs`
      {{fixture-scores match=match teams=teams}}
    `);

    assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ' '), `France - 1 Germany - 3`);
});
