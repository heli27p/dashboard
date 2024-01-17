import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'News Quant',
    path: '/',
    icon: icon('newspaper-solid'),
  },
  {
    title: 'Real Economic indicators',
    path: '/user',
    icon: icon('chart-bar-regular'),
  },
  {
    title: 'One Score',
    path: '/products',
    icon: icon('star-solid'),
  },
  {
    title: 'Alert Central',
    path: '/blog',
    icon: icon('bell-regular'),
  },
  {
    title: 'Customer Support',
    path: '/login',
    icon: icon('phone-solid'),
  },
];

export default navConfig;
