import css from './BgImageWrapper.module.css';
import icons from '../../assets/images/icons.svg';
import { DecorationTab } from '../DecorationTab/DecorationTab';

export const BgImageWrapper = () => (
  <div className={css.container}>
    <div className={css.imageBox}>
      <DecorationTab />
    </div>
  </div>
)
