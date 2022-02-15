import styles from './Section.module.css'

export default function SectionFull(props) {
    return (
    <section tabIndex="0" id={`${props.anchor}`} className={`section ${props.contrast} ring-0 w-full`}>
        
        {props.children}
     
    </section>
    )
}