import React, { useState } from 'react'
import items from './Data'
import Category from './Category'
import Menu from './Menu'
import './index.css'
function App() {

    const [menuItems, setMenu] = useState(items)
    // const [categories, setCategories] = useState([])

    const filterItem = (category) => {
        if (category === 'all') {
            setMenu(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenu(newItems)
    }
    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our Menu</h2>
                    <div className='underline'></div>
                </div>
                <Category filterItem={filterItem} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App