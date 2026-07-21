import type { AllEntities } from 'n8n-workflow';

type NodeMap = {
	file: 'upload';
	item: 'create' | 'getAll';
	list: 'get' | 'getAll';
};

export type MicrosoftSharePointType = AllEntities<NodeMap>;
