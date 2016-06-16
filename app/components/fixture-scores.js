import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Component.extend({
  teamsWithScores: null,
  teams: service(),

  init() {
    this._super(...arguments);

    let match = this.get('match');
    let matchesTeams = match.matches_teams;

    this.get('teams').fetch().then(teams => {
      let teamsWithScores = matchesTeams.map(match_team => {
        return {
          team: teams.findBy('id', match_team.team_id),
          score: match_team.score
        };
      });

      this.set('teamsWithScores', teamsWithScores);
    });
  }
});
