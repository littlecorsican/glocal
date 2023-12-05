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
            "title" : "umrah",
            "url" : "/umrah",
            "child" : []
          },
          {
            "title" : "tour",
            "url" : "/tour",
            "child" : [
              {
                "title" : "all tours",
                "url" : "/tour?category=TOURS",
              },
              {
                "title" : "inbound",
                "url" : "/tour?category=INBOUND",
              },
              {
                "title" : "outbound",
                "url" : "/tour?category=OUTBOUND",
              },
            ]
          },
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
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" style={{ fill:"#D68A2C" }}/></svg>
            </Link>
            <Link href="https://www.instagram.com/kakijalan.hq/">
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" style={{ fill:"#D68A2C" }} /></svg>
            </Link>
            <Link href="https://www.youtube.com/channel/UChSDB0lLb_AoZ-9pZDbBJxQ">
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" style={{ fill:"#D68A2C" }} /></svg>
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


