import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const SplitText = ({ children }) => {
    const Animate = ( index ) => useSpring({
        from: {
            transform: `translate(-1rem)`,
            opacity: 0
        },
        to: {
            transform: `translate(0rem)`,
            opacity: 1
        },
        delay: 450 + index * 300,
        config: {
            duration: 450,
            easing: easings.easeCubic
        }
    })

    return children.map((item, index) => (
        <animated.h1 key={index} style={Animate(index)}>{item}</animated.h1>
    ))
}

export default SplitText