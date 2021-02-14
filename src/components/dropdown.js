import cx from 'classnames';
import { Fragment, useState, default as React } from 'react';
import styles from '../styles/dropdown.css';
import PropTypes from 'prop-types';

export const Dropdown = ({
  onClick = () => {},
  label = 'Select Item',
  open: propOpen = false,
  menuItems = [],
}) => {
  const [open, setOpen] = useState(propOpen);

  const handleMenuItemClick = (menuItem) => {
    setOpen(false);
    onClick(menuItem);
  };

  const wrapperClasses = cx('wrapper', { open });

  return (
    <>
      <div className="rlayouts-dropdown outer-wrapper">
        <div className={wrapperClasses}>
          <div
            className="menu-button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="menu-text">{label}</div>
            <div className="icon-wrapper">
              <div className="rectangle rectangle1" />
              <div className="rectangle rectangle2" />
            </div>
          </div>
          <div className="menu">
            {menuItems.map((item) => (
              <Fragment key={item.value}>
                <div
                  className="menu-item"
                  onClick={() => handleMenuItemClick(item)}
                >
                  <div className="menu-item-icon">{item.icon}</div>
                  <div className="menu-item-text">{item.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <style>{styles}</style>
    </>
  );
};

Dropdown.propTypes = {
  menuItems: PropTypes.array,
  open: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};
