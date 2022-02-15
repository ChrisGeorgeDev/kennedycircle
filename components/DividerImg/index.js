import styles from './Section.module.css'

export default function DividerImg(props) {
    return (

        <section
        className="h-screen"
        style={{ backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), url(${props.image})`, backgroundSize: "cover" }}
      >
          <p className='caption'>caption</p>
          </section>
    )
}