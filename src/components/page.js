import { useState, useEffect, lazy, Suspense } from 'react'
import ItemCard from "./ItemCard/itemCard"
import NavBar from "./NavBar/nav"
const ItemPage = lazy(() => import('./itemPage'))

const Page = ({ pages, page }) => {
    
  const [itemOpen, setItemOpen] = useState(false)
  const [itemData, setItemData] = useState({})


    useEffect(() => {
        fetch("https://mindfull-3939e-default-rtdb.firebaseio.com/.json")
            .then(res => res.json())
            .then((out) => {
            console.log('Checkout this JSON! ', out);
            })
    }, [])

    const data = [
        {
            header: "5 minute meditation you can do anywhere",
            image: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
            type: "video",
            url: "https://www.youtube.com/embed/inpok4MKVLM",
            content: ["In just 5 minutes you can reset your day in a positive way."],
            source: "https://www.youtube.com/watch?v=inpok4MKVLM"
        },
        {
            header: "5 minute meditation you can do anywhere",
            image: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
            type: "video",
            url: "https://www.youtube.com/embed/inpok4MKVLM",
            content: ["In just 5 minutes you can reset your day in a positive way."],
            source: "https://www.youtube.com/watch?v=inpok4MKVLM"
        },
        {
            header: "5 minute meditation you can do anywhere",
            image: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
            type: "video",
            url: "https://www.youtube.com/embed/inpok4MKVLM",
            content: ["In just 5 minutes you can reset your day in a positive way."],
            source: "https://www.youtube.com/watch?v=inpok4MKVLM"
        },
        {
            header: "5 minute meditation you can do anywhere",
            image: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
            type: "video",
            url: "https://www.youtube.com/embed/inpok4MKVLM",
            content: ["In just 5 minutes you can reset your day in a positive way."],
            source: "https://www.youtube.com/watch?v=inpok4MKVLM"
        },
        {
            header: "5 minute meditation you can do anywhere",
            image: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
            type: "video",
            url: "https://www.youtube.com/embed/inpok4MKVLM",
            content: ["In just 5 minutes you can reset your day in a positive way."],
            source: "https://www.youtube.com/watch?v=inpok4MKVLM"
        },
    ]

    const style={
        overflow: 'hidden'
    }

    return [
        <section className="page" style={(itemOpen)?style:null}>
            <NavBar pages={pages} page={page}/>
            <h1>{page}</h1>
            <div className="page-content">
                {data.map((item, index) => (
                    <ItemCard
                        data = {item}
                        index = {index}
                        page = {page}
                        setItemData={setItemData}
                        setItemOpen={setItemOpen}
                    />
                ))}
            </div>
        </section>,
        <Suspense fallback={<div></div>}>
            <ItemPage data={itemData} setItemOpen={setItemOpen} itemOpen={itemOpen}/>
        </Suspense>
    ]
}

export default Page