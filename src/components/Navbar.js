import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/logo.svg'

//separate Component with {useState}
// export const toggleNavItem = () => {
//     const [item, setItem] = useState('landing')
//     item !== 'work' ? setItem('work') : setItem('info')
//     // this.setState({
//     //     navBarActiveItem: this.state.navBarActiveItem !== 'work' ? 'work' : 'info'
//     // })
// }

const Navbar = class extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
            item: 'landing'
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: 'is-active',
                    })
                    : this.setState({
                        navBarActiveClass: '',
                    })
            }
        )
    }

    toggleNavItem = () => {

        this.state.item !== 'work'
            ? this.setState({
                item: 'work'
            })
            : this.setState({
                item: 'info'
            })
        // this.setState({
        //     navBarActiveItem: this.state.navBarActiveItem !== 'work' ? 'work' : 'info'
        // })
    }

    render () {
        return (
            <nav
                role="navigation"
                aria-label="main-navigation"
            // style={{
            //     backgroundColor: "transparent",
            // }}
            >
                <div>
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            {/* <img src={studioji} alt="Kaldi" style={{ width: '88px' }} /> */}
                            StudioJI
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>

                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >

                        <div className="navbar-start"
                        // onClick={() => this.toggleNavItem()}
                        >
                            <Link className="navbar-item"
                                onClick={() => this.toggleNavItem()}
                                to={this.state.item !== 'work' ? '/work' : '/info'}
                            >
                                {this.state.item !== 'work' ? 'Work' : 'Info'}
                            </Link>
                            {/* <Link className="navbar-item" to="/work">
                                Work
                            </Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
