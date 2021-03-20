import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import { useState, useEffect } from 'react'

const ItemPage = ({ data, setItemOpen, itemOpen }) => {

    const [video, setVideo] = useState(null)

    useEffect(() => {
        if(itemOpen){
            if(data.type === "video"){
                setVideo(<iframe src={data.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
            }
        }
    }, [itemOpen])

    const Animate = (index) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: (itemOpen)?1:0
        },
        delay: 450 + index * 450,
        config: {
            duration: 450,
            easing: easings.easeCubic
        }
    })

    const PageAnimate = () => useSpring({
        from: {
            transform: `translate(-100vw)`
        },
        to: {
            transform: `translate(${itemOpen?'0vw':'-100vw'})`
        },
        delay: 300,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    const ClickHandle = () => {
        setItemOpen(false)
    }

    const SourceOpen = () => {
        window.open(data.source)
    }

    return (
        <animated.section className="item" style={PageAnimate()}>
            <animated.nav style={Animate(0)}>
                <h1 onClick={() => ClickHandle()}>close</h1>
            </animated.nav>
            <div>
                <animated.h1 style={Animate(1)}>{itemOpen?data.header:''}</animated.h1>
                <animated.div className="content-preview" style={Animate(2)}>{video}</animated.div>
                <animated.p style={Animate(3)}>{itemOpen?data.content:''}</animated.p>
                <animated.button style={Animate(4)} onClick={() => SourceOpen()}>Link to Resource</animated.button>
            </div>
        </animated.section>
    )

}

export default ItemPage