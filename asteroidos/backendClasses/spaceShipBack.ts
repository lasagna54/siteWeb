export default class SpaceshipBack {

    private _coordX: number;
    private _coordY: number;
    private _thisSpeed: number = 200;

    constructor(coordX:number,coordY:number){
        this._coordX=coordX;
        this._coordY=coordY;
    }

    public getCoords():{x:number,y:number}{
        return {x:this._coordX,y:this._coordY};
    }

    private setCoords(x:number,y:number):void{
        this._coordX = x;
        this._coordY = y;
    }

    public setCoordX(x:number):void{
        this._coordX = x;
    }

    public moveX(x:number):void{
        this.setCoordX(this._coordX+x)
    }

    public setCoordY(y:number):void{
        this._coordY = y;
    }

    public moveY(y:number):void{
        this.setCoordY(this._coordY+y)
}

}


