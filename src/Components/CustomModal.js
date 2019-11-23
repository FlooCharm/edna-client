import React, { 
	useState, 
	useEffect, 
} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default function CustomModal(props) {
	return (
		<Modal
			className={`modal ${props.smallModal ? 'small-size-modal': 'normal-size-modal'}`}
			overlayClassName='overlay'
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			ariaHideApp={false}
		>
			{props.children}
		</Modal>
	)
}

CustomModal.propTypes = {
	isOpen: PropTypes.bool,
	smallModal: PropTypes.bool,
	onRequestClose: PropTypes.func
}

CustomModal.defaultProps = {
	isOpen: false,
	smallModal: false,
	onRequestClose () {}
}