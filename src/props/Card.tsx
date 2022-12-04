export interface ICard {
	cardTitle: string;
	children?: React.ReactNode;
}

export const Card:React.FC<ICard> = (props: ICard) => {
	return (
		<div className="row justify-content-center my-auto mt-5 mw-50">
			<div className="col-sm-6">
				<div className="card shadow">
					<div className="card-body">
						<h5 className="card-title">{props.cardTitle}</h5>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};
