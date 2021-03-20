import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

const ItemCard = ({ data, index, page, setItemData, setItemOpen }) => {
    const Animate = (index) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 450 + index * 450,
        config: {
            duration: 450,
            easing: easings.easeCubic
        }
    })

    const ClickHandle = () => {
        setItemOpen(true)
        setItemData(data)
        window.scroll(0,0)
    }

    return (
        <animated.div className="page-card" style={Animate(index)} onClick={ClickHandle}>
            <div className="page-card-image" style={{backgroundImage: `url(${data.image})`}}>
                <h1>{data.type}</h1>
            </div>
            <h1>{data.header}</h1>
        </animated.div>
    )
}

export default ItemCard