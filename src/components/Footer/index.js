import React from 'react'
import { Link } from "gatsby"
import './style.scss'

class Footer extends React.Component {

    render () {

        return (
            <div>
                <div className="footer_last">
                    <Link className="footer_home" to="/">HOME</Link>
                    <p className="copyright__in-footer">Copyright - R-BLOG. 2019-2020 All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footer