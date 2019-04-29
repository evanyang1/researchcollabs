import React from 'react';
import iconBeaker from '../assets/icons/beaker.png';

const headerHeight = 75;
const iconHeight = 50;
const styles = {
  containerMain: {
    width: '100vw',
    height: `${headerHeight}px`,
    backgroundColor: '#000',
    display: 'flex',
  },
  containerLogo: {
    height: `${headerHeight}px`,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerAccount: {
    width: `${headerHeight}px`,
    height: `${headerHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerSignup: {
    width: `${headerHeight}px`,
    height: `${headerHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconImage: {
    width: `${iconHeight}px`,
    height: `${iconHeight}px`,
    cursor: 'pointer',
  },
  titleText: {
    fontSize: '24px',
  }
};
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.containerMain}>
        <div style={styles.containerAccount}>
          <img src={iconBeaker} style={styles.iconImage} />
        </div>
        <div style={styles.containerLogo}>
          <span style={styles.titleText}>ResearchCollabs</span>
        </div>
        <div style={styles.containerSignup}>
          <span>Log In</span>
        </div>
        <div style={styles.containerSignup}>
          <span>Sign Up</span>
        </div>
      </div>
    )
  }
}