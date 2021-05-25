/**
 * @license
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview DOM pattern to match a node of the given type.
 */

goog.provide('goog.dom.pattern.NodeType');

goog.require('goog.dom.pattern.AbstractPattern');
goog.require('goog.dom.pattern.MatchType');
goog.requireType('goog.dom.NodeType');
goog.requireType('goog.dom.TagWalkType');



/**
 * Pattern object that matches any node of the given type.
 * @param {goog.dom.NodeType} nodeType The node type to match.
 * @constructor
 * @extends {goog.dom.pattern.AbstractPattern}
 * @final
 */
goog.dom.pattern.NodeType = function(nodeType) {
  'use strict';
  /**
   * The node type to match.
   * @type {goog.dom.NodeType}
   * @private
   */
  this.nodeType_ = nodeType;
};
goog.inherits(goog.dom.pattern.NodeType, goog.dom.pattern.AbstractPattern);


/**
 * Test whether the given token is a text token which matches the string or
 * regular expression provided in the constructor.
 * @param {Node} token Token to match against.
 * @param {goog.dom.TagWalkType} type The type of token.
 * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
 *     matches, <code>NO_MATCH</code> otherwise.
 * @override
 */
goog.dom.pattern.NodeType.prototype.matchToken = function(token, type) {
  'use strict';
  return token.nodeType == this.nodeType_ ? goog.dom.pattern.MatchType.MATCH :
                                            goog.dom.pattern.MatchType.NO_MATCH;
};
