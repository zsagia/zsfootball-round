'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { Match, Round } from 'zsfootball-models';

import templates from './ZsFootballRound.soy';

class ZsFootballRound extends Component  {
	/**
	 *
	 */
	setRound_(value) {
	 	return new Round(value);
	}

	/**
	 *
	 */
	setMatches_(values) {
		var matches = [];

		for(let i = 0; i < values.length; i++) {
			matches.push(new Match(values[i])); 
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
Soy.register(ZsFootballRound, templates);

ZsFootballRound.STATE = {
	/**
	 *
	 */
	matches: {
		setter: 'setMatches_'
	},

	/**
	 *
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

export default ZsFootballRound;
