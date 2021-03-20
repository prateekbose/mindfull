import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const NavBar = ({ pages, page }) => {
    const LinksAnimate = ( index ) => useSpring({
        from: {
            transform: `translate(-1rem)`,
            opacity: 0
        },
        to: {
            transform: `translate(0rem)`,
            opacity: 1
        },
        delay: 450 + 300 * index,
        config: {
            duration: 450,
            easing: easings.easeCubic
        }
    })

    const ClickHandle = ( pageName ) => {
        window.location.href = `${pageName}`
        // window.history.pushState({}, pageName, `./${pageName}`)
    }

    return (
        <nav>
            <h1>mindfull</h1>
            <ul>
                {pages.map((item, index) => (
                    <animated.li key={index} style={LinksAnimate(index)} className={`${page===item?'active':''}`} onClick={() => ClickHandle(item)}>{item}</animated.li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar