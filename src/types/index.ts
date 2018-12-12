
type EntityType = string;
type EntityId = string;
type Links = Link[];

// tslint:disable-next-line:interface-name
export interface Point {
    x: number,  // x position
    y: number,  // y position
  };
// tslint:disable-next-line:interface-name
export interface Link {
    target: EntityId,      // Id of another entity which is being linked to
    edited: boolean,       // whether or not the link was autogenerated or was edited by the user
    points?: Point[], // Array of points that define the position of the link
    label?: string,        // link label
    color?: string,        // link color (currently not implemented)
  };
  
// tslint:disable-next-line:interface-name
export interface EntityModel{
  id: EntityId,      // unique identifier of the Entity
  type: EntityType,  // type of entity, according to your custom entity components
  width: number,     // width
  height: number,    // height
  x: number,         // x position
  y: number,         // y position
  name: string,      // label of the entity
  linksTo?: Links,   // reference to other entities
  custom?: object,   // custom data for you to extend functionalities
};

export type EntityState = EntityModel[];
// tslint:disable-next-line:interface-name
export interface SetNamePayload { id: EntityId, name: string };
// tslint:disable-next-line:interface-name
interface MetaEntityModel{
    id: EntityId,
    isAnchored: boolean,
    isSelected: boolean,
  };
// tslint:disable-next-line:interface-name
 export interface DiagComponentProps {
    model: EntityModel,
    meta: MetaEntityModel,
    setName: (SetNamePayload:SetNamePayload) => any,
  };