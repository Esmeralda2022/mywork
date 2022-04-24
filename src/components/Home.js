import { Container, Row ,Col} from 'react-bootstrap';
import { useTypewriter } from 'react-simple-typewriter';



export const Home = () => {
      const {text} = useTypewriter({
      words: ["Hi, i'am Esmeralda. I'am Front-End Developer!"],
      loop: 1, 
      delay: 60,
    
  });
     
return (
   
 <Container   className='containerhome' >
       <Row >
             <Col>
                <span className ='text2'>{text}</span>
                  <button
                    type="button"
                    className="btn bg-light text-dark homebutton"
                    onClick={()=>window.open("mailto:esmeraldafurriku93@gmail.com")}>Contact Me!</button>
             </Col>
       </Row>
 </Container>
  
  );
}
