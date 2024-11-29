import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import logo from '../items/voldropw_nobg.png'
import blog from '../items/blog.jpg'
import money from '../items/flying-money.png'
import lend from '../items/lend.jpg'
import rocket from '../items/rocket.png'
import seat from '../items/seat.png'
import shop from '../items/shop.jpg'
import chat from '../items/chat.jpg'
import mlogo from '../items/logow_nobg.png'


const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div style={{outline: 'none'}}>
                <div class="page-wrapper page-wrapper">
                    <header class="header header">
                        <div class="container-main nav-wrapper">
                            <div class="header-main">
                                <a aria-current="page" class="" href="/">
                                    <img src={logo} class="nav-wrapper0 cvSUXu"/>
                                </a>
                                <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </button>
                            </div>
                            <nav class={`nav-wrapper3 menu-dropdown ${menuOpen ? 'drop' : 'dropout'}`}>
                                <a class="nav-wrapper4 dchpfH" href="/tariffs">Тарифы</a>
                                <a class="nav-wrapper4 dchpfH" href="/contacts">Контакты</a>
                                <a class="nav-wrapper4 dchpfH" href="/news">Новости</a>
                                <a href="/" target="_blank" class="nav-wrapper4 iPEspy">Личный кабинет</a>
                                <a href="/" target="_blank" class="aq5yv8-11 aq5yv8-12 nav-wrapper5 hJEsNH">Личный кабинет</a>
                            </nav>
                        </div>
                    </header>
                    <div class="container-main">
                        <div class="react-reveal" style={{opacity: 0}}>
                            <h1 class="aq5yv8-2 text-primary boqw2y-0 hHzcrK">
                                Лучший таск-менеджер<br/>Удовлетворяет любые потребности.
                            </h1>
                        </div>
                        <div class="react-reveal" style={{opacity: 0}}>
                            <p class="aq5yv8-2 text-primary boqw2y-1 eyOHAb">
                                Планирование, приоритеты, отслеживание, управление.<br/>Возможно ВСЁ.
                            </p>
                        </div>
                        <div class="react-reveal" style={{opacity: 0}}>
                            <p class="aq5yv8-2 text-primary boqw2y-2 fUnWcs">
                                Не определились с тарифом? <br/>Обратитесь в поддержку — выдадим тестовый период на Pro тариф :)
                            </p>
                        </div>
                        <div class="react-reveal" style={{opacity: 0}}>
                            <section class="boqw2y-3 cLDBkJ">
                                <div class="feature-card feature-card">
                                    <div class="sc-9sc27a-2 hFobUc">
                                        <img alt="flying-money" src={money} class="sc-9sc27a-1 fJgViz"/>
                                        <div class="sc-9sc27a-3 cfExzN">
                                            <h3 class="sc-9sc27a-4 hqORTy">Огромное количество возможностей</h3>
                                            <p class="sc-9sc27a-5 dCCmze"></p>
                                        </div>
                                    </div>
                                    <div class="sc-9sc27a-6 dNmukM">
                                        <a href="/tariffs" target="_blank" class="sc-9sc27a-7 jCYzpt">К тарифам</a>
                                        <p class="sc-9sc27a-5 BXkAa"></p>
                                    </div>
                                </div>
                                <div class="highlight-section highlight-section">
                                    <div class="boqw2y-5 bmNviT">
                                        <p class="boqw2y-6 cImJLk">Создание команды</p>
                                    </div>
                                    <img src={blog} class="boqw2y-7 kOXYsx"/>
                                </div>
                                <div class="highlight-section highlight-section">
                                    <div class="boqw2y-5 bmNviT">
                                        <p class="boqw2y-6 cImJLk">Деление на проекты</p>
                                    </div>
                                    <img src={lend} class="boqw2y-7 kOXYsx"/>
                                </div>
                                <div class="highlight-section iNinLL">
                                    <div class="boqw2y-5 bmNviT">
                                        <p class="boqw2y-6 cImJLk">Создание задач</p>
                                    </div>
                                    <img src={blog} class="boqw2y-7 kOXYsx"/>
                                </div>
                                <div class="highlight-section iNinLL">
                                    <div class="boqw2y-5 bmNviT">
                                        <p class="boqw2y-6 cImJLk">Управление командой</p>
                                    </div>
                                    <img src={lend} class="boqw2y-7 kOXYsx"/>
                                </div>
                                <div class="highlight-section iNinLL">
                                    <div class="boqw2y-5 bmNviT">
                                        <p class="boqw2y-6 cImJLk">Отслежива-<br/>-ние исполни-<br/>-тельности</p>
                                    </div>
                                    <img src={shop} class="boqw2y-7 kOXYsx"/>
                                </div>
                                <div class="sc-1at08tb-0 dvjggh">
                                    <p class="aq5yv8-2 text-primary sc-1at08tb-1 hOIxww">от 1 команды до 10, от 2 проектов до 20. Задачи безграничны.</p>
                                    <div class="sc-1at08tb-2 dTkfsL">
                                        <a class="aq5yv8-11 sc-1at08tb-3 imJwJa" href="/tariffs">Смотреть тарифы</a>
                                        <div class="sc-1at08tb-4 bCzOGB">
                                            <p class="sc-1at08tb-5 fVZfWQ">от</p>
                                            <p class="sc-1at08tb-5 fVZfWQ">
                                                <strong>0 ₽ / </strong>
                                                мес
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <hr class="boqw2y-8 exJbmW"/>
                    <div class="container-main container-main">
                        <div class="react-reveal" style={{opacity: 0}}>
                            <section class="boqw2y-9 boYGvn">
                                <div class="supqvj-0 joQxiZ">
                                    <div class="supqvj-1 gMPMWc">
                                        <img src={money} class="supqvj-2 gMKTCb"/>
                                        <div class="supqvj-3 ekKjpe">
                                            <h3 class="supqvj-4 gbBOBl">Free</h3>
                                            <p class="supqvj-5 dzBeoo">Базовый тариф - и платить не надо!</p>
                                        </div>
                                    </div>
                                    <div class="supqvj-6 dzwkUn">
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Команды</p>
                                            <p class="supqvj-9 dCZMbw">1</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Проекты</p>
                                            <p class="supqvj-9 dCZMbw">2</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Участники</p>
                                            <p class="supqvj-9 dCZMbw">5</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Задачи</p>
                                            <p class="supqvj-9 dCZMbw">∞</p>
                                        </div>
                                    </div>
                                    <a class="supqvj-10 cUnnUk" href="/tariffs">Смотреть тарифы</a>
                                </div>
                                <div class="supqvj-0 joQxiZ">
                                    <div class="supqvj-1 gMPMWc">
                                        <img src={money} class="supqvj-2 gMKTCb"/>
                                        <div class="supqvj-3 ekKjpe">
                                            <h3 class="supqvj-4 gbBOBl">Pro</h3>
                                            <p class="supqvj-5 dzBeoo">Среднячок - достаточно для малого бизнеса</p>
                                        </div>
                                    </div>
                                    <div class="supqvj-6 dzwkUn">
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Команды</p>
                                            <p class="supqvj-9 dCZMbw">5</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Проекты</p>
                                            <p class="supqvj-9 dCZMbw">10</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Участники</p>
                                            <p class="supqvj-9 dCZMbw">65</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Задачи</p>
                                            <p class="supqvj-9 dCZMbw">∞</p>
                                        </div>
                                    </div>
                                    <a class="supqvj-10 cUnnUk" href="/tariffs">Смотреть тарифы</a>
                                </div>
                                <div class="supqvj-0 joQxiZ">
                                    <div class="supqvj-1 gMPMWc">
                                        <img src={money} class="supqvj-2 gMKTCb"/>
                                        <div class="supqvj-3 ekKjpe">
                                            <h3 class="supqvj-4 gbBOBl">Business</h3>
                                            <p class="supqvj-5 dzBeoo">Для крупных проектов</p>
                                        </div>
                                    </div>
                                    <div class="supqvj-6 dzwkUn">
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Команды</p>
                                            <p class="supqvj-9 dCZMbw">10</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Проекты</p>
                                            <p class="supqvj-9 dCZMbw">20</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Участники</p>
                                            <p class="supqvj-9 dCZMbw">∞</p>
                                        </div>
                                        <div class="supqvj-7 XvAHq">
                                            <p class="supqvj-8 gfawot">Задачи</p>
                                            <p class="supqvj-9 dCZMbw">∞</p>
                                        </div>
                                    </div>
                                    <a class="supqvj-10 cUnnUk" href="/tariffs">Смотреть тарифы</a>
                                </div>
                            </section>
                        </div>
                        <div class="react-reveal" style={{opacity: 0}}>
                            <div class="c1b5lb-0 klRRXJ">
                                <div class="c1b5lb-1 hEOnrU">
                                    <img src={rocket} class="c1b5lb-2 hEGwTn"/>
                                    <h4 class="c1b5lb-3 fbYZUO">оперативная помощь</h4>
                                    <h3 class="c1b5lb-4 gUjdUp">Поддержка 24/7</h3>
                                    <p class="aq5yv8-2 text-primary c1b5lb-5 erBGVQ">Поможем с установкой и настройкой ПО, решим почти любую проблему</p>
                                </div>
                                <img src={chat} class="c1b5lb-6 NfJaa"/>
                            </div>
                        </div>
                        <div class="react-reveal" style={{opacity: 0}}>
                            <div class="c1b5lb-0 klRRXJ">
                                <div class="c1b5lb-1 hEOnrU">
                                    <img src={seat} class="c1b5lb-2 hEGwTn"/>
                                    <h4 class="c1b5lb-3 fbYZUO">понятный интерфейс</h4>
                                    <h3 class="c1b5lb-4 gUjdUp">Удобный личный кабинет</h3>
                                    <p class="aq5yv8-2 text-primary c1b5lb-5 erBGVQ">Большое количество платёжных методов, современный интерфейс и лёгкое управление услугами</p>
                                </div>
                                <img src={chat} class="c1b5lb-6 NfKBu"/>
                            </div>
                        </div>
                    </div>
                    <div style={{marginBottom: '40px'}}></div>
                    <div class="container-main slxptp-0 footer-container">
                        <footer class="slxptp-1 card">
                            <div class="slxptp-2 header-layout">
                                <div class="slxptp-6 column-layout">
                                    <h3 class="slxptp-3 edwQMq">Voldrop Management</h3>
                                    <img src={mlogo} class="slxptp-4 eLlIuF"/>
                                    <p class="aq5yv8-2 text-primary slxptp-5 chYYQg">
                                        ИП Твардовский Дмитрий Игоревич<br/>
                                        ИНН 780737570563<br/>
                                        ОГРНИП -<br/>
                                        <br/>
                                    </p>
                                </div>
                                <div class="slxptp-7 QiieC">
                                    <p class="slxptp-15 duxJap">© 
                                    2024
                                    Voldrop</p>
                                </div>
                            </div>
                            <div class="slxptp-8 menu-item">
                                <div class="slxptp-9 section-container">
                                    <p class="slxptp-10 eHVPlU">Продукты</p>
                                    <ul class="slxptp-11 ifnQGB">
                                        <li class="slxptp-12 fBvvsa">
                                            <a class="slxptp-13 link-muted" href="/tariffs">TaskManager</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slxptp-9 section-container">
                                    <p class="slxptp-10 eHVPlU">Клиентам</p>
                                    <ul class="slxptp-11 ifnQGB">
                                        <li class="slxptp-12 fBvvsa">
                                            <a class="slxptp-13 link-muted" href="/terms">Условия использования</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slxptp-9 section-container">
                                    <p class="slxptp-10 eHVPlU">Прочее</p>
                                    <ul class="slxptp-11 ifnQGB">
                                        <li class="slxptp-12 fBvvsa">
                                            <a class="slxptp-13 link-muted" href="/contacts">Контакты</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slxptp-9 section-container">
                                    <p class="slxptp-10 eHVPlU">Соц. сети</p>
                                    <ul class="slxptp-11 ifnQGB">
                                        <li class="slxptp-12 fBvvsa">
                                            <a target="_blank" href="https://vk.com/voldrop" class="slxptp-13 link-muted">VK</a>
                                        </li>
                                        <li class="slxptp-12 fBvvsa">
                                            <a target="_blank" href="https://t.me/voldrop" class="slxptp-13 link-muted">Telegram</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="slxptp-14 mobile-navigation">
                                <p class="slxptp-15 duxJap">
                                    – <a href="/" target="_blank" class="slxptp-16 QFnLO"></a>
                                </p>
                                <p class="slxptp-15 duxJap">© 
                                2024
                                Voldrop</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
  );
};

export default Main;