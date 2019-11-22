import React, { 
	useState, 
	useEffect, 
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';

import { Link } from "react-router-dom";
import PillBtn from '../Components/PillBtn';
import IconBtn from '../Components/IconBtn';
import CustomModal from '../Components/CustomModal';
import TextInput from '../Components/TextInput';
import ChipsInput from '../Components/ChipsInput';
import RadioTabs from '../Components/RadioTabs';

import { fetchSuperhero, updateSuperhero, deleteSuperhero } from '../actions/SuperheroesActions';
import { setChips } from '../actions/ChipsActions';

export default function HeroesDetailRoute() { 
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const [isEditOpen, setEditOpen] = useState(false);
	const [isDeleteHero, setDeleteHero] = useState(false);
	const name = useFormInput('');
	const powers = useFormValue([]);
	const weather = useFormValue([]);
	const element = useFormValue('fuego');
	const isLoading = useSelector(state => state.Superheroes.isLoading)
	const isUpdating = useSelector(state => state.Superheroes.isUpdating)
	const superhero = useSelector(state => state.Superheroes.byId[id])
	const defaultPowers = useSelector(state => state.Chips.powers)
	const defaultWeathers = useSelector(state => state.Chips.weathers)

	const options = [
		{ label: 'Fuego', value: 'fuego', default: true },
		{ label: 'Agua', value: 'agua' },
		{ label: 'Tierra', value: 'tierra' },
		{ label: 'Aire', value: 'aire' }
	]

	useEffect(() => {
		if(!superhero) {
			dispatch(fetchSuperhero(id))
		} else if (superhero && !isEditOpen){
			name.onChange({target:{value:superhero.super_name}})
			powers.onChange(superhero.superpowers)
			weather.onChange(superhero.weather)
			element.onChange(superhero.element)
		}
	}, [superhero, isEditOpen])

	const updateSup = async () => {
		let newData = {
			super_name: name.value,
			weather: weather.value,
			superpowers: powers.value,
			element: element.value
		}
		let result = await dispatch(updateSuperhero(superhero._id, newData))
		if(result) saveChips()
		setEditOpen(false)
	}

	const saveChips = async () => {
		let newPowers = powers.value.filter(power => !defaultPowers.includes(power))
		let newWeathers = weather.value.filter(weather => !defaultWeathers.includes(weather))
		if(newPowers.length) await dispatch(setChips('powers', newPowers))
		if(newWeathers.length) await dispatch(setChips('weathers', newWeathers))
	}

	const deleteSup = async () => {
		await dispatch(deleteSuperhero(superhero._id))
		setDeleteHero(false)
		history.push('/')
	}

	return (
		superhero ? (
			<div className="full-container flex column justify-content-space-between">
				<div className='flex row align-items-center big-padding-vertical justify-content-space-between'>
					<div className='flex row align-items-center'>
						<div className='margin-right'>
							<PillBtn 
								text='REGRESAR'
								onClick={() => history.push('/')}
								left
							/>
						</div>
						<p className='huge-text no-margin'>{superhero.super_name}</p>
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
					onClick={() => history.push('/create-suit', { id: superhero._id })}
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
								text={isLoading ? 'Borrando...' : 'Confirmar'}
								background='#000'
								onClick={() => deleteSup()}
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
									suggestions={defaultPowers}
									{...powers}
								/>
							</div>
							<div className='flex align-items-center padding-horizontal'>
								<p className='big-text no-margin-vertical small-margin-right flex02'>Clima</p>
								<ChipsInput
									className='flex1'
									placeholder='Clima'
									blackBg={false}
									suggestions={defaultWeathers}
									{...weather}
								/>
							</div>
							<div className='flex align-items-center padding-horizontal margin-bottom'>
								<p className='big-text no-margin-vertical small-margin-right flex02'>Elemento</p>
								<RadioTabs 
									name='elements'
									className='white-bg flex1'
									options={options}
									selected={element.value}
									onChange={element.onChange}
								/>
							</div>
						</div>
						<PillBtn
							className='align-self-flex-end margin-bottom'
							text={isUpdating ? 'Guardando...' : 'Confirmar'}
							onClick={() => updateSup()}
						/>
					</div>
				</CustomModal>
			</div>
		) : (
			<div className='full-width loading-state'>loading...</div>
		)
	)	
}