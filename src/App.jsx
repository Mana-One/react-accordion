import './App.css'
import Accordion from './components/Accordion'
import AccordionGroup from './components/AccordionGroup'

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
				<AccordionGroup groupName='group1'>
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
				</AccordionGroup>
			</div>
		</>
	)
}

export default App
