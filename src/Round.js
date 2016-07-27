'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { Round as RoundModel } from 'zsfootball-models';
import Match from 'zsfootball-match';

import templates from './Round.soy';

class Round extends Component  {
	attached() {
		this.setMatches_(this.matches);
	}
	/**
	 * Returns the `Match` component being used to render the matched items.
	 * @return {!Match}
	 */
	getMatch() {
		return this.components.Match;
	}

	/**
	 *
	 */
	setRound_(value) {
	 	return new RoundModel(value);
	}

	/**
	 *
	 */
	setMatches_(values) {
		var matches = [];

		for(let i = 0; i < values.length; i++) {
			matches.push(new Match({match:values[i], viewType: this.viewType}, this.element.children[1].children[i].children[0])); 
		}

	 	return matches;
	}

	setRoundDay_(value) {
		var day;

		if (value) {
			day = {
				year: value.getFullYear(),
				month: value.getMonth() + 1,
				day: value.getDate(),
				localeDateString: value.toLocaleDateString()
			};
		}

		return day; 
	}
}
Soy.register(Round, templates);

Round.STATE = {
	/**
	 * A Match component array
	 */
	matches: {
	},

	viewType: {
	},

	/**
	 * The current Round
	 */
	round: {
		setter: 'setRound_'
	},

	/**
	 *
	 */
	roundDay: {
		setter: 'setRoundDay_'
	}
}

export default Round;
