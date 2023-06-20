import * as React from 'react'
import '../Headercomponent.scss'
const Banner = (props: any) => {
  return (
    <div
      className="Navbars"
    >
      <a href="https://zelarsoft.com/" target="_blank">
        <img
          className="img1"
          src={`${props.siteabsUrl}/SiteAssets/Zelarlogo.png`}
          alt="Logo"
        ></img>
      </a>
      {/* <div className="imgscroll">
        <div className="profile">
          <img src={props.url} alt="Profilepic" />
          <div className="profiledetails">
            <p>{props.greet},</p>
            <p>{props.user}...</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Banner;