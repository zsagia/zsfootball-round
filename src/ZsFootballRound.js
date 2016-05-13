'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import { Match, Round } from 'zsfootball-models';
import ZsFootballMatch from 'zsfootball-match';

import templates from './ZsFootballRound.soy';

class ZsFootballRound extends Component  {
	attached() {
		this.setMatches_(this.matches);
	}
	/**
	 * Returns the `ZsfootbalMatch` component being used to render the matched items.
	 * @return {!ZsfootbalMatch}
	 */
	getZsFootballMatch() {
		return this.components.ZsFootballMatch;
	}

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
			matches.push(new ZsFootballMatch({match:values[i]}, this.element.children[1].children[i].children[0])); 
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
