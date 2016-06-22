import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Component.extend({
  teamsWithScores: [],
  teams: service(),

  init() {
    this._super(...arguments);

    let match = this.get('match');
    let matchesTeams = match.matches_teams;

    this.get('teams').fetch().then(teams => {
      let teamsWithScores = matchesTeams.map(match_team => {
        return {
          matchTeam: match_team,
          team: teams.findBy('id', match_team.team_id),
          score: match_team.score,
          hasScore: match_team.score !== null
        };
      });

      this.set('teamsWithScores', teamsWithScores);
    });
  },

  // CPs
  predictable: Ember.computed('teamsWithScores.@each.hasScore', function() {
    return this.get('teamsWithScores').any(team => !team.hasScore);
  }),

  // Action
  actions: {
    savePrediction() {
      event.preventDefault();
      this.get('teamsWithScores').forEach(prediction => {
        let payload = {
          prediction: {
            matches_team_id: prediction.matchTeam.id,
            user_id: 1,
            score: prediction.score,
          }
        };
        this.get('teams').save(payload);
      });
    }
  }
});
