import './App.css'
import Accordion from './components/Accordion'
import AccordionController from './components/AccordionController'

function App() {
  return (
    <>
			{/* These Accordions can be opened independently */}
      <Accordion>
				<Accordion.Summary>Title 1</Accordion.Summary>
				<Accordion.Content>Hello 1</Accordion.Content>
			</Accordion>
      <Accordion opened>
				<Accordion.Summary>Title 2</Accordion.Summary>
				<Accordion.Content>Hello 2</Accordion.Content>
			</Accordion>
			<Accordion opened>
				<Accordion.Summary>Title 3</Accordion.Summary>
				<Accordion.Content>Hello 3</Accordion.Content>
			</Accordion>

			<div className='controller-wrapper'>
				<AccordionController>
					{/* Only one accordion can be opened at any given time */}
					<Accordion>
						<Accordion.Summary>Title 4</Accordion.Summary>
						<Accordion.Content>Hello 4</Accordion.Content>
					</Accordion>
					<Accordion opened>
						<Accordion.Summary>Title 5</Accordion.Summary>
						<Accordion.Content>Hello 5</Accordion.Content>
					</Accordion>
					<Accordion opened>
						<Accordion.Summary><h2>Title 6</h2></Accordion.Summary>
						<Accordion.Content>
							<ul>
								<li>Hello</li>
								<li>World!</li>
								<li>6</li>
							</ul>
						</Accordion.Content>
					</Accordion>
				</AccordionController>
			</div>
    </>
  )
}

export default App
