import React from 'react';
import styles from './styles.module.scss';
import Hamburger from 'components/Hamburger';
import HorizontalLine from 'components/HorizontalLine';
import PrimaryColor from 'assets/icons/PrimaryColor';
import SecondaryColor from 'assets/icons/SecondaryColor';
import Typography from 'assets/icons/Typography';
import Interactions from 'assets/icons/Interactions';

class MainMenu extends React.Component {

  state = {
    selected: 'primary',
    enlarged: false,
  };

  onSelectIcon = (select) => {
    this.setState({ selected: select });
  }

  onOpenMenu = (enlarged) => {
    if (enlarged === false) {
      this.setState({ enlarged: true });
    } else {
      this.setState({ enlarged: false });
    }
  }


  render() {
    const { enlarged, selected } = this.state;

    return (
      <div className={`${styles.main} ${enlarged ? styles.enlarged : ''}`}>
        <Hamburger onOpenMenu={() => this.onOpenMenu(enlarged)} />
        <HorizontalLine />
        <div className={styles.icons}>
          <div onClick={() => this.onSelectIcon('primary')} className={styles.icon}>
            <PrimaryColor
              onSelectIcon={this.onSelectIcon}
              active={selected === 'primary'}
            />

            <span className={`${styles.label} ${selected === 'primary' ? styles.active : ''}`}>
              <strong> Primary color </strong>
            </span>

          </div>
          <div onClick={() => this.onSelectIcon('secondary')} className={styles.icon}>
            <SecondaryColor
              onSelectIcon={this.onSelectIcon}
              active={selected === 'secondary'}
            />

            <span className={`${styles.label} ${selected === 'secondary' ? styles.active : ''}`}>
              <strong> Secondary color </strong>
            </span>


          </div>
          <div onClick={() => this.onSelectIcon('typography')} className={styles.icon}>
            <Typography
              onSelectIcon={this.onSelectIcon}
              active={selected === 'typography'}
            />

            <span className={`${styles.label} ${selected === 'typography' ? styles.active : ''}`}>
              <strong> Typography </strong>
            </span>

          </div>
          <div onClick={() => this.onSelectIcon('interactions')} className={styles.icon}>
            <Interactions
              onSelectIcon={this.onSelectIcon}
              active={selected === 'interactions'}
            />

            <span className={`${styles.label} ${selected === 'interactions' ? styles.active : ''}`}>
              <strong> Interactions </strong>
            </span>

          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
