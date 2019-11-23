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
import HeroSuit from '../Components/HeroSuit';
import SimpleCard from '../Components/SimpleCard';
import LoadingState from '../Components/LoadingState';
import ItemsCarousel from 'react-items-carousel';

import { fetchSuperhero, updateSuperhero, deleteSuperhero } from '../actions/SuperheroesActions';
import { deleteSuit } from '../actions/SuitsActions';
import { setChips } from '../actions/ChipsActions';
import { ChevronLeft, ChevronRight, X, Edit2 } from 'react-feather';

export default function HeroesDetailRoute() { 
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const [isEditHeroOpen, setEditHeroOpen] = useState(false);
	const [isDeleteHeroOpen, setDeleteHero] = useState(false);
	const [isDeleteSuitOpen, setDeleteSuit] = useState(false);
	const [suitId, setSuitId] = useState();
	const [activeSuit, setActiveSuit] = useState(0);
	const name = useFormInput('');
	const powers = useFormValue([]);
	const weather = useFormValue([]);
	const element = useFormValue('fuego');
	const isLoading = useSelector(state => state.Superheroes.isLoading);
	const isUpdating = useSelector(state => state.Superheroes.isUpdating);
	const superhero = useSelector(state => state.Superheroes.byId[id]);
	const defaultPowers = useSelector(state => state.Chips.powers);
	const defaultWeathers = useSelector(state => state.Chips.weathers);

	const options = [
		{ label: 'Fuego', value: 'fuego', default: true },
		{ label: 'Agua', value: 'agua' },
		{ label: 'Tierra', value: 'tierra' },
		{ label: 'Aire', value: 'aire' }
	]

	const Arrow = (isLeft) => {
		if (isLeft)
			return (
				<ChevronLeft
					className='clickable'
					size={38}
					color='#EF2626'
				/>
			);
		else
			return (
				<ChevronRight
					className='clickable'
					size={38}
					color='#EF2626'
				/>
			);
	}

	useEffect(() => {
		if(!superhero) {
			dispatch(fetchSuperhero(id))
		} else if (superhero && !isEditHeroOpen){
			name.onChange({target:{value:superhero.super_name}})
			powers.onChange(superhero.superpowers)
			weather.onChange(superhero.weather)
			element.onChange(superhero.element)
		}
	}, [superhero, isEditHeroOpen])

	const updateSup = async () => {
		let newData = {
			super_name: name.value,
			weather: weather.value,
			superpowers: powers.value,
			element: element.value
		}
		let result = await dispatch(updateSuperhero(superhero._id, newData))
		if(result) saveChips()
		setEditHeroOpen(false)
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

	const deleteSuperheroSuit = async () => {
		await dispatch(deleteSuit(suitId))
		await dispatch(fetchSuperhero(superhero._id))
		setDeleteSuit(false)
	}

	return (
		superhero ? (
			<div className="full-container flex column justify-content-space-between">
				<div className='flex row column-on-mobile align-items-center big-padding-top justify-content-space-between'>
					<div className='flex row align-items-center align-self-flex-start-on-mobile'>
						<div className='margin-right'>
							<PillBtn 
								text='REGRESAR'
								onClick={() => history.push('/')}
								left
							/>
						</div>
						<p className='huge-text no-margin'>{superhero.super_name}</p>
					</div>
					<div className='flex row align-items-center huge-margin-right margin-right-on-mobile align-self-flex-end-on-mobile'>
						<IconBtn 
							className='small-margin-right'
							icon='Edit2'
							onClick={() => setEditHeroOpen(true)}
						/>
						<IconBtn 
							background='#000'
							onClick={() => setDeleteHero(true)}
							icon='Trash2'
						/>
					</div>
				</div>
				<div className='flex column-on-mobile'>
					<div className='flex flex05 silhouette-container justify-content-center big-margin-horizontal'>
						{superhero.suits.length ? (
							<ItemsCarousel
								infiniteLoop={false}
								activeItemIndex={activeSuit}
								requestToChangeActive={(value) => setActiveSuit(value)}
								numberOfCards={1}
								slidesToScroll={1}
								rightChevron={Arrow()}
								leftChevron={Arrow(true)}
								outsideChevron
								chevronWidth={40}
							>
								{
									superhero.suits.map((item, index) =>
										<SimpleCard
											key={index}
											className='relative small-margin-vertical huge-margin-left small-padding-vertical silhouette-container flex justify-content-center width20'
										>
											<div className='full-height centered'>
												<img
													height={item.bearer_type === 4 ? '70%': `100%`}
													src={item.thumbnail}
												/>
												<div className='edit-btn'>
													<PillBtn
														className='small centered'
														text={
															<Edit2 color='white' size='21' />
														}
														background='#EF2626'
														left
														onClick={() => history.push('/edit-suit', { id: superhero._id, suitId: index })}
													/>
												</div>
												<div className='delete-btn'>
													<PillBtn
														className='small centered'
														text={
															<X color='white' size='21' />
														}
														background='#989898'
														onClick={() => {
															setSuitId(item._id)
															setDeleteSuit(true)
														}}
													/>
												</div>
											</div>
										</SimpleCard>
									)
								}
							</ItemsCarousel>
						) : (
							<div className='grey-bg flex flex1 align-items-center justify-content-center'>
								Este superhéroe no tiene trajes
							</div>
						)}
					</div>
					<div className='flex1 column padding-horizontal-on-mobile huge-margin-top-on-mobile'>
						<p className='big-text no-margin-top small-margin-bottom'>Poderes</p>
						<div className='flex'>
							{
								superhero.superpowers.map((item, index) =>
									<div 
										key={index}
										className='tag'
									>
										{item}
									</div>
								)
							}
						</div>
						<p className='big-text margin-top small-margin-bottom'>Clima</p>
						<div className='flex'>
							{
								superhero.weather.map((item, index) =>
									<div 
										key={index}
										className='tag'
									>
										{item}
									</div>
								)
							}
						</div>
						<p className='big-text margin-top small-margin-bottom'>Elemento</p>
						<div className='tag'>{superhero.element}</div>
						
					</div>
				</div>
				<PillBtn
					className='align-self-flex-end margin-bottom'
					text='NUEVO TRAJE'
					onClick={() => history.push('/create-suit', { id: superhero._id })}
				/>
				<CustomModal
					isOpen={isDeleteHeroOpen}
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
					isOpen={isDeleteSuitOpen}
					smallModal
					onRequestClose={() => setDeleteSuit(false)}
				>
					<div className='flex column full-height align-items-center justify-content-space-around'>
						<p className='huge-text no-margin'>ELIMINAR TRAJE</p>
						<p className='big-text no-margin'>¿Estás segura?</p>
						<div className='flex full-width justify-content-space-between'>
							<PillBtn
								className='flex02 align-self-flex-end'
								text='Cancelar'
								left
								onClick={() => setDeleteSuit(false)}
							/>
							<PillBtn
								className='flex02 align-self-flex-end'
								text={isLoading ? 'Borrando...' : 'Confirmar'}
								background='#000'
								onClick={() => deleteSuperheroSuit()}
							/>
						</div>
					</div>
				</CustomModal>
				<CustomModal
					isOpen={isEditHeroOpen}
					onRequestClose={() => setEditHeroOpen(false)}
				>
					<div className='flex column full-height align-items-center justify-content-space-around overflow-auto'>
						<p className='huge-text no-margin'>EDITAR</p>
						<div className='flex column full-width'>
							<div className='flex column-on-mobile align-items-center align-items-flex-start-on-mobile small-padding-horizontal-on-mobile padding-horizontal margin-bottom'>
								<p className='big-text no-margin-vertical small-margin-right flex02'>Nombre</p>
								<TextInput
									className='flex1 small-margin-left no-margin-on-mobile width85'
									placeholder='Nombre'
									{...name}
								/>
							</div>
							<div className='flex column-on-mobile align-items-center align-items-flex-start-on-mobile small-padding-horizontal-on-mobile padding-horizontal margin-bottom'>
								<p className='big-text no-margin-vertical small-margin-right flex02'>Poderes</p>
								<ChipsInput
									className='flex1'
									placeholder='Poderes' 
									blackBg={false}
									suggestions={defaultPowers}
									{...powers}
								/>
							</div>
							<div className='flex column-on-mobile align-items-center align-items-flex-start-on-mobile small-padding-horizontal-on-mobile padding-horizontal margin-bottom'>
								<p className='big-text no-margin-vertical small-margin-right flex02'>Clima</p>
								<ChipsInput
									className='flex1'
									placeholder='Clima'
									blackBg={false}
									suggestions={defaultWeathers}
									{...weather}
								/>
							</div>
							<div className='flex column-on-mobile align-items-center align-items-flex-start-on-mobile small-padding-horizontal-on-mobile padding-horizontal margin-bottom'>
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
						<div className='flex full-width justify-content-space-between'>
							<PillBtn
								className='flex02 align-self-flex-end margin-bottom'
								text='Cancelar'
								left
								background='#000'
								onClick={() => setEditHeroOpen(false)}
							/>
							<PillBtn
								className='flex02 align-self-flex-end margin-bottom'
								text={isUpdating ? 'Guardando...' : 'Confirmar'}
								onClick={() => updateSup()}
							/>
						</div>
					</div>
				</CustomModal>
			</div>
		) : (
			<LoadingState />
		)
	)	
}