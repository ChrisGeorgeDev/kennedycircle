import styles from './Section.module.css'

export default function DividerImg(props) {
    return (

        <section
        className="h-[90vh] relative"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 55.28%), url(${props.image})`, backgroundSize: "cover", backgroundPosition: `${props.position}`}}
      >
          <p className='caption'>caption</p>
          </section>
    )
}