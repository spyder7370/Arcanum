import ArknightsBanner from '../../images/titles/arknights/banner.jpg';
import MLBanner from '../../images/titles/ml/banner.jpg';
import GenshinBanner from '../../images/titles/genshin/banner.jpg';
import ErrorImage from '../../images/error.jpg';

export const getBanner = (path) => {
	switch (path) {
		case '/images/titles/arknights/banner.jpg':
			return ArknightsBanner;
		case '/images/titles/ml/banner.jpg':
			return MLBanner;
		case '/images/titles/genshin/banner.jpg':
			return GenshinBanner;
		default:
			return ErrorImage;
	}
};
