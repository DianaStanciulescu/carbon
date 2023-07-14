/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSButton from '../button/button';
import buttonStyles from '../button/button.scss';
import styles from './modal.scss';

/**
 * Modal footer button.
 *
 * @element cds-modal-footer-button
 */
@customElement(`${prefix}-modal-footer-button`)
class CDSModalFooterButton extends CDSButton {
  static styles = [buttonStyles, styles]; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSModalFooterButton;
