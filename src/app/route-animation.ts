import { transition, trigger, query, style, animate } from '@angular/animations'

export const routerTransition = trigger( 'myAnimation', [
	transition( '* => *', [
		query(
			':enter',
			[style( { opacity: 0 } )],
			{ optional: true }
		),
		query(
			':leave',
			[style( { opacity: 1, filter: 'grayscale(100%)' } ), animate( '0.5s', style( { opacity: 0 } ) )],
			{ optional: true }
		),
		query(
			':enter',
			[style( { opacity: 0 } ), animate( '0.5s', style( { opacity: 1 } ) )],
			{ optional: true }
		)
	] )
] )