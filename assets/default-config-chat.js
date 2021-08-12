/* eslint-disable */
export default  {
	toLoad: [],
	placeholder: 'Digite sua mensagem',
	colors: {
		header: {
			bg: '#1e2c51',
			text: '#fff'
		},
		message: {
			myself: {
				bg: '#fff',
				text: '#bdb8b8'
			},
			others: {
				bg: '#1e2c51',
				text: '#fff'
			},
			messagesDisplay: {
				bg: '#f7f3f3'
			}
		},
		submitIcon: '#1e2c51',
		submitImageIcon: '#1e2c51',
	},
	borderStyle: {
		topLeft: "10px",
		topRight: "10px",
		bottomLeft: "10px",
		bottomRight: "10px",
	},

	submitIconSize: 25,
	scrollBottom: {
		messageSent: true,
		messageReceived: false
	},
	timestampConfig: {   
		format: 'HH:mm',
		relative: false
	},
	profilePictureConfig: {
		others: false,
		myself: false,
		styles: {
			width: '30px',
			height: '30px',
			borderRadius: '50%'
		}
	},
}