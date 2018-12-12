// @flow

import * as React from 'react';
import style from 'styled-components';

import { DiagComponentProps } from '../../types';

/*
 * Presentational
 * ==================================== */

const TaskStyle = style.div`
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: ${(props:TaskProps)=> (props.isEditing ? 'stretch' : 'center')};
  width: ${(props:any) => props.width}px;
  height: ${(props:any)=> props.height}px;
  border-radius: .5rem;
  border: 2px solid #888;
`;

const Name = style.span`
  flex: 1 0;
  padding: .5em;
  font-size: .8rem;
`;

const EditName = style.textarea`
  padding: .5em;
  font-size: .8rem;
  text-align: center;
  resize: none;
  border: none;
  border-radius: .5rem;
`;

export type TaskProps = DiagComponentProps & {
  name: string,
  isEditing: boolean,
  toggleEdit: (isEditing: boolean) => void,
  refreshName: (ev: React.SyntheticEvent<HTMLTextAreaElement>) => void,
  handleKeyPress: (ev: React.KeyboardEvent<HTMLTextAreaElement>) => void,
  handleRef: (textarea: HTMLTextAreaElement) => void,
};
const Task = (props: TaskProps) => (
  <TaskStyle
    width={props.model.width}
    height={props.model.height}
    isEditing={props.isEditing}
  >
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
  </TaskStyle>
);

/*
 * Container
 * ==================================== */

type TaskComponentProps = DiagComponentProps;
// tslint:disable-next-line:interface-name
interface TaskComponentState {
  isEditing: boolean,
  name: string,
}
class TaskComponent extends React.PureComponent<
  TaskComponentProps,
  TaskComponentState
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
      <Task
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

export default TaskComponent;