import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style); 
function Header() {
    return <header className={cx('wapper')}>
        <div className={cx('inner')}></div>
    </header>;
}

export default Header;