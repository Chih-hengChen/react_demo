// 递归中的递阶段
import { FiberNode } from './fiber';

// 进行比较，然后返回子fiberNode
export const beginWork = (node: FiberNode) => {
	return node.child;
};
