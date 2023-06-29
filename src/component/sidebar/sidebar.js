import React, { useState } from 'react';
import './sidebar.css'
import headerimg from "../../assets/images/header.png"
import chart from "../../assets/images/chart.png"
import bookimg from "../../assets/images/Bookmark_red.svg"
import cargetleft from "../../assets/images/CaretLeft.svg"
import cargetright from "../../assets/images/Caretright.svg"
import megazine from "../../assets/images/magazine.svg"
import bookmarkgreen from "../../assets/images/Bookmark_green.svg"
import bookblue from "../../assets/images/Bookmark_blue.svg"
import bookwhite from "../../assets/images/Bookmark_white.svg"
import icmenu from "../../assets/images/icmenu.svg"
import note from "../../assets/images/note.svg"

function Sidebar() {

    const [titles] = useState([
        {
            title: 'Tổng quan hoạt động'
        },
        {
            title: 'Báo cáo giáo viên'
        },
        {
            title: 'Báo cáo học viên'
        }
    ])

    const [bntPaginate] = useState([
        {
            img: cargetleft
        },
        {
            img: cargetright
        }
    ])

    const [nameExam] = useState([
        {
            icon: note,
            title: "Ngân hàng đề thi giáo viên",
            img: cargetright
        },
        {
            icon: note,
            title: "Ngân hàng đề thi I Test",
            img: cargetright
        }
    ])
    const [blockTableElement] = useState([{
        title: "Nguồn",
        text: "SL tài khoản"
    },
    {
        title: "DTP",
        text: "1000"
    },
    {
        title: "Tự do",
        text: "600"
    },
    {
        title: "Tổng cộng",
        text: "1600"
    }
    ])

    const [listmenuBook] = useState([
        {
            img: megazine,
            title: 'Sách Giáo Khoa',
            title2: 'Báo cáo giáo viên',
            title3: 'Báo cáo học viên'
        },
    ])

    const [listBook] = useState([
        {
            img: bookimg,
            title: "Tiếng Anh 3 Extra and Friends - Endterm 2.3",
            use: 16
        },
        {
            img: bookblue,
            title: "Tiếng Anh 3 Extra and Friends - Endterm 2.3",
            use: 16
        },
        {
            img: bookmarkgreen,
            title: "Tiếng Anh 3 Extra and Friends - Endterm 2.3",
            use: 16
        },
        {
            img: bookwhite,
            title: "Tiếng Anh 3 Extra and Friends - Endterm 2.3",
            use: 16
        },
        {
            img: bookwhite,
            title: "Tiếng Anh 3 Extra and Friends - Endterm 2.3",
            use: 16
        },
    ])

    function handlerclicj() {
        alert('Click')
    }

    return (
        <div className='admin'>
            <div className='side-bar'>
                <header>
                    <img src={headerimg}></img>
                </header>
                <div className='block-menu-side-bar'>
                    <div className='title-side-bar'>
                        <div className='logo-img'>
                            <img src={icmenu} ></img>
                        </div>
                        <p >Tổng quan</p>
                    </div>
                    <div className='menu-sidebar'>
                        {nameExam.map((nameE, index) => (
                            <div className='menu-sidear-item' key={index} >
                                <div className='icon-text-flex'>
                                    <img src={nameE.icon}></img>
                                    <a href='' className='title-menu-link'>{nameE.title} </a>
                                </div>
                                <img src={nameE.img}></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='head-menu'>
                <header>
                    <h3 >TỔNG QUAN</h3>
                </header>
                <div className='content'>
                    <div className='menu-content' >
                        {titles.map((item, index) => (
                            <a key={index} href='' className='menu-content-list' >{item.title}</a>
                        ))}
                    </div>
                    <div className='content-blocks'>
                        <div className='content-funct'>
                            <div className='content-title'>
                                <div>Báo cáo tỷ trọng tài khoản giáo viên theo nguồn</div>
                                <div >Tổng tài khoản: 21,000 tài khoản(18,000 DTP) | 3.000 tự do </div>
                            </div>
                            <div className='btn-content-menu-bar'>
                                <div className='content-calender-element'>
                                    30/05/2023
                                </div>
                                <div className='content-calender-element'>
                                    30/05/2023
                                </div>
                                <div className='btn-back'>
                                    <button>Đăt Lại</button>
                                </div>
                                <div className='btn-result'>
                                    <button onClick={handlerclicj} className='btn-item-result' >Áp Dụng</button>
                                </div>
                            </div>
                        </div>
                        <div className='content-block-grid'>
                            <div className='content-chart'>
                                <div className='content-chart-title'>
                                    <div>Tỷ trọng tài khoản giáo viên theo nguồn</div>
                                </div>
                                <div className='img-chart'>
                                    <img src={chart} ></img>
                                </div>
                                <div className='chart-detail' >
                                    <div className='chart-detail-flex'>
                                        <div className='circle-detail-flex-blue'></div>
                                        <div>Tự Do</div>
                                    </div>
                                    <div className='chart-detail-flex' >
                                        <div className='circle-detail-flex-orange'></div>
                                        <div>DTP</div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-table'>
                                {blockTableElement.map((blocktable, index) => (
                                    <div key={index} >
                                        <div >{blocktable.title}</div>
                                        <div >{blocktable.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className='link-detail' >
                            <a href='' >Xem chi tiết </a>
                        </p>
                    </div>
                    <div className='content-grid'>
                        <div className='block-exam-favourite'>
                            <div className='block-grid-detail-exam-favourite'>
                                <h4>Top 10 đề thi được yêu thích trong 30 ngày</h4>
                                <div className='list-menu-item' >
                                    <div className='bground-menu-list'>
                                        <img src={megazine}></img>
                                        <div>Sách Giáo Khoa</div>
                                    </div>
                                    <div >Sách Bổ Trợ</div>
                                    <div >Bài Thi Quốc Tế</div>
                                </div>
                                <div className='block-list-book-item'>
                                    <div className='info-title'>
                                        <div >
                                            Tên đề thi
                                        </div>
                                        <div >
                                            Lượt dùng
                                        </div>
                                    </div>
                                    <div className='list-exam'>
                                        {listBook.map((data, index) => (
                                            <div className='list-book-element'>
                                                <div className='name-book-item' >
                                                    <img src={data.img}></img>
                                                    <div>
                                                        {data.title}
                                                    </div>
                                                </div>
                                                <div >
                                                    {data.use}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='btn-paginate' >
                                    {bntPaginate.map((btn, index) => (
                                        <button className='btn-next-page' key={index} >
                                            <img src={btn.img}></img>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='block-grid-detail-exam-favourite'>
                                <h4>Top 10 đề thi được yêu thích trong 30 ngày</h4>
                                {listmenuBook.map((data, index) => (
                                    <div className='list-menu-item' key={index} >
                                        <div className='bground-menu-list'>
                                            <img src={data.img}></img>
                                            <div>{data.title}</div>
                                        </div>
                                        <div >{data.title2}</div>
                                        <div >{data.title3}</div>
                                    </div>
                                ))}
                                <div className='block-list-book-item'>
                                    <div className='info-title'>
                                        <div >
                                            Tên đề thi
                                        </div>
                                        <div >
                                            Lượt dùng
                                        </div>
                                    </div>
                                    <div className='list-exam'>
                                        {listBook.map((data, index) => (
                                            <div className='list-book-element'>
                                                <div className='name-book-item' >
                                                    <img src={data.img}></img>
                                                    <div >
                                                        {data.title}
                                                    </div>
                                                </div>
                                                <div >
                                                    {data.use}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='btn-paginate' >
                                    {bntPaginate.map((btn, index) => (
                                        <button className='btn-next-page' key={index} >
                                            <img src={btn.img}></img>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;