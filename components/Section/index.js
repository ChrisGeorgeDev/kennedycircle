import styles from './Section.module.css'

export default function Section(props) {
    return (
    <section  id={`${props.anchor}`} className={`section ${props.contrast} ring-0 w-full`}>
        <div tabIndex="0" className="container mx-auto ">
        {props.children}
        </div>
    </section>
    )
}