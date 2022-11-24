function receivesAFunction(callback){
return callback()
}
receivesAFunction(()  => "Hello, world!") 


function returnsANamedFunction(namedFunc){
    return function namedFunc(){
        return "Hello, world!"
    }
    returnsANamedFunction()
}


function returnsAnAnonymousFunction (functio){
    return function functio(){
        return "Hello, world"
    }
}
returnsAnAnonymousFunction()

