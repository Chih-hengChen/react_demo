import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mask: 'EricChen'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let ref: Ref = null;
	let key: Key = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'ref' && val !== undefined) {
			ref = val;
			continue;
		}
		if (prop === 'key' && val !== undefined) {
			key = '' + val;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let ref: Ref = null;
	let key: Key = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'ref' && val !== undefined) {
			ref = val;
			continue;
		}
		if (prop === 'key' && val !== undefined) {
			key = '' + val;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};
