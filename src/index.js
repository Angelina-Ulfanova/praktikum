// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import jordanImage from './images/jordan.jpg';
import jamesImage from './images/james.jpg';
import bryantImage from './images/bryant.jpg';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
]; 

import './styles/index.css'; // добавьте импорт главного файла стилей 