const Add = Base=>class extends Base{
    add(){}
}
const Remove = Base=>class extends Base{
    remove(){}
}

const Update = Base=>class extends Base{
    update(){}
}
const Get = Base=>class extends Base{
    get(){}
}

class Customer extends (Add(Remove(Update(Get(class{}))))){

}

class User extends Get(class{}){
    
}

/*
class Customer extends inherit().withMixins(Add,Update,Remove,Get) {

}
class Customer extends inherit().withMixins(Get) {

}
*/

class Mixin{
    constructor(Base){
        this.Base = Base
    }
    withMixins(...mixins){
        return mixins.reduceRight((prototype,m)=>m(prototype), this.Base)

        /*
        class+Update
        class+Update+Add
        class+Update+Add+Remove
        class+Update+Add+Get
        */
    }
}

function inherit(Base){
    return new Mixin(Base || class {})
}