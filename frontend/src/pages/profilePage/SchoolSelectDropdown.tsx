import Select, { StylesConfig } from 'react-select'
import { useState } from 'react'

type DropdownItemType = {
	value: string
	label: string
}

const SchoolSelectDropdown = () => {
	const [schoolsList] = useState<DropdownItemType[]>([
		{ value: '', label: 'Andreja Eglīša Ļaudonas pamatskola' },
		{ value: '', label: 'Barkavas pamatskola' },
		{ value: '', label: 'Bērzaunes pamatskola' },
		{ value: '', label: 'Cesvaines vidusskola' },
		{ value: '', label: 'Degumnieku pamatskola' },
		{ value: '', label: 'Dzelzavas pamatskola' },
		{ value: '', label: 'Dzelzavas speciālā pamatskola' },
		{ value: '', label: 'Ērgļu vidusskola' },
		{ value: '', label: 'Kusas pamatskola' },
		{ value: '', label: 'Lazdonas pamatskola' },
		{ value: '', label: 'Liezēres pamatskola' },
		{ value: '', label: 'Lubānas vidusskola' },
		{ value: '', label: 'Madonas pilsētas vidusskola' },
		{ value: '', label: 'Madonas Valsts ģimnāzija' },
		{ value: '', label: 'Praulienas pamatskola' },
	])

	return (
		<div className="z-10 w-full">
			<Select
				menuPlacement="top"
				placeholder={'Izvēlies'}
				options={schoolsList}
				styles={{
					option: (base) => ({
						...base,
						background: '#2e2f33',
						color: '#e5e5e0',
						cursor: 'pointer',
						borderBottom: '1px solid #3e4547',
						':hover': {
							background: '#3e4547',
							borderRadius: '8px',
						},
					}),
					container: (base) => ({
						...base,
						width: 'full',
						backgroundColor: 'transperent',
					}),
					valueContainer: (base) => ({
						...base,
						backgroundColor: '#3e4547',
						color: '#e5e5e0',
						border: 'none',
						outline: 'none',
					}),
					input: (base) => ({
						...base,
						color: '#c7cbc2',
						borderColor: '#e5e5e0',
						outline: 'none',
					}),
					placeholder: (base) => ({
						...base,
						color: '#c7cbc2',
					}),
					control: (base) => ({
						...base,
						border: 'none',
						boxShadow: 'none',
						borderRadius: '8px',
						backgroundColor: '#2e2f33',
						overflow: 'hidden',
						color: '#78877b',
					}),
					indicatorSeparator: (base) => ({
						...base,
						backgroundColor: '#78877b',
					}),
					indicatorsContainer: (base) => ({
						...base,
						backgroundColor: '#3e4547',
					}),
					dropdownIndicator: (base) => ({
						...base,
					}),
					singleValue: (base) => ({
						...base,
						color: '#e5e5e0',
					}),
					menu: (base) => {
						const boxShadow = '0 3px 10px rgb(100,100,100,0.5)'
						return {
							...base,
							backgroundColor: '#2e2f33',
							boxShadow: boxShadow,
							WebkitBoxShadow: boxShadow,
							MozBoxShadow: boxShadow,
							border: '1px solid #35373b',
							borderRadius: '8px',
						}
					},
				}}
			/>
		</div>
	)
}

export default SchoolSelectDropdown
