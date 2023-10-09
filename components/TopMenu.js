import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

// https://revnology.gitlab-page.revnology.com.my/kakijalan/index.html

export default class TopMenu extends React.Component {
  constructor() {
      super();
      this.state = {
        menuItem : [
          {
            "title" : "Home",
            "url" : "/",
            "child" : []
          },
          {
            "title" : "tour",
            "url" : "/tour",
            "child" : []
          },
          // {
          //   "title" : "tour",
          //   "url" : "/tour",
          //   "child" : [
          //     {
          //       "title" : "all tours",
          //       "url" : "/tour?category=TOURS",
          //     },
          //     {
          //       "title" : "inbound",
          //       "url" : "/tour?category=TOURS:INBOUND",
          //     },
          //     {
          //       "title" : "outbound",
          //       "url" : "/tour?category=TOURS:OUTBOUND",
          //     },
          //   ]
          // },
          {
            "title" : "cruise",
            "url" : "/cruise",
            "child" : []
          },
          // {
          //   "title" : "umrah",
          //   "url" : "/umrah",
          //   "child" : []
          // },
          {
            "title" : "contact",
            "url" : "/contact",
            "child" : []
          },
          {
            "title" : "about",
            "url" : "/about",
            "child" : []
          },
        ],
        pathname : "",
      };
      this.menu_ul = React.createRef()
  }

  componentDidMount() {
    this.setState({
      pathname : window.location.pathname
    })
  }

  toggleMenu=()=>{
    let menu_ul_display = this.menu_ul.current.style.display
    console.log(menu_ul_display)
    if (menu_ul_display == "" || menu_ul_display == "none") {
      this.menu_ul.current.style.display = "block"
    } else {
      this.menu_ul.current.style.display = "none"
    }
  }

  render() {
    return (
      <>
        <div id="header_div" className="w-100" style={{zIndex: 10}}>
        <nav>
          <div className="logo">
            <Link href="/">
              <img  className="img-fluid" src="/images/glocaltravel.png" alt="Logo" />
            </Link>
          </div>
          <ul className="main-ul" ref={this.menu_ul} style={{  }} >
            {
              this.state.menuItem.map((value,index)=>{
                if (value.child.length == 0) {
                  return <li key={index}><Link id="header_nav_id" href={value.url} className={this.state.pathname == value.url ? "selectedPage" : ""} >{value.title}</Link></li>
                } else {
                  return (
                    <li id="header_tour_bar_id" key={index} className={`${this.state.pathname == value.url ? "selectedPage" : ""} expandable_li`} >
                    <input type="checkbox" id="products_checkbox" />
                    <label id="header_tour_id" htmlFor="products_checkbox">{value.title}</label>
                    <ul className="dropdown">
                      {value.child.map((childValue,childIndex)=>{ 
                        if (index == 0) {
                          return (
                            <li key={childIndex}><Link className="rounded-top" style={{boxShadow: '0px -1px 6px rgba(0, 0, 0, 0.25)'}} href={childValue.url}>{childValue.title}</Link></li>
                          )
                        } else if ((index+1) == value.child.length) {
                          return (
                            <li key={childIndex}><Link className="rounded-bottom" style={{boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)'}} href={childValue.url}>{childValue.title}</Link></li>
                          )
                        } else {
                          return (
                            <li key={childIndex}><Link style={{boxShadow: '1px 0 3px rgba(0, 0, 0, 0.25), -1px 0 3px rgba(0, 0, 0, 0.25)'}} href={childValue.url}>{childValue.title}</Link></li>
                          )
                        }
                      })}
                    </ul>
                    </li>
                  )
                }
                
              })
            }
          </ul>
          <div className="icon-header-grouped pe-4 pe-xl-0">
            <Link href="https://www.facebook.com/ckakijalan/" className="d-flex justify-content-center">
              <img  className="img-fluid" src="/icons/facebook.png" alt="facebook" />
            </Link>
            <Link href="https://www.instagram.com/kakijalan.hq/">
              <img  className="img-fluid" src="/icons/instagram.png" alt="instagram" />
            </Link>
            <Link href="https://www.youtube.com/channel/UChSDB0lLb_AoZ-9pZDbBJxQ">
              <img  className="img-fluid" src="/icons/youtube.png" alt="youtube" />
            </Link>
          </div>
          <div htmlFor="toggle_button" className="toggle_button me-4" id="nav_button" onClick={this.toggleMenu}>
            <span className="bar" />
            <span className="bar" style={{width: '75%'}} />
            <span className="bar" style={{width: '50%'}} />
          </div>
        </nav>
      </div>
      </>
    );
  }
}


