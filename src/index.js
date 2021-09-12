'use strict';

import modalWindow from './modules/modalWindow';
import slider from './modules/slider';
import carousel from "./modules/carousel";
import scrolls from './modules/scrolls';
import sendForm from './modules/sendForm';
import accordeon from './modules/accordeon';
import maskPhone from './modules/maskPhone';
import modalWindow2 from './modules/modalWindow2';
import aboutUs from './modules/aboutUs';





// Модальное окно и подложка
   
modalWindow();

// Главный слайдер
  
slider();

// Карусель

carousel();

// Прокрутка страницы

scrolls();

// Отправка данных
sendForm();

// Аккордион
accordeon();

maskPhone('.tel');

modalWindow2();

aboutUs();