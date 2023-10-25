// FlipCoin.js 

import React, { Component } from 'react'
import Coin from './Coin'

class FlipCoin extends Component { 
	static defaultProps = { 
		coins: [ 
			// Sides of the coin 
			{ 
				side: 'head', 
				imgSrc: 
'https://en.numista.com/catalogue/photos/inde/3178-original.jpg'

			}, 
			{ 
				side: 'tail', 
				imgSrc: 
'https://qph.cf2.quoracdn.net/main-qimg-e0e0099a4e81c40def6da0742c9201b5-lq'
			} 
		] 
	} 

	constructor(props) { 
		super(props) 
		// Responsible to render current updated coin face 
		this.state = { 
			// Track total number of flips 
			currFace: null, 
			totalFlips: 0, 
			heads: 0 
		} 
		// Binding context of this keyword 
		this.handleClick = this.handleClick.bind(this) 
	} 

	// Function takes array of different faces of a coin 
	// and return a random chosen single face 
	choice(arr) { 
		const randomIdx = Math.floor(Math.random() * arr.length) 
		return arr[randomIdx] 
	} 

	// Function responsible to update the states 
	// according to users interactions 
	flipCoin() { 
		const newFace = this.choice(this.props.coins) 
		this.setState(curState => { 
			const heads = curState.heads + 
				(newFace.side === 'head' ? 1 : 0) 
			return { 
				currFace: newFace, 
				totalFlips: curState.totalFlips + 1, 
				heads: heads 
			} 
		}) 
	} 
	handleClick() { 
		this.flipCoin() 
	} 
	render() { 
		const { currFace, totalFlips, heads } = this.state 
		return ( 
			<div> 
				<h2>Let's flip a coin</h2> 
				{/* If current face exist then show current face */} 
				{currFace && <Coin info={currFace} />} 
				{/* Button to flip the coin */} 
				<button onClick={this.handleClick}>Flip Me!</button> 
				<p> 
					Out of {totalFlips} flips, there have been {heads} heads 
					and {totalFlips - heads} tails 
				</p> 
			</div> 
		) 
	} 
} 

export default FlipCoin
