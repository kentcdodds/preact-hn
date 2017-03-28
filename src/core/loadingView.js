import {h, Component} from 'preact';
import Logo from '../icons/logo.js';
import styles from './routeLoading.css';

export default class LoadingView extends Component {
  state = {render: false};
  componentDidMount() {
    const reasonableDelay = 200;
    setTimeout(
      () => {
        this.setState({render: true});
      },
      reasonableDelay
    );
  }
  render() {
    return this.state.render
      ? <div class={styles.routeLoading}><Logo width={60} height={60} /></div>
      : null;
  }
}
