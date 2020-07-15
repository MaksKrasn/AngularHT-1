export class Job{
    id: number;
    startData: string = '';
    finishData: string ='';
    positionName: string ='';
    description: string = '';

    constructor(id, startData, finishData, positionName, description){
        this.id = id;
        this.startData = startData;
        this.finishData = finishData;
        this.positionName = positionName;
        this.description = description;
    }
}