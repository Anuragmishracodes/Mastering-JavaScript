### Topics covered today
- Variables, Data Types, Type Coersion, Operators

### Variables
- var - can be declare, assign, reassign, even redeclare ( Outdated, Avoid it )
- let - can be declare, assign, reassign, but not redeclare ( Will use it mostly times )
- const - declare and assign at the same time, can't be redeclare or reassign ( Only for constant values )

### Data Types
- Primitives - string, number, boolean, null, undefined(default), bigint, symbol
- Refrences - Arrays, Objects, Function
- Primitives are immutable, Refrences are mutable
- Primitives vo jinhe direct copy kiya jaa sake, Refrences vo jinka sirf reference copy hota hai

### Type Coersion
- Implicit( Auto by JS )
- string aur number ko agar ADD karne ka koshish karte hain toh, Programming ke andar '+' do kaam karta hai, ek toh concatenation aur dusra sum karna, isiliye kabhi bhi string aur number ko + operator ke saath jodte hain toh, JS automatically number ko string mein convert karke concat kar deta hai.
- Explicit (Manual)
- number("123") //123
- string(123) //"123"
- ye baaki operator ke saath nahi hota, kyunki baaki operators "+" ke jaise do kaam nahi karte

### Operators
1. Arithmetic Operators ( + - / * % ** )
- % means mod ( 12%2 toh 12 ko 2 se divide kardo toh jo bachega vo mod )
- ** means power ( 2**3 means 2 ka cube )

2. Comparison Operators ( ==, ===, <, >, <=, >=, !=, !== )
- == value check karta hai, type check nahi karta hai 
- === value aur type dono check karta hai

3. Assignment Operators ( =, +=, -=, /=, *=, %= )
- let a = 12;
- a+= 3; // 15
- a-= 11; //4
- a/= 2; //2
- a*= 3; //6

4. Logical Operators ( &&, ||, ! )
- && - and operator - dono true toh true, ek bhi false toh false
- || - or operator - ek bhi true toh true, dono false toh false
- ! - not operator - true toh false, false toh true
- !! - kisi bhi data type ki truthy value pata karne ki trick

5. Unary Operators ( +, -, !, typeof, ++, -- )
- '+' string ko number mein convert karta hai
- '-' string ko number mein convert also negate karta hai
- 'a++' post increment means current value print karne baad 1 se increase kar deta hai
- '++a' pre increment means 1 se increase karne ke baad print karta hai

6. Ternary Operators ( ?, : )
- 12>13 ? console.log("Hello World") : console.log("namaste duniya")
- condition true hui toh ? ke baad wala code chalega, false hua toh : ke baad waala code chalega

### Important Concepts
- Hoisting, Temporal Dead Zone, Dynamic Typing