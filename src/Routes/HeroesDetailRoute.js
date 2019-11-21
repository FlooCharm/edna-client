import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";
import useFormInput from '../custom-hooks/useFormInput';

import { Link } from "react-router-dom";
import PillBtn from '../Components/PillBtn';
import IconBtn from '../Components/IconBtn';
import CustomModal from '../Components/CustomModal';
import TextInput from '../Components/TextInput';
import ChipsInput from '../Components/ChipsInput';
import RadioTabs from '../Components/RadioTabs';

export default function HeroesDetailRoute() { 
	
	const history = useHistory();
	const [isEditOpen, setEditOpen] = useState(false);
	const [isDeleteHero, setDeleteHero] = useState(false);
	const name = useFormInput('');

	return (
		<div className="full-container flex column justify-content-space-between">
			<div className='flex row align-items-center big-padding-vertical justify-content-space-between'>
				<div className='flex row align-items-center'>
					<div className='margin-right'>
						<PillBtn 
							text='REGRESAR'
							onClick={() => history.push('/heroes')}
							left
						/>
					</div>
					<p className='huge-text no-margin'>Some Cool Hero Name</p>
				</div>
				<div className='flex row align-items-center huge-margin-right'>
					<IconBtn 
						className='small-margin-right'
						icon='Edit2'
						onClick={() => setEditOpen(true)}
					/>
					<IconBtn 
						background='#000'
						onClick={() => setDeleteHero(true)}
						icon='Trash2'
					/>
				</div>
			</div>
			<PillBtn
				className='align-self-flex-end big-margin-bottom'
				text='NUEVO TRAJE'
				onClick={() => history.push('/create-suit')}
			/>
			<CustomModal
				isOpen={isDeleteHero}
				smallModal
				onRequestClose={() => setDeleteHero(false)}
			>
				<div className='flex column full-height align-items-center justify-content-space-around'>
					<p className='huge-text no-margin'>ELIMINAR SUPERHÉROE</p>
					<p className='big-text no-margin'>¿Estás segura?</p>
					<div className='flex full-width justify-content-space-between'>
						<PillBtn
							className='flex02 align-self-flex-end'
							text='Cancelar'
							left
							onClick={() => setDeleteHero(false)}
						/>
						<PillBtn
							className='flex02 align-self-flex-end'
							text='Confirmar'
							background='#000'
							onClick={() => setDeleteHero(false)}
						/>
					</div>
				</div>
			</CustomModal>
			<CustomModal
				isOpen={isEditOpen}
				onRequestClose={() => setEditOpen(false)}
				contentLabel="Example Modal"
			>
				<div className='flex column full-height align-items-center justify-content-space-around'>
					<p className='huge-text no-margin'>EDITAR</p>
					<div className='flex column full-width'>
						<div className='flex align-items-center padding-horizontal margin-bottom'>
							<p className='big-text no-margin-vertical small-margin-right flex02'>Nombre</p>
							<TextInput
								className='flex1 small-margin-left'
								placeholder='Nombre'
								{...name}
							/>
						</div>
						<div className='flex align-items-center padding-horizontal margin-bottom'>
							<p className='big-text no-margin-vertical small-margin-right flex02'>Poderes</p>
							<ChipsInput
								className='flex1'
								placeholder='Poderes' 
								blackBg={false}
							/>
						</div>
						<div className='flex align-items-center padding-horizontal'>
							<p className='big-text no-margin-vertical small-margin-right flex02'>Clima</p>
							<ChipsInput
								className='flex1'
								placeholder='Clima'
								blackBg={false}
							/>
						</div>
						<div className='flex align-items-center padding-horizontal margin-bottom'>
							<p className='big-text no-margin-vertical small-margin-right flex02'>Elemento</p>
							<RadioTabs 
								className='white-bg flex1'
							/>
						</div>
					</div>
					<PillBtn
						className='align-self-flex-end margin-bottom'
						text='Confirmar'
						onClick={() => setEditOpen(false)}
					/>
				</div>
			</CustomModal>
		</div>
	)	
}