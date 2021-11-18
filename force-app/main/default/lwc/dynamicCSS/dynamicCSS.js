import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {

    percent = 10
    changeHandler(e){
        this.percent = e.target.value
    }

    get percentage(){
        return `width:${this.percent}%;`
    }
}