
# Context , this 



>> Последствия свободного this
>
>>  Если вы до этого изучали другие языки программирования, тогда вы, 
>> скорее всего, привыкли к идее "фиксированного this" – когда методы, определённые внутри объекта, 
>> всегда сохраняют в качестве значения this ссылку на свой объект (в котором был определён метод).

>> В JavaScript this является «свободным», его значение вычисляется в момент вызова метода и не зависит от того, 
>> где этот метод был объявлен, а зависит от того, какой объект вызывает метод (какой объект стоит «перед точкой»).
   
>> Эта идея вычисления this в момент исполнения имеет как свои плюсы, так и минусы.
>> С одной стороны, функция может быть повторно использована в качестве метода у различных объектов 
>> (что повышает гибкость). С другой стороны, большая гибкость увеличивает вероятность ошибок.
   
>> Здесь мы не будем судить о том, является ли это решение в языке хорошим или плохим.
>>  Мы должны понимать, как с этим работать, чтобы получать выгоды и избегать проблем.


## Итого

+ Функции, которые находятся в объекте в качестве его свойств, называются «методами».

+ Методы позволяют объектам «действовать»: object.doSomething().

+ Методы могут ссылаться на объект через this.

+ Значение this определяется во время исполнения кода.

+ При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, 
пока функция не будет вызвана.
Эта функция может быть скопирована между объектами (из одного объекта в другой).

+ Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова 
является объект перед точкой.

+ Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. 
Когда внутри стрелочной функции обращаются к this, то его значение берётся снаружи.

>> this – это текущий объект при вызове «через точку» и новый объект при конструировании через new.
>> 2 способа явно указать this:  при помощи методов call и apply.

