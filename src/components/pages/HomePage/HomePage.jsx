import './home-page.scss';
import React from 'react';
import { Icon, InfoBox, Button } from 'components';

let onClick = event => {
  console.log('clicked button ' + event.currentTarget);
};

export default class HomePage extends React.Component {
  render() {
    return (
      <InfoBox title="yarn storybook">
        <div>
          <Icon name="triangle" />
        </div>
        <Button modifiers="light-border" icon={<Icon name="facebook" fill="#3B5998" />} onClick={onClick}>
          Click me
        </Button>
        <Button modifiers="call-to-action full-width" icon={<Icon name="facebook" />} onClick={onClick}>
          Click me
        </Button>
        <Button
          modifiers="dark-border full-width"
          icon={<span style={{ pointerEvents: 'none' }}>⚽</span>}
          onClick={onClick}
        >
          Click me
        </Button>
        <Button modifiers="light-border full-width" onClick={onClick}>
          Click me
        </Button>
        <Button disabled modifiers="full-width" onClick={onClick}>
          disabled
        </Button>
      </InfoBox>
    );
  }
}
