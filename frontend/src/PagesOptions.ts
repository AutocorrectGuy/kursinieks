import {
	faDragon,
	faStar,
	faHome,
	faCrop,
	faClipboard,
	faCalculator,
	faBlind,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface NavOptionInterface {
	textValue: string
	icon: IconDefinition
	href: string
	isAchievement: boolean
	id: string
	isActive?: boolean
}


export const pagesOptions: NavOptionInterface[] = [
	{
		textValue: 'Sākums',
		icon: faHome,
		href: '/',
		isActive: false,
		isAchievement: false,
		id: '82db114a-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Sasniegumi',
		icon: faStar,
		href: '/achievements',
		isActive: false,
		isAchievement: false,
		id: '96213a5e-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Informācijas un komunikāciju tehnoloģijas',
		icon: faDragon,
		href: '/1',
		isActive: false,
		isAchievement: true,
		id: '9faa5592-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Viesmīlības pakalpojumi',
		icon: faBlind,
		href: '/2',
		isActive: false,
		isAchievement: true,
		id: 'a6d03472-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Matemātika',
		icon: faCalculator,
		href: '/3',
		isActive: false,
		isAchievement: true,
		id: 'ae12c312-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Ražas sagatavošana',
		icon: faCrop,
		href: '/4',
		isActive: false,
		isAchievement: true,
		id: 'b41506ee-a813-11ed-afa1-0242ac120002'
	},
	{
		textValue: 'Latviešu valoda',
		icon: faClipboard,
		href: '/5',
		isActive: false,
		isAchievement: true,
		id: 'b8710e0e-a813-11ed-afa1-0242ac120002'
	},
]
