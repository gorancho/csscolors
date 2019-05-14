import React from 'react';
import styles from './styles.module.scss';
import Hamburger from 'components/Hamburger';
import HorizontalLine from 'components/HorizontalLine';
import PrimaryColor from 'assets/icons/PrimaryColor';
import SecondaryColor from 'assets/icons/SecondaryColor';
import Typography from 'assets/icons/Typography';
import Interactions from 'assets/icons/Interactions';

class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'primary',
      enlarged: false,
    };
  }

    selectOne = (select) => {
      this.setState({ selected: select });
    }

    enlarge = (enlarged) => {
      if (enlarged === false) {
        this.setState({ enlarged: true });
      } else {
        this.setState({ enlarged: false });
      }
    }

    render() {
      const { enlarged, selected } = this.state;
      return (
        <div className={` ${enlarged ? styles.enlarged : styles.main}`}>
          <Hamburger enlarge={this.enlarge(enlarged)} />
          <HorizontalLine />
          <div className={styles.icons}>
            <PrimaryColor
              selectOne={this.selectOne}
              active={selected === 'primary'}
              enlarge={enlarged}
            />
          </div>
          <div className={styles.icons}>
            <SecondaryColor
              selectOne={this.selectOne}
              active={selected === 'secondary'}
              enlarge={enlarged}
            />
          </div>
          <div className={styles.icons}>
            <Typography
              selectOne={this.selectOne}
              active={selected === 'typography'}
              enlarge={enlarged}
            />
          </div>
          <div className={styles.icons}>
            <Interactions
              selectOne={this.selectOne}
              active={selected === 'interactions'}
              enlarge={enlarged}
            />
          </div>
        </div>
      );
    }
}

export default MainMenu;
