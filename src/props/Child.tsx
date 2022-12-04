export interface ChildProps {
	color: string;
	onClick: () => void;
	children?: React.ReactNode;
}

// * 1: simple apply of ChildProps interface
export const Child = (props: ChildProps) => {
	return (
		<div>
			<h4>I'm Child and my color is:{props.color}</h4>
			<button onClick={props.onClick}>Click Me</button>
		</div>
	);
};

// different way to apply ChildProps interface to the React component
/*
	* 2: destructuring, just destruct property color from the ChildProps interface
	export const Child = ({ color }: ChildProps) => {
		return <div>I'm Child and my color is:{props.color}</div>;
	};
*/

// * 3: As specific React component and will receive props as ChildProps
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
	return (
		<div>
			<h4>I'm Child and my color is:{color}</h4>
			<button onClick={ onClick }>Click Me</button>
		</div>
	);
};
