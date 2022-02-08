
import { Node } from '../node';

export class ContactsRest {
    node = null;

    constructor() {
        this.node = new Node();
    }

    getAll(object={}) {
        return this.node.get('Contacts', object);
    }

    getForm(object={}) {
        return this.node.get("Forms?$expand=Fields($expand=Field($expand=OriginField,Entity,SecondaryEntity,OriginFieldFieldPath($expand=Fields($expand=Field),DestinationEntity)))&$filter=Key+eq+" + "'contact_person_form'");
    }

    saveOrUpdate(object={}, id=0) {
        if(id > 0) {
            return this.node.patch(`Contacts(${id})`, object);
        } else {
            return this.node.post('Contacts', object);
        }
    }

}

var contact = new ContactsRest();
global.contact = contact;
export var contact;