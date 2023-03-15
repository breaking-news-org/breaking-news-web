import React, { useState } from 'react'
import { hero } from '../../../defaultData'

const Hero = () => {
  const [items, setItems] = useState(hero)
  return (
    <>
        <section className="hero">
            <div className="container">
                {items}
            </div>
        </section>
    </>
  )
}

export default Hero