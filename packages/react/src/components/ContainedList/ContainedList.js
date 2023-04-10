/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useId } from '../../internal/useId';
import { usePrefix } from '../../internal/usePrefix';

const variants = ['on-page', 'disclosed'];

function ContainedList({
  action,
  children,
  className,
  isInset,
  kind = variants[0],
  label,
  size = 'lg',
}) {
  const labelId = `${useId('contained-list')}-header`;
  const prefix = usePrefix();

  const classes = classNames(
    `${prefix}--contained-list`,
    { [`${prefix}--contained-list--inset-rulers`]: isInset },
    `${prefix}--contained-list--${kind}`,
    `${prefix}--contained-list--${size}`,
    className
  );
  const filterChildren = children?.filter(
    (child) => !child?.type?.displayName?.includes('Search')
  );
  const isChildSearch =
    children[0]?.props?.placeholder !== 'Search' ? true : false;

  return (
    <div className={classes}>
      {action && action.props.placeholder === 'Search' ? (
        <div>
          <div className={`${prefix}--contained-list__header`}>
            <div id={labelId} className={`${prefix}--contained-list__label`}>
              {label}
            </div>
            <div className={`${prefix}--contained-list__action`}>{action}</div>
          </div>
          {children && <ul aria-labelledby={labelId}>{filterChildren}</ul>}
        </div>
      ) : (
        <>
          <div className={`${prefix}--contained-list__header`}>
            <div id={labelId} className={`${prefix}--contained-list__label`}>
              {label}
            </div>
            {action && action.props.placeholder !== 'Search' && (
              <div className={`${prefix}--contained-list__action`}>
                {action}
              </div>
            )}
          </div>
          {children && isChildSearch ? (
            <ul aria-labelledby={labelId}>{children}</ul>
          ) : (
            <>
              <div className={`${prefix}--contained-list__search`}>
                {children[0]}
              </div>
              <ul aria-labelledby={labelId}>{children[1]}</ul>
            </>
          )}
        </>
      )}
    </div>
  );
}

ContainedList.propTypes = {
  /**
   * A slot for a possible interactive element to render.
   */
  action: PropTypes.node,

  /**
   * A collection of ContainedListItems to be rendered in the ContainedList
   */
  children: PropTypes.node,

  /**
   * Additional CSS class names.
   */
  className: PropTypes.string,

  /**
   * Specify whether the dividing lines in between list items should be inset.
   */
  isInset: PropTypes.bool,

  /**
   * The kind of ContainedList you want to display
   */
  kind: PropTypes.oneOf(variants),

  /**
   * A label describing the contained list.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Specify the size of the contained list.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

export default ContainedList;
