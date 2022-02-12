import styles from './Section.module.css'

export default function Section(props) {
    return (
    <section tabIndex="0" id={`${props.anchor}`} className={`section ${props.contrast} ring-0 w-full`}>
        <div className="container mx-auto ">
        {props.children}
        </div>
    </section>
    )
}