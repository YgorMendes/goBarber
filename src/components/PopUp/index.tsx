import React from 'react';
import { Container, PopUp } from './styles';
import Icon from '../Icon';
import { PopUpMessage, usePopUp } from '../../hooks/popUp';

interface PropsPopUp {
  messages: PopUpMessage[];
}

function index({ messages }: PropsPopUp): JSX.Element {
  const { removePopUp } = usePopUp();

  return (
    <Container>
      {messages.map((message) => {
        return (
          <PopUp key={message.id}>
            <div>
              <Icon iconName={message.icon} />
            </div>

            <div>
              <div>
                <h2>{message.title}</h2>
                <p>{message.description}</p>
              </div>
            </div>

            <button onClick={() => removePopUp(message.id)} type="button">
              <Icon iconName="Closed" />
            </button>
          </PopUp>
        );
      })}
    </Container>
  );
}

export default index;
