import type { INodeProperties } from 'n8n-workflow';

import * as create from './create.operation';
import * as getAll from './getAll.operation';

export { create, getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['item'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an item in an existing list',
				action: 'Create item',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get specific items in a list or list many items',
				action: 'Get many items',
			},
		],
		default: 'getAll',
	},

	...create.description,
	...getAll.description,
];
