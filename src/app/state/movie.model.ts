import { ID } from '@datorama/akita';

export interface Movie
{
	id: ID
	key: string
	name: string
	description: string
	genres: string[]
	rate: number
	length: string
	img: string
}
