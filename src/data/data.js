/* eslint-disable */
export class OrgViewerNode {
    constructor(id, name, title, className) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.className = className;
     }

     log(){
        console.log({node:this});
     }
}
