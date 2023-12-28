import Section1 from './components/Header/Section1'
import Section2 from './components/Article/Section2'
import Section3 from './components/Footer/Section3'
import Button from './components/Button/Btn'
import './App.css'

function App() {
 

  return (
    <>
    <header>
    <Section1 title={'Title'} subtitle={'Some about that'} subtitle1={'in two lines'} />
    <Button btn={"white"} text={'Button'}/>
    </header>

    <article>
    <Section2 title={'Portfolio'} subtitle={'Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.'} />
    </article>

    <footer>
      <Section3 />
    </footer>
    </>
  )
}

export default App
