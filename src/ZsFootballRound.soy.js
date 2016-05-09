/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ZsFootballRound.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZsFootballRound.
 * @public
 */

goog.module('ZsFootballRound.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('table', null, null,
      'class', 'table zsfootball-round' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    var competition__soy6 = opt_data.round.competition;
    var season__soy7 = opt_data.round.competition.season;
    ie_open('caption');
      ie_open('span');
        itext((goog.asserts.assert((competition__soy6.country) != null), competition__soy6.country));
      ie_close('span');
      ie_open('span');
        itext((goog.asserts.assert((season__soy7.title) != null), season__soy7.title));
      ie_close('span');
      ie_open('span');
        itext((goog.asserts.assert((competition__soy6.title) != null), competition__soy6.title));
      ie_close('span');
      if (! opt_data.roundDay) {
        ie_open('span');
          itext('Round:');
          itext((goog.asserts.assert((opt_data.round.num) != null), opt_data.round.num));
        ie_close('span');
      }
      if (opt_data.roundDay) {
        ie_open('span');
          itext((goog.asserts.assert((opt_data.roundDay.localeDateString) != null), opt_data.roundDay.localeDateString));
        ie_close('span');
      }
    ie_close('caption');
    ie_open('tbody');
      var matchList29 = opt_data.matches;
      var matchListLen29 = matchList29.length;
      for (var matchIndex29 = 0; matchIndex29 < matchListLen29; matchIndex29++) {
        var matchData29 = matchList29[matchIndex29];
        $renderRowView_({match: matchData29, viewType: 1}, null, opt_ijData);
      }
    ie_close('tbody');
  ie_close('table');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ZsFootballRound.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderRowView_(opt_data, opt_ignored, opt_ijData) {
  ie_open('tr', null, null,
      'class', 'zsfootball-match' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('td', null, null,
        'class', 'match-date');
      itext((goog.asserts.assert((opt_data.match.localHourMinute) != null), opt_data.match.localHourMinute));
    ie_close('td');
    ie_open('td', null, null,
        'class', 'home-club');
      itext((goog.asserts.assert((opt_data.match.homeClub) != null), opt_data.match.homeClub));
    ie_close('td');
    ie_open('td', null, null,
        'class', 'result');
      itext((goog.asserts.assert((opt_data.match.homeGoals) != null), opt_data.match.homeGoals));
      itext(' - ');
      itext((goog.asserts.assert((opt_data.match.awayGoals) != null), opt_data.match.awayGoals));
    ie_close('td');
    ie_open('td', null, null,
        'class', 'away-club');
      itext((goog.asserts.assert((opt_data.match.awayClub) != null), opt_data.match.awayClub));
    ie_close('td');
    ie_open('td', null, null,
        'class', 'attendance');
      itext((goog.asserts.assert((opt_data.match.attendance) != null), opt_data.match.attendance));
    ie_close('td');
  ie_close('tr');
}
exports.renderRowView_ = $renderRowView_;
if (goog.DEBUG) {
  $renderRowView_.soyTemplateName = 'ZsFootballRound.renderRowView_';
}

exports.render.params = ["elementClasses","round","matches","roundDay"];
exports.render.types = {"elementClasses":"any","round":"any","matches":"any","roundDay":"any"};
exports.renderRowView_.params = ["elementClasses","match"];
exports.renderRowView_.types = {"elementClasses":"any","match":"any"};
templates = exports;
return exports;

});

class ZsFootballRound extends Component {}
Soy.register(ZsFootballRound, templates);
export { ZsFootballRound, templates };
export default templates;
/* jshint ignore:end */
