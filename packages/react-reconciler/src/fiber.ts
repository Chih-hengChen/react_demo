import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTag';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
	type: any;
	tag: WorkTag;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	child: FiberNode | null;
	sibling: FiberNode | null;
	index: number;

	pendingProps: Props;
	memoizedProps: Props | null;

	alternate: FiberNode | null;
	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;

		// 构成树状结构
		this.return = null;
		this.child = null;
		this.sibling = null;
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps;
		this.memoizedProps = null;

		this.alternate = null;
		this.flags = NoFlags;
	}
}
