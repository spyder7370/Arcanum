let initialState = {
	bannerProps: {
		image: null,
	},
	heroProps: {
		title: null,
		description: null,
		breadcrumbs: null,
		heroChildren: null,
	},
};

let homeVariable = $state({
	bannerProps: {
		image: null,
	},
	heroProps: {
		title: null,
		description: null,
		breadcrumbs: null,
		heroChildren: null,
	},
});

export const home = {
	get value() {
		return homeVariable;
	},
	set value(newValue) {
		if (newValue?.bannerProps) {
			const props = newValue?.bannerProps;
			if (props?.image) homeVariable.bannerProps.image = props?.image;
		}
		if (newValue?.heroProps) {
			const props = newValue?.heroProps;
			if (props?.title) homeVariable.heroProps.title = props?.title;
			if (props?.description)
				homeVariable.heroProps.description = props?.description;
			if (props?.breadcrumbs)
				homeVariable.heroProps.breadcrumbs = props?.breadcrumbs;
			if (props?.heroChildren)
				homeVariable.heroProps.heroChildren = props?.heroChildren;
		}
	},
	set bannerProps(bannerProps) {
		this.value = { ...this.value, bannerProps };
	},
	set heroProps(heroProps) {
		this.value = { ...this.value, heroProps };
	},
	clear: () => {
		homeVariable = initialState;
	},
};
