// @flow

import * as React from 'react';
import style from 'styled-components';

import { DiagComponentProps } from '../../types';

/*
 * Presentational
 * ==================================== */

const EventStyle = style.div`
  background-color: #fff;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: ${(props:EventProps)=> (props.isEditing ? 'stretch' : 'center')};
  width: ${(props:any) => props.width}px;
  height: ${(props:any) => props.height}px;
  border-radius: 77rem;
  border: 2px solid #888;
  justify-content: center;
  font-size: .5rem;
`;

const Name = style.span`
  position: absolute;
  top: 100%;
  width: 200%;
  padding: .5em;
  font-size: .8rem;
`;

const EditName = style.textarea`
  position: absolute;
  top: 100%;
  width: 200%;
  padding: .5em;
  border: none;
  font-size: .8rem;
  text-align: center;
  border-radius: .1rem;
  resize: none;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
`;

export type EventProps = DiagComponentProps & {
  name: string,
  isEditing: boolean,
  toggleEdit: (isEditing: boolean) => void,
  refreshName: (ev: React.SyntheticEvent<HTMLTextAreaElement>)=> void,
  handleKeyPress: (ev: React.KeyboardEvent<HTMLTextAreaElement>) => void,
  handleRef: (textarea: HTMLTextAreaElement) => void,
};
const Event = (props: EventProps) => (
  <EventStyle width={props.model.width}
  height={props.model.height}
  isEditing={props.isEditing}>
    <EditName
      value={props.name}
      onChange={props.refreshName}
      onKeyDown={props.handleKeyPress}
      // tslint:disable-next-line:jsx-no-lambda
      innerRef={textarea => props.handleRef(textarea)}
      style={{ display: props.isEditing ? 'block' : 'none' }}
    />
    <Name
      // tslint:disable-next-line:jsx-no-lambda
      onDoubleClick={() => props.toggleEdit(true)}
      style={{ display: !props.isEditing ? 'block' : 'none' }}
    >
      {props.model.name}
    </Name>
  </EventStyle>
);

/*
 * Container
 * ==================================== */

type EventComponentProps = DiagComponentProps;
// tslint:disable-next-line:interface-name
interface EventComponentState {
  isEditing: boolean,
  name: string,
}
class EventComponent extends React.PureComponent<
  EventComponentProps,
  EventComponentState
> {
  public textarea: HTMLTextAreaElement | null;

  public state = {
    isEditing: false,
    name: this.props.model.name,
  };

  public componentWillUnmount() {
    this.textarea = null;
  }

  public handleRef = (textarea: HTMLTextAreaElement) => {
    if (!this.textarea) {
      this.textarea = textarea;
    }
  };

  public toggleEdit = (isEditing: boolean) => {
    const { textarea } = this;
    if (isEditing && textarea) {
      setTimeout(() => textarea.focus(), 16 * 4);
    }
    this.setState({ isEditing });
  };

  public refreshName = (ev: React.SyntheticEvent<HTMLTextAreaElement>) => {
    this.setState({ name: ev.currentTarget.value });
  };

  public handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    switch (ev.key) {
      case 'Enter':
        this.toggleEdit(false);
        this.props.setName({ id: this.props.model.id, name: this.state.name });
        break;
      case 'Escape':
        this.toggleEdit(false);
        this.setState({ name: this.props.model.name });
        break;
      // no default
    }
  };

  public render() {
    return (
      <Event
        {...this.props}
        isEditing={this.state.isEditing}
        name={this.state.name}
        toggleEdit={this.toggleEdit}
        refreshName={this.refreshName}
        handleKeyPress={this.handleKeyPress}
        handleRef={this.handleRef}
      />
    );
  }
}

export default EventComponent;