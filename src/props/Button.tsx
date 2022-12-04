export interface IButton{
	text: string;
	onClick: React.MouseEventHandler;
}

export const Button: React.FC<IButton> = (props: IButton) => {
	return (
		<button className="btn btn-primary" onClick={props.onClick}>
			{props.text}
		</button>
	)
}
