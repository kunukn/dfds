/*
  https://youtu.be/AIAqaFFw7AY?t=12m6s
*/

import React from 'react';
import 'components/quarks/_main.scss';
import '@kunukn/dfds-fonts/fonts/main/font.css';
import '@kunukn/dfds-icons/files/main/icons.svg';
import icons from '@kunukn/dfds-icons';

import FontsStory from './Fonts.story';
import ColorsStory from './Colors.story';
import IconStory from 'components/atoms/Icon/Icon.story';
import ButtonStory from 'components/molecules/Button/Button.story';

// for github pages
icons.load({path: 'https://unpkg.com/@kunukn/dfds/dist/icons.min.svg'});
//icons.load();

FontsStory();
ColorsStory();
IconStory();
ButtonStory();
