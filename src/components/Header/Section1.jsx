import './Section.css'
const Hero = ({title, subtitle, subtitle1}) => {
  return (
    <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle1}</p>
    </>
  )
}

export default Hero