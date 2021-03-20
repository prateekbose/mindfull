import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import SplitText from '../SplitText/splitText'

const LandingPage = () => {

    const Animate = ( index ) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 450 * index,
        config: {
            duration: 450,
            easing: easings.easeCubic
        }
    })

    const ClickHandler = () => {
        localStorage.setItem('showLanding', false)
        window.location.reload()
    }

    return (
        <section className="landing">
            <animated.h1 style={Animate(2)}>mindfull</animated.h1>
            <div className="content">
                <div className="header">
                    <SplitText>{["Stress Less.", "Breath More.", "Live More."]}</SplitText>
                </div>
                <animated.button style={Animate(4)} onClick={ClickHandler}>Start your journey</animated.button>
            </div>
        </section>
    )
}

export default LandingPage