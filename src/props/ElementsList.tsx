interface IElementsList {
	elements: string[];
}
export const ElementsList: React.FC<IElementsList> = (props: IElementsList) => {
	return (
		<ul className="list-group list-group-flush">
			{props.elements.map((element, index) => (
				<li key={index} className="list-group-item">
					{element}
				</li>
			))}
		</ul>
	);
};
