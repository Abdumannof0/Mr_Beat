import React from 'react'
import style from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import Icon_city from '../images/icon-city.png'
import Menu_icon from '../images/menu-con.png'

export default function NavBar() {
    return (
        <nav className={style.nav}>
            <div className={style.nav_left}>
                <Link to={'/'}>
                    <div className={style.logo}>
                        <h1>MR.</h1>
                        <h1>БЫТ</h1>
                    </div>
                </Link>
                <img
                    src={Menu_icon}
                    alt=""
                    className={style.menu_icon}
                />
                <ul className={style.ul_items}>
                    <Link to={'*'}>
                        <li className={style.li_items}>Цены на услуги</li>
                    </Link>
                    <Link to={'about'}>
                        <li className={style.li_items}>О компании</li>
                    </Link>
                    <Link to={'*'}>
                        <li className={style.li_items}>Отзывы</li>
                    </Link>
                    <Link to={'*'}>
                        <li className={style.li_items}>Контакты</li>
                    </Link>
                </ul>
            </div>
            <div className={style.nav_right}>
                <div className={style.nav_dropdown}>
                    <img
                        src={Icon_city}
                        alt=""
                        className={style.icon_city} />
                    <h3>Moсква и Подмосковье</h3>
                </div>
                <p
                    className={style.nav_text_call}> 8(495)
                    <span>106-52-16</span>
                </p>
            </div>
        </nav>
    )
}
