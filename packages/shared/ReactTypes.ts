export type ElementType = any;
export type Key = any;
export type Props = any;
export type Ref = any;
export type Type = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Props;
	__mask: string;
}

export type Action<State> = State | ((prevState: State) => State);