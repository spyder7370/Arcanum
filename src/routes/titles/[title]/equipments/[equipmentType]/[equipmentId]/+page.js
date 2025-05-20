export const load = ({ params }) => {
	if (params.equipmentType === 'emblems') {
		return {
			bannerImage:
				'https://i.pinimg.com/1200x/0f/e5/94/0fe5942dc711d240fee6eff0e2e7b40f.jpg',
			title: 'Assassin Emblem',
			itemImage:
				'https://static.wikia.nocookie.net/mobile-legends/images/9/94/Custom_Assassin_Emblem.png',
			breadcrumbs: [
				{ text: 'Home', url: '/' },
				{ text: 'Mobile Legends', url: '/titles/ml' },
				{ text: 'Emblems', url: '/titles/ml/equipments/emblems' },
			],
			id: 'emblems',
		};
	} else if (params.equipmentType === 'items') {
		return {
			bannerImage:
				'https://i.pinimg.com/1200x/ca/5e/5b/ca5e5b5edf17ccaf73003bced04772ca.jpg',
			title: 'Divine Glaive',
			itemImage:
				'https://mlcounter.com/wp-content/uploads/2022/04/Divine_Glaive.png',
			breadcrumbs: [
				{ text: 'Home', url: '/' },
				{ text: 'Mobile Legends', url: '/titles/ml' },
				{ text: 'Equipments', url: '/titles/ml/equipments/items' },
			],
			id: 'equipments',
		};
	}
	return {
		bannerImage:
			'https://i.pinimg.com/1200x/b3/ab/79/b3ab790d9ff08dee8857d244a66dbebf.jpg',
		title: 'Ice Retribution',
		itemImage:
			'https://static.wikia.nocookie.net/mobile-legends/images/b/bd/Ice_Retribution.png',
		breadcrumbs: [
			{ text: 'Home', url: '/' },
			{ text: 'Mobile Legends', url: '/titles/ml' },
			{ text: 'Spells', url: '/titles/ml/equipments/spells' },
		],
		id: 'spells',
	};
};
