import { FiberNode } from './fiber';

// 递归中的归阶段
export const completeWork = (node: FiberNode) => {
	return node.return;
};
