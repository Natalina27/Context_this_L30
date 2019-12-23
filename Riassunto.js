//Итого про this

//Значение this устанавливается в зависимости от того, как вызвана функция:
// При вызове функции как метода:

obj.func(...)    // this = obj
obj["func"](...)
//При обычном вызове:

    func(...) // this = window (ES3) /undefined (ES5)
//В new:

new func() // this = {} (новый объект)
//Явное указание:
func.call(context, arg1, arg2, ...)
func.apply(context, args) // this = context (явная передача)
