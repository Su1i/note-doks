var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/pwn/",title:"Pwn",description:"Prologue Doks.",content:""}),e.add({id:1,href:"/docs/python/python%E5%9F%BA%E7%A1%80/01.%E7%AC%AC%E4%B8%80%E7%AB%A0-%E8%B5%B7%E6%AD%A5/",title:"01.第一章 起步",description:"Help Doks.",content:`01.第一章 起步 # 阅读《python编程：从入门到实践》整理的笔记，分享出来和大家一起学习，不足的地方希望大家指出。同时也推荐一下《python编程：从入门到实践》这本书，适合小白学习python的入门书籍。
1.1搭建编程环境 # 安装python
安装vs code
1.2 在不同操作系统中搭建python环境 # 1.3 解决安装问题 # 1.4 从终端中运行python程序 # print(\u0026quot;hello world!\u0026quot;) 1.5 小结 # 在本章中，你大致了解了Python，并在自己的系统中安装了Python。你还安装了一个文本编辑器，以简化Python代码的编写工作。你学习了如何在终端会话中运行Python代码片段，并运行了第一个货真价实的程序——hello_world.py。你还大致了解了如何解决安装问题。
在下一章，你将学习如何在Python程序中使用各种数据和变量。
# `}),e.add({id:2,href:"/docs/python/python%E5%9F%BA%E7%A1%80/02.%E7%AC%AC%E4%BA%8C%E7%AB%A0-%E5%8F%98%E9%87%8F%E5%92%8C%E7%AE%80%E5%8D%95%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",title:"02.第二章 变量和简单的数据结构",description:"Help Doks.",content:`02.第二章 变量和简单的数据结构 # 2.1运行hello_world.py时发生的情况 # 2.2 变量 # message = \u0026quot;Hello Python world!\u0026quot; print(message) message = \u0026quot;Hello Python Crash Course world!\u0026quot; print(message) 运行结果
Hello Python world! Hello Python Crash Course world! 2.2.1 变量的命名和使用 # 变量名只能包含字母、数字和下划线。变量名可以字母或下划线打头，但不能以数字打头，例如，可将变量命名为message_1，但不能将其命名为1_message。 变量名不能包含空格，但可使用下划线来分隔其中的单词。例如，变量名greeting_message可行，但变量名greeting message会引发错误。 不要将Python关键字和函数名用作变量名，即不要使用Python保留用于特殊用途的单词，如print（请参见附录A.4）。 变量名应既简短又具有描述性。例如，name比n好，student_name比s_n好，name_length比length_of_persons_name好。 慎用小写字母l和大写字母O，因为它们可能被人错看成数字1和0。 2.2.2 使用变量时避免命名错误 # 2.3 字符串 # 字符串就是一系列字符。在Python中，用引号括起的都是字符串，其中的引号可以是单引号，也可以是双引号，如下所示：
\u0026quot;This is a string.\u0026quot; 'This is also a string.' 2.3.1 使用方法修改字符串的大小写 # name = \u0026quot;ada lovelace\u0026quot; print(name.title()) 运行结果
Ada Lovelace 在name.title()中，name后面的句点（.）让Python对变量name执行方法title()指定的操作。每个方法后面都跟着一对括号，这是因为方法通常需要额外的信息来完成其工作。这种信息是在括号内提供的。函数title()不需要额外的信息，因此它后面的括号是空的。
title()以首字母大写的方式显示每个单词，即将每个单词的首字母都改为大写。
要将字符串改为全部大写或全部小写，可以像下面这样做：
name = \u0026quot;Ada Lovelace\u0026quot; print(name.upper()) print(name.lower()) 运行结果
ADA LOVELACE ada lovelace 2.3.2 合并（拼接）字符串 # Python使用加号（+）来合并字符串。
first_name = \u0026quot;ada\u0026quot; last_name = \u0026quot;lovelace\u0026quot; full_name = first_name + \u0026quot; \u0026quot; + last_name message = \u0026quot;Hello, \u0026quot; + full_name.title() + \u0026quot;!\u0026quot; print(message) 运行结果
Hello, Ada Lovelace! 2.3.3 使用制表符或换行符来添加空白 # 要在字符串中添加制表符，可使用字符组合\\t
要在字符串中添加换行符，可使用字符组合\\n
还可在同一个字符串中同时包含制表符和换行符。
\u0026gt;\u0026gt;\u0026gt; print(\u0026quot;Languages:\\n\\tPython\\n\\tC\\n\\tJavaScript\u0026quot;) Languages: Python C JavaScript 2.3.4 删除空白 # \u0026gt;\u0026gt;\u0026gt; favorite_language = ' python ' \u0026gt;\u0026gt;\u0026gt; favorite_language.rstrip()#剔除右端空白 ' python' \u0026gt;\u0026gt;\u0026gt; favorite_language.lstrip()#剔除左端空白 'python ' \u0026gt;\u0026gt;\u0026gt; favorite_language.strip() #剔除两端空白 'python' 2.3.5 使用字符串时避免语法错误 # 2.3.6 python2中的print语句 # 2.4 数字 # 2.4.1 整数 # 在Python中，可对整数执行加（+）减（-）乘（*）除（/）运算。
在终端会话中，Python直接返回运算结果。Python使用两个乘号表示乘方运算。
Python还支持运算次序，因此你可在同一个表达式中使用多种运算。你还可以使用括号来修改运算次序，让Python按你指定的次序执行运算。
\u0026gt;\u0026gt;\u0026gt; 2 + 3*4 14 \u0026gt;\u0026gt;\u0026gt; (2 + 3) * 4 20 2.4.2 浮点数 # Python将带小数点的数字都称为浮点数。
\u0026gt;\u0026gt;\u0026gt; 0.2 + 0.1 0.30000000000000004 \u0026gt;\u0026gt;\u0026gt; 3 * 0.1 0.30000000000000004 所有语言都存在这种问题，没有什么可担心的。
2.4.3 使用函数str（）避免类型错误 # 你经常需要在消息中使用变量的值。
可调用函数str()，它让Python将非字符串值表示
为字符串：
age = 23 message = \u0026quot;Happy \u0026quot; + str(age) + \u0026quot;rd Birthday!\u0026quot; print(message) 运行结果
Happy 23rd Birthday! 2.4.4 python2中的整数 # 在Python 2中，将两个整数相除得到的结果稍有不同：
\u0026gt;\u0026gt;\u0026gt; python2.7 \u0026gt;\u0026gt;\u0026gt; 3 / 2 1 Python返回的结果为1，而不是1.5。在Python 2中，整数除法的结果只包含整数部分，小数部分被删除。请注意，计算整数结果时，采取的方式不是四舍五入，而是将小数部分直接删除。
在Python 2中，若要避免这种情况，务必确保至少有一个操作数为浮点数，这样结果也将为浮点数：
\u0026gt;\u0026gt;\u0026gt; 3 / 2 1 \u0026gt;\u0026gt;\u0026gt; 3.0 / 2 1.5 \u0026gt;\u0026gt;\u0026gt; 3 / 2.0 1.5 \u0026gt;\u0026gt;\u0026gt; 3.0 / 2.0 1.5 2.5 注释 # python中的注释以#开头。
2.6 python之禅 # 在解释器中执行命令import this即可查看。
2.7 小结 # 在本章中，你学习了：如何使用变量；如何创建描述性变量名以及如何消除名称错误和语法错误；字符串是什么，以及如何使用小写、大写和首字母大写方式显示字符串；使用空白来显示整洁的输出，以及如何剔除字符串中多余的空白；如何使用整数和浮点数；使用数值数据时需要注意的意外行为。你还学习了如何编写说明性注释，让代码对你和其他人来说更容易理解。最后，你了解了让代码尽可能简单的理念。
在第3章，你将学习如何在被称为列表的变量中存储信息集，以及如何通过遍历列表来操作其中的信息。
`}),e.add({id:3,href:"/docs/python/python%E5%9F%BA%E7%A1%80/03.%E7%AC%AC%E4%B8%89%E7%AB%A0-%E5%88%97%E8%A1%A8%E7%AE%80%E4%BB%8B/",title:"03.第三章 列表简介",description:"Help Doks.",content:`03.第三章 列表简介 # 3.1 列表是什么 # 列表由一系列按特定顺序排列的元素组成。
在Python中，用方括号（[]）来表示列表，并用逗号来分隔其中的元素。下面是一个简单的列表示例，这个列表包含几种自行车：
bicycles = ['trek', 'cannondale', 'redline', 'specialized'] print(bicycles) 如果你让Python将列表打印出来，Python将打印列表的内部表示，包括方括号：
['trek', 'cannondale', 'redline', 'specialized'] 3.1.1 访问列表元素 # 列表是有序集合，因此要访问列表的任何元素，只需将该元素的位置或索引告诉Python即可。
要访问列表元素，可指出列表的名称，再指出元素的索引，并将其放在方括号内。
bicycles = ['trek', 'cannondale', 'redline', 'specialized'] print(bicycles[0]) 当你请求获取列表元素时，Python只返回该元素，而不包
括方括号和引号：
trek 可使用方法title()让元素\u0026rsquo;trek\u0026rsquo;的格式更整洁
3.1.2 索引从0而不是1开始 # 在Python中，第一个列表元素的索引为0，而不是1。
Python为访问最后一个列表元素提供了一种特殊语法。通过将索引指定为-1，可让Python返回最后一个列表元素。索引-2返回倒数第二个列表元素，索引-3返回倒数第三个列表元素，以此类推。
3.1.3 使用列表中的各个值 # 可像使用其他变量一样使用列表中的各个值。
3.2 修改、添加和删除元素 # 3.2.1 修改列表元素 # 修改列表元素的语法与访问列表元素的语法类似。要修改列表元素，可指定列表名和要修改的元素的索引，再指定该元素的新值。
motorcycles = ['honda', 'yamaha', 'suzuki'] print(motorcycles) motorcycles[0] = 'ducati' print(motorcycles) ['honda', 'yamaha', 'suzuki'] ['ducati', 'yamaha', 'suzuki'] 你可以修改任何列表元素的值，而不仅仅是第一个元素的值。
3.2.2 在列表中添加元素 # 1. 在列表末尾添加元素 # 方法append()将元素\u0026rsquo;ducati\u0026rsquo;添加到了列表末尾，而不影响列表中的其他所有元素：
motorcycles = ['honda', 'yamaha', 'suzuki'] print(motorcycles) motorcycles.append('ducati') print(motorcycles) ['honda', 'yamaha', 'suzuki'] ['honda', 'yamaha', 'suzuki', 'ducati'] 方法append()让动态地创建列表易如反掌，例如，你可以先创建一个空列表，再使用一系列的append()语句添加元素。
2. 在列表中插入元素 # 使用方法insert()可在列表的任何位置添加新元素。
motorcycles = ['honda', 'yamaha', 'suzuki'] motorcycles.insert(0, 'ducati') print(motorcycles) 在这个示例中，值\u0026rsquo;ducati\u0026rsquo;被插入到了列表开头；方法insert()在索引0处添加空间，并将值\u0026rsquo;ducati\u0026rsquo;存储到这个地方。这种操作将列表中既有的每个元素都右移一个位置：
['ducati', 'honda', 'yamaha', 'suzuki'] 3.2.3 从列表中删除元素 # 1. 使用del语句删除元素 # 如果知道要删除的元素在列表中的位置，可使用del语句。
motorcycles = ['honda', 'yamaha', 'suzuki'] print(motorcycles) del motorcycles[0] print(motorcycles) 代码使用del删除了列表motorcycles中的第一个元素——\u0026lsquo;honda\u0026rsquo;：
['honda', 'yamaha', 'suzuki'] ['yamaha', 'suzuki'] 使用del可删除任何位置处的列表元素，条件是知道其索引。
2. 使用方法pop（）删除元素 # 方法pop()可删除列表末尾的元素，并让你能够接着使用它。术语弹出（pop）源自这样的类比：列表就像一个栈，而删除列表末尾的元素相当于弹出栈顶元素。
motorcycles = ['honda', 'yamaha', 'suzuki'] print(motorcycles) popped_motorcycle = motorcycles.pop() print(motorcycles) print(popped_motorcycle) ['honda', 'yamaha', 'suzuki'] ['honda', 'yamaha'] suzuki 3. 弹出列表中任何位置处的元素 # 实际上，你可以使用pop()来删除列表中任何位置的元素，只需在括号中指定要删除的元素的索引即可。
motorcycles = ['honda', 'yamaha', 'suzuki'] first_owned = motorcycles.pop(0) print('The first motorcycle I owned was a ' + first_owned.title() + '.') The first motorcycle I owned was a Honda. 别忘了，每当你使用pop()时，被弹出的元素就不再在列表中了。
4. 根据值删除元素 # 不知道要从列表中删除的值所处的位置，只知道要删除的元素的值，可使用方法remove()。
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati'] print(motorcycles) motorcycles.remove('ducati') print(motorcycles) ['honda', 'yamaha', 'suzuki', 'ducati'] ['honda', 'yamaha', 'suzuki'] 3.3 组织列表 # 3.3.1 使用方法sort（）对列表进行永久性排序 # Python方法sort()让你能够较为轻松地对列表进行排序。
cars = ['bmw', 'audi', 'toyota', 'subaru'] cars.sort() print(cars) ['audi', 'bmw', 'subaru', 'toyota'] 你还可以按与字母顺序相反的顺序排列列表元素，为此，只需向sort()方法传递参数reverse=True。
cars = ['bmw', 'audi', 'toyota', 'subaru'] cars.sort(reverse=True) print(cars) ['toyota', 'subaru', 'bmw', 'audi'] 3.3.2 使用函数sorted（）对列表进行临时排序 # 要保留列表元素原来的排列顺序，同时以特定的顺序呈现它们，可使用函数sorted()。函数sorted()让你能够按特定顺序显示列表元素，同时不影响它们在列表中的原始排列顺序。
cars = ['bmw', 'audi', 'toyota', 'subaru'] print(\u0026quot;Here is the original list:\u0026quot;) print(cars) print(\u0026quot;\\nHere is the sorted list:\u0026quot;) print(sorted(cars)) print(\u0026quot;\\nHere is the original list again:\u0026quot;) print(cars) Here is the original list: ['bmw', 'audi', 'toyota', 'subaru'] Here is the sorted list: ['audi', 'bmw', 'subaru', 'toyota'] Here is the original list again: ['bmw', 'audi', 'toyota', 'subaru'] 如果你要按与字母顺序相反的顺序显示列表，也可向函数sorted()传递参数reverse=True。
3.3.3 倒着打印列表 # 要反转列表元素的排列顺序，可使用方法reverse()。
cars = ['bmw', 'audi', 'toyota', 'subaru'] print(cars) cars.reverse() print(cars) ['bmw', 'audi', 'toyota', 'subaru'] ['subaru', 'toyota', 'audi', 'bmw'] 注意，reverse()不是指按与字母顺序相反的顺序排列列表元素，而只是反转列表元素的排列顺序
方法reverse()永久性地修改列表元素的排列顺序，但可随时恢复到原来的排列顺序，为此只需对列表再次调用reverse()即可。
3.3.4 确定列表的长度 # 使用函数len()可快速获悉列表的长度。
\u0026gt;\u0026gt;\u0026gt; cars = ['bmw', 'audi', 'toyota', 'subaru'] \u0026gt;\u0026gt;\u0026gt; len(cars) 4 3.4 使用列表时避免索引错误 # 3.5 小结 # 在本章中，你学习了：列表是什么以及如何使用其中的元素；如何定义列表以及如何增删元素；如何对列表进行永久性排序，以及如何为展示列表而进行临时排序；如何确定列表的长度，以及在使用列表时如何避免索引错误。
在第4章，你将学习如何以更高效的方式处理列表元素。通过使用为数不多的几行代码来遍历列表元素，你就能高效地处理它们，即便列表包含数千乃至数百万个元素。
# `}),e.add({id:4,href:"/docs/python/python%E5%9F%BA%E7%A1%80/04.%E7%AC%AC%E5%9B%9B%E7%AB%A0-%E6%93%8D%E4%BD%9C%E5%88%97%E8%A1%A8/",title:"04.第四章 操作列表",description:"Help Doks.",content:`04.第四章 操作列表 # 4.1 遍历整个列表 # 需要对列表中的每个元素都执行相同的操作时，可使用Python中的for循环。
下面使用for循环来打印魔术师名单中的所有名字：
magicians = ['alice', 'david', 'carolina'] for magician in magicians: print(magician) 首先，我们像第3章那样定义了一个列表。接下来，我们定义了一个for循环；这行代码让Python从列表magicians中取出一个名字，并将其存储在变量magician中。最后，我们让Python打印前面存储到变量magician中的名字。
alice david carolina 4.1.1 深入的研究循环 # Python将首先读取其中的第一行代码：
for magician in magicians: 这行代码让Python获取列表magicians中的第一个值（\u0026lsquo;alice\u0026rsquo;），并将其存储到变量magician中。接下来，Python读取下一行代码：
print(magician) 它让Python打印magician的值——依然是\u0026rsquo;alice\u0026rsquo;。鉴于该列表还包含其他值，Python返回到循环的第一行：
for magician in magicians: Python获取列表中的下一个名字——\u0026lsquo;david\u0026rsquo;，并将其存储到变量magician中，再执行下面这行代码：
print(magician) Python再次打印变量magician的值——当前为\u0026rsquo;david\u0026rsquo;。接下来，Python再次执行整个循环，对列表中的最后一个值——\u0026lsquo;carolina\u0026rsquo;进行处理。至此，列表中没有其他的值了，因此Python接着执行程序的下一行代码。在这个示例中，for循环后面没有其他的代码，因此程序就此结束。
4.1.2 在for循环中执行更多的操作 # 在for循环中，想包含多少行代码都可以。在代码行for magician in magicians后面，每个缩进的代码行都是循环的一部分，且将针对列表中的每个值都执行一次。因此，可对列表中的每个值执行任意次数的操作。
magicians = ['alice', 'david', 'carolina'] for magician in magicians: print(magician.title() + \u0026quot;, that was a great trick!\u0026quot;) print(\u0026quot;I can't wait to see your next trick, \u0026quot; + magician.title() + \u0026quot;.\\n\u0026quot;) Alice, that was a great trick! I can't wait to see your next trick, Alice. David, that was a great trick! I can't wait to see your next trick, David. Carolina, that was a great trick! I can't wait to see your next trick, Carolina. 4.1.3 在for循环结束后执行一些操作 # 在for循环后面，没有缩进的代码都只执行一次，而不会重复执行。
magicians = ['alice', 'david', 'carolina'] for magician in magicians: print(magician.title() + \u0026quot;, that was a great trick!\u0026quot;) print(\u0026quot;I can't wait to see your next trick, \u0026quot; + magician.title() + \u0026quot;.\\n\u0026quot;) print(\u0026quot;Thank you, everyone. That was a great magic show!\u0026quot;) Alice, that was a great trick! I can't wait to see your next trick, Alice. David, that was a great trick! I can't wait to see your next trick, David. Carolina, that was a great trick! I can't wait to see your next trick, Carolina. Thank you, everyone. That was a great magic show! 4.2 避免缩进错误 # 4.2.1 忘记缩进 # 4.2.2 忘记缩进额外的代码行 # 4.2.3 不必要的缩进 # 4.2.4 循环后不必要的缩进 # 4.2.5 遗漏了冒号 # for语句末尾的冒号告诉Python，下一行是循环的第一行。
4.3 创建数值列表 # 4.3.1 使用函数range（） # Python函数range()让你能够轻松地生成一系列的数字。
for value in range(1,5): print(value) 上述代码好像应该打印数字1~5，但实际上它不会打印数字5：
1 2 3 4 函数range()让Python从你指定的第一个值开始数，并在到达你指定的第二个值后停止，因此输出不包含第二个值（这里为5）。
4.3.2 使用range（）创建数字列表 # 要创建数字列表，可使用函数list()将range()的结果直接转换为列表。
numbers = list(range(1,6)) print(numbers) [1, 2, 3, 4, 5] 使用函数range()时，还可指定步长。例如，下面的代码打印1~10内的偶数：
even_numbers = list(range(2,11,2)) print(even_numbers) 在这个示例中，函数range()从2开始数，然后不断地加2，直到达到或超过终值（11），因此输出如下：
[2, 4, 6, 8, 10] 在Python中，两个星号（**）表示乘方运算。下面的代码演示了如何将前10个整数的平方加入到一个列表中：
squares = [] for value in range(1,11): square = value**2 squares.append(square) print(squares) 首先，我们创建了一个空列表；接下来，使用函数range()让Python遍历1~10的值。在循环中，计算当前值的平方，并将结果存储到变量square中。然后，将新计算得
到的平方值附加到列表squares末尾。最后，循环结束后，打印列表squares：
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100] 4.3.3 对数字列表执行简单的统计计算 # 有几个专门用于处理数字列表的Python函数。例如，你可以轻松地找出数字列表的最大值、最小值和总和：
\u0026gt;\u0026gt;\u0026gt; digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] \u0026gt;\u0026gt;\u0026gt; min(digits) 0 \u0026gt;\u0026gt;\u0026gt; max(digits) 9 \u0026gt;\u0026gt;\u0026gt; sum(digits) 45 4.3.4 列表解析 # 前面介绍的生成列表squares的方式包含三四行代码，而列表解析让你只需编写一行代码就能生成这样的列表。列表解析将for循环和创建新元素的代码合并成一行，并自动附加新元素。
squares = [value**2 for value in range(1,11)] print(squares) 要使用这种语法，首先指定一个描述性的列表名，如squares；然后，指定一个左方括号，并定义一个表达式，用于生成你要存储到列表中的值。在这个示例中，表达式为value**2，它计算平方值。接下来，编写一个for循环，用于给表达式提供值，再加上右方括号。
请注意，这里的for语句末尾没有冒号。
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100] 4.4 使用列表的一部分 # 你还可以处理列表的部分元素——Python称之为切片。
4.4.1 切片 # 要创建切片，可指定要使用的第一个元素和最后一个元素的索引。与函数range()一样，Python在到达你指定的第二个索引前面的元素后停止。要输出列表中的前三个元素，需要指定索引0~3，这将输出分别为0、1和2的元素。
players = ['charles', 'martina', 'michael', 'florence', 'eli'] print(players[0:3]) ['charles', 'martina', 'michael'] 要输出名单上的最后三名队员，可使用切片players[-3:]：
如果你没有指定第一个索引，Python将自动从列表开头开始：
要让切片终止于列表末尾，也可使用类似的语法。
4.4.2 遍历切片 # 如果要遍历列表的部分元素，可在for循环中使用切片。
players = ['charles', 'martina', 'michael', 'florence', 'eli'] print(\u0026quot;Here are the first three players on my team:\u0026quot;) for player in players[:3]: print(player.title()) Here are the first three players on my team: Charles Martina Michael 4.4.3 复制列表 # 要复制列表，可创建一个包含整个列表的切片，方法是同时省略起始索引和终止索引（[:]）。
这让Python创建一个始于第一个元素，终止于最后一个元素的切片，即复制整个列表。
4.5 元组 # 要创建一系列不可修改的元素，元组可以满足这种需求。Python将不能修改的值称为不可变的，而不可变的列表被称为元组。
4.5.1 定义元组 # 元组看起来犹如列表，但使用圆括号而不是方括号来标识。定义元组后，就可以使用索引来访问其元素，就像访问列表元素一样。
dimensions = (200, 50) print(dimensions[0]) print(dimensions[1]) 200 50 修改元组的操作是被禁止的
dimensions = (200, 50) dimensions[0] = 250 代码试图修改矩形的尺寸时，Python报告错误
4.5.2 遍历元组中的所有值 # 像列表一样，也可以使用for循环来遍历元组中的所有值：
dimensions = (200, 50) for dimension in dimensions: print(dimension) 200 50 就像遍历列表时一样，Python返回元组中所有的元素
4.5.3 修改元组变量 # 虽然不能修改元组的元素，但可以给存储元组的变量赋值。因此，如果要修改前述矩形的尺寸，可重新定义整个元组：
dimensions = (200, 50) print(\u0026quot;Original dimensions:\u0026quot;) for dimension in dimensions: print(dimension) dimensions = (400, 100) print(\u0026quot;\\nModified dimensions:\u0026quot;) for dimension in dimensions: print(dimension) 给元组变量赋值是合法的
Original dimensions: 200 50 Modified dimensions: 400 100 相比于列表，元组是更简单的数据结构。如果需要存储的一组值在程序的整个生命周期内都不变，可使用元组。
4.6 设置代码格式 # 4.6.1 格式设置指南 # 4.6.2 缩进 # 4.6.3 行长 # 4.6.4 空行 # 4.6.5 其他格式设置指南 # 4.7 小结 # 在本章中，你学习了：如何高效地处理列表中的元素；如何使用for循环遍历列表，Python如何根据缩进来确定程序的结构以及如何避免一些常见的缩进错误；如何创建简单的数字列表，以及可对数字列表执行的一些操作；如何通过切片来使用列表的一部分和复制列表。你还学习了元组（它对不应变化的值提供了一定程度的保护），以及在代码变得越来越复杂时如何设置格式，使其易于阅读。
在第5章中，你将学习如何使用if语句在不同的条件下采取不同的措施；学习如何将一组较复杂的条件测试组合起来，并在满足特定条件时采取相应的措施。你还将学习如何在遍历列表时，通过使用if语句对特定元素采取特定的措施。
`}),e.add({id:5,href:"/docs/python/python%E5%9F%BA%E7%A1%80/05.%E7%AC%AC%E4%BA%94%E7%AB%A0-if%E8%AF%AD%E5%8F%A5/",title:"05.第五章 if语句",description:"Help Doks.",content:`05.第五章 if语句 # 5.1 一个简单示例 # cars = ['audi', 'bmw', 'subaru', 'toyota'] for car in cars: if car == 'bmw': print(car.upper()) else: print(car.title()) 这个示例中的循环首先检查当前的汽车名是否是\u0026rsquo;bmw\u0026rsquo;。如果是，就以全大写的方式打印它；否则就以首字母大写的方式打印：
Audi BMW Subaru Toyota 5.2 条件测试 # 每条if语句的核心都是一个值为True或False的表达式，这种表达式被称为条件测试。Python根据条件测试的值为True还是False来决定是否执行if语句中的代码。如果条件测试的值为True，Python就执行紧跟在if语句后面的代码；如果为False，Python就忽略这些代码。
5.2.1 检查是否相等 # \u0026gt;\u0026gt;\u0026gt; car = 'bmw' \u0026gt;\u0026gt;\u0026gt; car == 'bmw' True \u0026gt;\u0026gt;\u0026gt; car = 'audi' \u0026gt;\u0026gt;\u0026gt; car == 'bmw' False 这个相等运算符（==）在它两边的值相等时返回True，否则返回False。
5.2.2 检查是否相等时不考虑大小写 # 在Python中检查是否相等时区分大小写，两个大小写不同的值会被视为不相等：
\u0026gt;\u0026gt;\u0026gt; car = 'Audi' \u0026gt;\u0026gt;\u0026gt; car == 'audi' False 如果大小写无关紧要，而只想检查变量的值，可将变量的值转换为小写，再进行比较：
\u0026gt;\u0026gt;\u0026gt; car = 'Audi' \u0026gt;\u0026gt;\u0026gt; car.lower() == 'audi' True \u0026gt;\u0026gt;\u0026gt; car 'Audi' 函数lower()不会修改存储在变量car中的值，因此进行这样的比较时不会影响原来的变量
5.2.3 检查是否不相等 # 要判断两个值是否不等，可结合使用惊叹号和等号（!=）
5.2.4 比较数字 # \u0026gt;\u0026gt;\u0026gt; age = 18 \u0026gt;\u0026gt;\u0026gt; age == 18 True \u0026gt;\u0026gt;\u0026gt;age != 18 False \u0026gt;\u0026gt;\u0026gt; age = 19 \u0026gt;\u0026gt;\u0026gt; age \u0026lt; 21 True \u0026gt;\u0026gt;\u0026gt; age \u0026lt;= 21 True \u0026gt;\u0026gt;\u0026gt; age \u0026gt; 21 False \u0026gt;\u0026gt;\u0026gt; age \u0026gt;= 21 False 5.2.5 检查多个条件 # 1. 使用and检查多个条件 # 要检查是否两个条件都为True，可使用关键字and将两个条件测试合而为一；如果每个测试都通过了，整个表达式就为True；如果至少有一个测试没有通过，整个表达式就为False。
\u0026gt;\u0026gt;\u0026gt; age_0 = 22 \u0026gt;\u0026gt;\u0026gt; age_1 = 18 \u0026gt;\u0026gt;\u0026gt; age_0 \u0026gt;= 21 and age_1 \u0026gt;= 21 False \u0026gt;\u0026gt;\u0026gt; age_1 = 22 \u0026gt;\u0026gt;\u0026gt; age_0 \u0026gt;= 21 and age_1 \u0026gt;= 21 True 为改善可读性，可将每个测试都分别放在一对括号内，但并非必须这样做。
(age_0 \u0026gt;= 21) and (age_1 \u0026gt;= 21)
2. 使用or检查多个条件 # 关键字or也能够让你检查多个条件，但只要至少有一个条件满足，就能通过整个测试。仅当两个测试都没有通过时，使用or的表达式才为False。
\u0026gt;\u0026gt;\u0026gt; age_0 = 22 \u0026gt;\u0026gt;\u0026gt; age_1 = 18 \u0026gt;\u0026gt;\u0026gt; age_0 \u0026gt;= 21 or age_1 \u0026gt;= 21 True \u0026gt;\u0026gt;\u0026gt; age_0 = 18 \u0026gt;\u0026gt;\u0026gt; age_0 \u0026gt;= 21 or age_1 \u0026gt;= 21 False 5.2.6 检查特定值是否包含在列表中 # \u0026gt;\u0026gt;\u0026gt; requested_toppings = ['mushrooms', 'onions', 'pineapple'] \u0026gt;\u0026gt;\u0026gt; 'mushrooms' in requested_toppings True \u0026gt;\u0026gt;\u0026gt; 'pepperoni' in requested_toppings False 关键字in让Python检查列表requested_toppings是否包含\u0026rsquo;mushrooms\u0026rsquo;和\u0026rsquo;pepperoni\u0026rsquo;。这种技术很有用，它让你能够在创建一个列表后，轻松地检查其中是否包含特定的值。
5.2.7 检查特定值是否不包含在列表中 # 确定特定的值未包含在列表中可使用关键字not in。
banned_users = ['andrew', 'carolina', 'david'] user = 'marie' if user not in banned_users: print(user.title() + \u0026quot;, you can post a response if you wish.\u0026quot;) 如果user的值未包含在列表banned_users中，Python将返回True，进而执行缩进的代码行。
5.2.8 布尔表达式 # 随着你对编程的了解越来越深入，将遇到术语布尔表达式，它不过是条件测试的别名。与条件表达式一样，布尔表达式的结果要么为True，要么为False。
布尔值通常用于记录条件,在跟踪程序状态或程序中重要的条件方面，布尔值提供了一种高效的方式。
game_active = True can_edit = False 5.3 if语句 # 5.3.1 简单的if语句 # 最简单的if语句只有一个测试和一个操作：
if conditional_test: do something 在第1行中，可包含任何条件测试，而在紧跟在测试后面的缩进代码块中，可执行任何操作。如果条件测试的结果为True，Python就会执行紧跟在if语句后面的代码；否则Python将忽略这些代码。
在紧跟在if语句后面的代码块中，可根据需要包含任意数量的代码行。
5.3.2 if-else语句 # 经常需要在条件测试通过了时执行一个操作，并在没有通过时执行另一个操作；在这种情况下，可使用Python提供的if-else语句。
age = 17 if age \u0026gt;= 18: print(\u0026quot;You are old enough to vote!\u0026quot;) print(\u0026quot;Have you registered to vote yet?\u0026quot;) else: print(\u0026quot;Sorry, you are too young to vote.\u0026quot;) print(\u0026quot;Please register to vote as soon as you turn 18!\u0026quot;) Sorry, you are too young to vote. Please register to vote as soon as you turn 18! 5.3.3 if-elif-else结构 # 经常需要检查超过两个的情形，为此可使用Python提供的if-elif-else结构。Python只执行if-elif-else结构中的一个代码块，它依次检查每个条件测试，直到遇到通过了的条件测试。测
试通过后，Python将执行紧跟在它后面的代码，并跳过余下的测试。
age = 12 if age \u0026lt; 4: price = 0 elif age \u0026lt; 18: price = 5 else: price = 10 print(\u0026quot;Your admission cost is \$\u0026quot; + str(price) + \u0026quot;.\u0026quot;) 5.3.4 使用多个elif代码块 # 可根据需要使用任意数量的elif代码块
5.3.5 省略else代码块 # Python并不要求if-elif结构后面必须有else代码块。
5.3.6 测试多个条件 # 有时候必须检查你关心的所有条件。在这种情况下，应使用一系列不包含elif和else代码块的简单if语句。在可能有多个条件为True，且你需要在每个条件为True时都采取相应措施时，适合使用这种方法。
requested_toppings = ['mushrooms', 'extra cheese'] if 'mushrooms' in requested_toppings: print(\u0026quot;Adding mushrooms.\u0026quot;) if 'pepperoni' in requested_toppings: print(\u0026quot;Adding pepperoni.\u0026quot;) if 'extra cheese' in requested_toppings: print(\u0026quot;Adding extra cheese.\u0026quot;) print(\u0026quot;\\nFinished making your pizza!\u0026quot;) 总之，如果你只想执行一个代码块，就使用if-elif-else结构；如果要运行多个代码块，就使用一系列独立的if语句。
5.4 使用if语句处理列表 # 5.4.1 检查特殊元素 # 本章开头通过一个简单示例演示了如何处理特殊值\u0026rsquo;bmw\u0026rsquo;——它需要采用不同的格式进行打印。下面来进一步研究如何检查列表中的特殊值，并对其做合适的处理。
继续使用前面的比萨店示例。这家比萨店在制作比萨时，每添加一种配料都打印一条消息。通过创建一个列表，在其中包含顾客点的配料，并使用一个循环来指出添加到比萨中的配料，可以以极高的效率编写这样的代码：
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese'] for requested_topping in requested_toppings: print(\u0026quot;Adding \u0026quot; + requested_topping + \u0026quot;.\u0026quot;) print(\u0026quot;\\nFinished making your pizza!\u0026quot;) 输出很简单，因为上述代码不过是一个简单的for循环：
Adding mushrooms. Adding green peppers. Adding extra cheese. Finished making your pizza! 然而，如果比萨店的青椒用完了，该如何处理呢？为妥善地处理这种情况，可在for循环中包含一条if语句：
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese'] for requested_topping in requested_toppings: if requested_topping == 'green peppers': #1 print(\u0026quot;Sorry, we are out of green peppers right now.\u0026quot;) else: #2 print(\u0026quot;Adding \u0026quot; + requested_topping + \u0026quot;.\u0026quot;) print(\u0026quot;\\nFinished making your pizza!\u0026quot;) 这里在比萨中添加每种配料前都进行检查。1处的代码检查顾客点的是否是青椒，如果是，就显示一条消息，指出不能点青椒的原因。2处的else代码块确保其他配料都将添加到比萨中。
输出表明，妥善地处理了顾客点的每种配料：
Adding mushrooms. Sorry, we are out of green peppers right now. Adding extra cheese. Finished making your pizza! 5.4.2 确定列表不是空的 # 到目前为止，对于处理的每个列表都做了一个简单的假设，即假设它们都至少包含一个元素。我们马上就要让用户来提供存储在列表中的信息，因此不能再假设循环运行时列表不是空的。有鉴于此，在运行for循环前确定列表是否为空很重要。
下面在制作比萨前检查顾客点的配料列表是否为空。如果列表是空的，就向顾客确认他是否要点普通比萨；如果列表不为空，就像前面的示例那样制作比萨：
requested_toppings = [] if requested_toppings: for requested_topping in requested_toppings: print(\u0026quot;Adding \u0026quot; + requested_topping + \u0026quot;.\u0026quot;) print(\u0026quot;\\nFinished making your pizza!\u0026quot;) else: print(\u0026quot;Are you sure you want a plain pizza?\u0026quot;) 首先创建了一个空列表，其中不包含任何配料（见）。在处我们进行了简单检查，而不是直接执行for循环。在if语句中将列表名用在条件表达式中时，Python将在列表至少包含一个元素时返回True，并在列表为空时返回False。如果requested_toppings不为空，就运行与前一个示例相同的for循环；否则，就打印一条消息，询问顾客是否确实要点不加任何配料的普通比萨。
在这里，这个列表为空，因此输出如下——询问顾客是否确实要点普通比萨：
Are you sure you want a plain pizza? 如果这个列表不为空，将显示在比萨中添加的各种配料的输出。
5.4.3 使用多个列表 # 顾客的要求往往五花八门，在比萨配料方面尤其如此。如果顾客要在比萨中添加炸薯条，该怎么办呢？可使用列表和if语句来确定能否满足顾客的要求。
下面的示例定义了两个列表，其中第一个列表包含比萨店供应的配料，而第二个列表包含顾客点的配料。这次对于requested_toppings中的每个元素，都检查它是否是比萨店供应的配料，再决定是否在比萨中添加它：
available_toppings = ['mushrooms', 'olives', 'green peppers', 'pepperoni', 'pineapple', 'extra cheese'] requested_toppings = ['mushrooms', 'french fries', 'extra cheese'] for requested_topping in requested_toppings: if requested_topping in available_toppings: print(\u0026quot;Adding \u0026quot; + requested_topping + \u0026quot;.\u0026quot;) else: print(\u0026quot;Sorry, we don't have \u0026quot; + requested_topping + \u0026quot;.\u0026quot;) print(\u0026quot;\\nFinished making your pizza!\u0026quot;) 我们定义了一个列表，其中包含比萨店供应的配料。请注意，如果比萨店供应的配料是固定的，也可使用一个元组来存储它们。我们又创建了一个列表，其中包含顾客点的配料，请注意那个不同寻常的配料——\u0026lsquo;french fries\u0026rsquo;。我们遍历顾客点的配料列表。
在这个循环中，对于顾客点的每种配料，我们都检查它是否包含在供应的配料列表中；如果答案是肯定的，就将其加入到比萨中，否则将运行else代码块：打印一条消息，告诉顾客不供应这种配料。
Adding mushrooms. Sorry, we don't have french fries. Adding extra cheese. Finished making your pizza! 5.5 设置if语句的格式 # 本章的每个示例都展示了良好的格式设置习惯。在条件测试的格式设置方面，PEP 8提供的唯一建议是，在诸如==、\u0026gt;=和\u0026lt;=等比较运算符两边各添加一个空格，例如，if age \u0026lt; 4:要比if age\u0026lt;4:好。
这样的空格不会影响Python对代码的解读，而只是让代码阅读起来更容易。
5.6 小结 # 在本章中，你学习了如何编写结果要么为Ture要么为False的条件测试。你学习了如何编写简单的if语句、if-else语句和if-elif-else结构。在程序中，你使用了这些结构来测试特定的条件，以确定这些条件是否满足。你学习了如何在利用高效的for循环的同时，以不同于其他元素的方式对特定的列表元素进行处理。你还再次学习了Python就代码格式方面提出的建议，这可确保即便你编写的程序越来越复杂，其代码依然易于阅读和理解。
在第6章，你将学习Python字典。字典类似于列表，但让你能够将不同的信息关联起来。你将学习如何创建和遍历字典，以及如何将字典同列表和if语句结合起来使用。学习字典让你能够模拟更多现实世界的情形。
`}),e.add({id:6,href:"/docs/python/python%E5%9F%BA%E7%A1%80/06.%E7%AC%AC%E5%85%AD%E7%AB%A0-%E5%AD%97%E5%85%B8/",title:"06.第六章 字典",description:"Help Doks.",content:`06.第六章 字典 # 6.1 一个简单的字典 # 来看一个游戏，其中包含一些外星人，这些外星人的颜色和点数各不相同。下面是一个简单的字典，存储了有关特定外星人的信息：
alien_0 = {'color': 'green', 'points': 5} print(alien_0['color']) print(alien_0['points']) 字典alien_0存储了外星人的颜色和点数。使用两条print语句来访问并打印这些信息，如下所示：
green 5 6.2 使用字典 # 在Python中，字典是一系列键—值对。每个键都与一个值相关联，你可以使用键来访问与之相关联的值。与键相关联的值可以是数字、字符串、列表乃至字典。事实上，可将任何Python对象用作字典中的值。
在Python中，字典用放在花括号{}中的一系列键—值对表示，如前面的示例所示：
alien_0 = {'color': 'green', 'points': 5} 键—值对是两个相关联的值。指定键时，Python将返回与之相关联的值。键和值之间用冒号分隔，而键—值对之间用逗号分隔。在字典中，你想存储多少个键—值对都可以。
最简单的字典只有一个键—值对，如下述修改后的字典alien_0所示：
alien_0 = {'color': 'green'} 这个字典只存储了一项有关alien_0的信息，具体地说是这个外星人的颜色。在这个字典中，字符串\u0026rsquo;color\u0026rsquo;是一个键，与之相关联的值为\u0026rsquo;green\u0026rsquo;。
6.2.1 访问字典中的值 # 要获取与键相关联的值，可依次指定字典名和放在方括号内的键，如下所示：
alien_0 = {'color': 'green'} print(alien_0['color']) 这将返回字典alien_0中与键\u0026rsquo;color\u0026rsquo;相关联的值：
green 字典中可包含任意数量的键—值对。
现在，你可以访问外星人alien_0的颜色和点数。如果玩家射杀了这个外星人，你就可以使用下面的代码来确定玩家应获得多少个点：
alien_0 = {'color': 'green', 'points': 5} new_points = alien_0['points'] print(\u0026quot;You just earned \u0026quot; + str(new_points) + \u0026quot; points!\u0026quot;) 上述代码首先定义了一个字典，然后从这个字典中获取与键\u0026rsquo;points\u0026rsquo;相关联的值，并将这个值存储在变量new_points中。接下来，将这个整数转换为字符串，并打印一条消息，指出玩家获得了多少个点：
You just earned 5 points! 6.2.2 添加键-值对 # 字典是一种动态结构，可随时在其中添加键—值对。要添加键—值对，可依次指定字典名、用方括号括起的键和相关联的值。
alien_0 = {'color': 'green', 'points': 5} print(alien_0) alien_0['x_position'] = 0 alien_0['y_position'] = 25 print(alien_0) {'color': 'green', 'points': 5} {'color': 'green', 'points': 5, 'y_position': 25, 'x_position': 0} 6.2.3 先创建一个空字典 # 有时候，在空字典中添加键—值对是为了方便，而有时候必须这样做。为此，可先使用一对空的花括号定义一个字典，再分行添加各个键—值对。
alien_0 = {} alien_0['color'] = 'green' alien_0['points'] = 5 print(alien_0) 这里首先定义了空字典alien_0，再在其中添加颜色和点数，得到前述示例一直在使用的字典：
{'color': 'green', 'points': 5} 使用字典来存储用户提供的数据或在编写能自动生成大量键—值对的代码时，通常都需要先定义一个空字典。
6.2.4 修改字典中的值 # 要修改字典中的值，可依次指定字典名、用方括号括起的键以及与该键相关联的新值。
alien_0 = {'color': 'green'} print(\u0026quot;The alien is \u0026quot; + alien_0['color'] + \u0026quot;.\u0026quot;) alien_0['color'] = 'yellow' print(\u0026quot;The alien is now \u0026quot; + alien_0['color'] + \u0026quot;.\u0026quot;) The alien is green. The alien is now yellow. 来看一个更有趣的例子：对一个能够以不同速度移动的外星人的位置进行跟踪。为此，我们将存储该外星人的当前速度，并据此确定该外星人将向右移动多远：
alien_0 = {'x_position': 0, 'y_position': 25, 'speed': 'medium'} print(\u0026quot;Original x-position: \u0026quot; + str(alien_0['x_position'])) # 向右移动外星人 # 据外星人当前速度决定将其移动多远 if alien_0['speed'] == 'slow': x_increment = 1 elif alien_0['speed'] == 'medium': x_increment = 2 else: # 这个外星人的速度一定很快 x_increment = 3 # 新位置等于老位置加上增量 alien_0['x_position'] = alien_0['x_position'] + x_increment print(\u0026quot;New x-position: \u0026quot; + str(alien_0['x_position'])) 我们首先定义了一个外星人，其中包含初始的x坐标和y坐标，还有速度\u0026rsquo;medium\u0026rsquo;。使用了一个if-elif-else结构来确定外星人应向右移动多远，并将这个值存储在变量x_increment中。如果外星人的速度为\u0026rsquo;slow\u0026rsquo;，它将向右移动一个单位；如果速度为\u0026rsquo;medium\u0026rsquo;，将向右移动两个单位；如果为\u0026rsquo;fast\u0026rsquo;，将向右移动三个单位。确定移动量后，将其与x_position的当前值相加，再将结果关联到字典中的键x_position。
Original x-position: 0 New x-position: 2 要将这个速度中等的外星人变成速度很快的外星人，可添加如下代码行：
alien_0['speed'] = fast 再次运行这些代码时，其中的if-elif-else结构将把一个更大的值赋给变量x_increment。
6.2.5 删除键-值对 # 对于字典中不再需要的信息，可使用del语句将相应的键—值对彻底删除。使用del语句时，必须指定字典名和要删除的键。
alien_0 = {'color': 'green', 'points': 5} print(alien_0) del alien_0['points'] print(alien_0) {'color': 'green', 'points': 5} {'color': 'green'} 注意： 删除的键—值对永远消失了。
6.2.6 由类似对象组成的字典 # 在前面的示例中，字典存储的是一个对象（游戏中的一个外星人）的多种信息，但你也可以使用字典来存储众多对象的同一种信息。
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } print(\u0026quot;Sarah's favorite language is \u0026quot; + favorite_languages['sarah'].title() + \u0026quot;.\u0026quot;) Sarah's favorite language is C. 6.3 遍历字典 # 6.3.1 遍历所有的键-值对 # 下面的字典存储一名用户的用户名、名和姓，可以使用一个for循环来遍历这个字典：：
user_0 = { 'username': 'efermi', 'first': 'enrico', 'last': 'fermi', } for key, value in user_0.items(): print(\u0026quot;\\nKey: \u0026quot; + key) print(\u0026quot;Value: \u0026quot; + value) 要编写用于遍历字典的for循环，可声明两个变量，用于存储键—值对中的键和值。对于这两个变量，可使用任何名称。下面的代码使用了简单的变量名，这完全可行：
for k, v in user_0.items() for语句的第二部分包含字典名和方法items()，它返回一个键—值对列表。
Key: last Value: fermi Key: first Value: enrico Key: username Value: efermi 注意，即便遍历字典时，键—值对的返回顺序也与存储顺序不同。Python不关心键—值对的存储顺序，而只跟踪键和值之间的关联关系。
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } for name, language in favorite_languages.items(): print(name.title() + \u0026quot;'s favorite language is \u0026quot; + language.title() + \u0026quot;.\u0026quot;) 这些描述性名称能够让人非常轻松地明白print语句是做什么的。
Jen's favorite language is Python. Sarah's favorite language is C. Phil's favorite language is Python. Edward's favorite language is Ruby 6.3.2 遍历字典中的所有键 # 在不需要使用字典中的值时，方法keys()很有用。下面来遍历字典favorite_languages，并将每个被调查者的名字都打印出来：
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } for name in favorite_languages.keys(): print(name.title()) Jen Sarah Phil Edward 遍历字典时，会默认遍历所有的键，因此，如果将上述代码中的for name in favorite_ languages.keys():替换为for name in favorite_languages:，输出将不变。
在这种循环中，可使用当前键来访问与之相关联的值。下面来打印两条消息，指出两位朋友喜欢的语言。
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } friends = ['phil', 'sarah'] for name in favorite_languages.keys(): print(name.title()) if name in friends: print(\u0026quot; Hi \u0026quot; + name.title() + \u0026quot;, I see your favorite language is \u0026quot; + favorite_languages[name].title() + \u0026quot;!\u0026quot;) 每个人的名字都会被打印，但只对朋友打印特殊消息
Edward Phil Hi Phil, I see your favorite language is Python! Sarah Hi Sarah, I see your favorite language is C! Jen 你还可以使用keys()确定某个人是否接受了调查。下面的代码确定Erin是否接受了调查：
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } if 'erin' not in favorite_languages.keys(): print(\u0026quot;Erin, please take our poll!\u0026quot;) 方法keys()并非只能用于遍历；实际上，它返回一个列表，其中包含字典中的所有键，因此1处的代码行只是核实\u0026rsquo;erin\u0026rsquo;是否包含在这个列表中。由于她并不包含在这个列表中，因此打印
一条消息，邀请她参加调查：
Erin, please take our poll! 6.3.3 按顺序遍历字典中的所有键 # 字典总是明确地记录键和值之间的关联关系，但获取字典的元素时，获取顺序是不可预测的。这不是问题，因为通常你想要的只是获取与键相关联的正确的值。
要以特定的顺序返回元素，一种办法是在for循环中对返回的键进行排序。为此，可使用函数sorted()来获得按特定顺序排列的键列表的副本：
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } for name in sorted(favorite_languages.keys()): print(name.title() + \u0026quot;, thank you for taking the poll.\u0026quot;) 这条for语句类似于其他for语句，但对方法dictionary.keys()的结果调用了函数sorted()。这让Python列出字典中的所有键，并在遍历前对这个列表进行排序。输出表明，按顺序显示了所
有被调查者的名字：
Edward, thank you for taking the poll. Jen, thank you for taking the poll. Phil, thank you for taking the poll. Sarah, thank you for taking the poll. 6.3.4 遍历字典中的所有值 # 如果你感兴趣的主要是字典包含的值，可使用方法values()，它返回一个值列表，而不包含任何键。
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } print(\u0026quot;The following languages have been mentioned:\u0026quot;) for language in favorite_languages.values(): print(language.title()) 这条for语句提取字典中的每个值，并将它们依次存储到变量language中。通过打印这些值，就获得了一个列表，其中包含被调查者选择的各种语言：
The following languages have been mentioned: Python C Python Ruby 为剔除重复项，可使用集合（set）。集合类似于列表，但每个元素都必须是独一无二的：
favorite_languages = { 'jen': 'python', 'sarah': 'c', 'edward': 'ruby', 'phil': 'python', } print(\u0026quot;The following languages have been mentioned:\u0026quot;) for language in set(favorite_languages.values()): print(language.title()) 结果是一个不重复的列表，其中列出了被调查者提及的所有语言：
The following languages have been mentioned: Python C Ruby 6.4 嵌套 # 有时候，需要将一系列字典存储在列表中，或将列表作为值存储在字典中，这称为嵌套。你可以在列表中嵌套字典、在字典中嵌套列表甚至在字典中嵌套字典。
6.4.1 字典列表 # 我们首先创建了三个字典，其中每个字典都表示一个外星人。
alien_0 = {'color': 'green', 'points': 5} alien_1 = {'color': 'yellow', 'points': 10} alien_2 = {'color': 'red', 'points': 15} aliens = [alien_0, alien_1, alien_2] for alien in aliens: print(alien) {'color': 'green', 'points': 5} {'color': 'yellow', 'points': 10} {'color': 'red', 'points': 15} 我们使用range()生成了30个外星人：
# 创建一个用于存储外星人的空列表 aliens = [] # 创建30个绿色的外星人 for alien_number in range(30): new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'} aliens.append(new_alien) # 显示前五个外星人 for alien in aliens[:5]: print(alien) print(\u0026quot;...\u0026quot;) # 显示创建了多少个外星人 print(\u0026quot;Total number of aliens: \u0026quot; + str(len(aliens))) range()返回一系列数字，其唯一的用途是告诉Python我们要重复这个循环多少次。每次执行这个循环时，都创建一个外星人，并将其附加到列表aliens末尾。使用一个切片来打印前五个外星人。
{'speed': 'slow', 'color': 'green', 'points': 5} {'speed': 'slow', 'color': 'green', 'points': 5} {'speed': 'slow', 'color': 'green', 'points': 5} {'speed': 'slow', 'color': 'green', 'points': 5} {'speed': 'slow', 'color': 'green', 'points': 5} ... Total number of aliens: 30 这些外星人都具有相同的特征，但在Python看来，每个外星人都是独立的，这让我们能够独立地修改每个外星人。
必要时，我们可以使用for循环和if语句来修改某些外星人的颜色。
# 创建一个用于存储外星人的空列表 aliens = [] # 创建30个绿色的外星人 for alien_number in range (0,30): new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'} aliens.append(new_alien) for alien in aliens[0:3]: if alien['color'] == 'green': alien['color'] = 'yellow' alien['speed'] = 'medium' alien['points'] = 10 # 显示前五个外星人 for alien in aliens[0:5]: print(alien) print(\u0026quot;...\u0026quot;) 鉴于我们要修改前三个外星人，需要遍历一个只包含这些外星人的切片。当前，所有外星人都是绿色的，但情况并非总是如此，因此我们编写了一条if语句来确保只修改绿色外星人。如果外星人是绿色的，我们就将其颜色改为\u0026rsquo;yellow\u0026rsquo;，将其速度改为\u0026rsquo;medium\u0026rsquo;，并将其点数改为10，如下面的输出所示：
{'speed': 'medium', 'color': 'yellow', 'points': 10} {'speed': 'medium', 'color': 'yellow', 'points': 10} {'speed': 'medium', 'color': 'yellow', 'points': 10} {'speed': 'slow', 'color': 'green', 'points': 5} {'speed': 'slow', 'color': 'green', 'points': 5} ... 你可以进一步扩展这个循环，在其中添加一个elif代码块，将黄色外星人改为移动速度快且值15个点的红色外星人，如下所示（这里只列出了循环，而没有列出整个程序）：
for alien in aliens[0:3]: if alien['color'] == 'green': alien['color'] = 'yellow' alien['speed'] = 'medium' alien['points'] = 10 elif alien['color'] == 'yellow': alien['color'] = 'red' alien['speed'] = 'fast' alien['points'] = 15 6.4.2 在字典中存储列表 # 有时候，需要将列表存储在字典中，而不是将字典存储在列表中。
在下面的示例中，存储了比萨的两方面信息：外皮类型和配料列表。其中的配料列表是一个与键\u0026rsquo;toppings\u0026rsquo;相关联的值。要访问该列表，我们使用字典名和键\u0026rsquo;toppings\u0026rsquo;，就像访问字典中
的其他值一样。这将返回一个配料列表，而不是单个值：
# 存储所点比萨的信息 pizza = { 'crust': 'thick', 'toppings': ['mushrooms', 'extra cheese'], } # 概述所点的比萨 print(\u0026quot;You ordered a \u0026quot; + pizza['crust'] + \u0026quot;-crust pizza \u0026quot; + \u0026quot;with the following toppings:\u0026quot;) for topping in pizza['toppings']: print(\u0026quot;\\t\u0026quot; + topping) You ordered a thick-crust pizza with the following toppings: mushrooms extra cheese 每当需要在字典中将一个键关联到多个值时，都可以在字典中嵌套一个列表。
favorite_languages = { 'jen': ['python', 'ruby'], 'sarah': ['c'], 'edward': ['ruby', 'go'], 'phil': ['python', 'haskell'], } for name, languages in favorite_languages.items(): print(\u0026quot;\\n\u0026quot; + name.title() + \u0026quot;'s favorite languages are:\u0026quot;) for language in languages: print(\u0026quot;\\t\u0026quot; + language.title()) Jen's favorite languages are: Python Ruby Sarah's favorite languages are: C Phil's favorite languages are: Python Haskell Edward's favorite languages are: Ruby Go 6.4.3 在字典中存储字典 # 可在字典中嵌套字典，但这样做时，代码可能很快复杂起来。
users = { 'aeinstein': { 'first': 'albert', 'last': 'einstein', 'location': 'princeton', }, 'mcurie': { 'first': 'marie', 'last': 'curie', 'location': 'paris', }, } for username, user_info in users.items(): print(\u0026quot;\\nUsername: \u0026quot; + username) full_name = user_info['first'] + \u0026quot; \u0026quot; + user_info['last'] location = user_info['location'] print(\u0026quot;\\tFull name: \u0026quot; + full_name.title()) print(\u0026quot;\\tLocation: \u0026quot; + location.title()) 我们首先定义了一个名为users的字典，其中包含两个键：用户名\u0026rsquo;aeinstein\u0026rsquo;和\u0026rsquo;mcurie\u0026rsquo;；与每个键相关联的值都是一个字典，其中包含用户的名、姓和居住地。
Username: aeinstein Full name: Albert Einstein Location: Princeton Username: mcurie Full name: Marie Curie Location: Paris 请注意，表示每位用户的字典的结构都相同，虽然Python并没有这样的要求，但这使得嵌套的字典处理起来更容易。倘若表示每位用户的字典都包含不同的键，for循环内部的代码将更复杂。
6.5 小结 # 在本章中，你学习了：如何定义字典，以及如何使用存储在字典中的信息；如何访问和修改字典中的元素，以及如何遍历字典中的所有信息；如何遍历字典中所有的键值对、所有的键和所有的值；如何在列表中嵌套字典、在字典中嵌套列表以及在字典中嵌套字典。
在下一章中，你将学习while循环以及如何从用户那里获取输入。这是激动人心的一章，让你知道如何将程序变成交互性的——能够对用户输入作出响应。
`}),e.add({id:7,href:"/docs/python/django/",title:"Django",description:"Help Doks.",content:`目录 # Django ORM
Django请求生命周期流程图
FBV与CBV
request对象方法初识
路由层
连接数据库
静态文件配置
`}),e.add({id:8,href:"/docs/python/django/django-orm/",title:"Django ORM",description:"Help Doks.",content:`Django ORM # orm前戏 # 1.首先书写一个类： # class IDMapping(models.Model): studyID = models.CharField(max_length=15, verbose_name='学号') # 学号 competitionID = models.CharField(max_length=15, verbose_name='竞赛编号') # 竞赛编号 # CharField必须要指定max_length参数，不然会直接报错 # verbose_name参数是所有字段都有的，就是用来对字段进行解释 ''' 由于一张表中必须要有主键，并且一般情况下都叫id 所以当你没有定义主键的时候，orm会自动地创建一个叫做id的主键 ''' 2.数据库迁移命令： # python3 manage.py makemigrations 将操作记录到migrations文件夹 python3 manage.py migrate 将操作同步到数据库中 只要修改了models.py文件的内容，就必须执行上述两条命令 字段的增删改查 # 字段的增加： # 可以直接在终端中给出默认值 该字段可以为空，设置null=True 直接设置字段默认值：default=\u0026lsquo;123\u0026rsquo; 字段的删除： # 直接注释对应的字段的代码然后执行两条数据库迁移命令即可
注意：执行后原来字段对应的数据将会消失 字段的修改： # 直接修改代码然后执行迁移命令 数据的增删改查 # 数据的查询： # res = models.User.objects.filter(username=username).first() ''' 返回值可以看作是列表数据对象的格式 它也支持索引取值，切片操作，但是不支持负数索引 他不推荐你使用索引的方式取值 ''' # filter括号内可以携带多个参数，参数与参数之间是and关系 # 可以把filter联想成where记忆 # 查询用户表里面的所有内容 # 方式一： res = models.User.objects.filter() # 方式二： res = models.User.objects.all() 数据的增加： # from app import models # 方法一： res = models.User.objects.create(username=username,password=password) # 返回值就是当前创建的对象 # 方法二： user_obj = models.User(username=username,password=password) user_obj.save() 数据的修改： # # 去修改数据库中对应的数据内容 # 方式一： models.User.objects.filter(id=edit_id).update(username=username,password=password) # 方式二： edit_obj.username = username edit_obj.password = password edit.save() 数据的删除： # models.User.objects.filter(id=edit_id).delete() # 删除数据内部其实并不是真正的删除，我们会给数据一个标识字段用来表示当前数据是否被删除 # 如果被删除了仅仅修改该标识字段的状态 orm创建表关系 # # 一对多： publish = models.ForeignKey(to='Publish') # 默认与出版社的主键字段做外键关联 # 多对多（默认会自动创建第三张表）： authors = models.ManyToManyField(to='Author') # 一对一： author_detail = models.OneToOneField(to='AuthorDetail') ''' ForeignKey,OneToOneField 会自动在字段后面加上_id后缀 在django1.x版本中默认都是级联删除的 多对多表关系可以有好几种创建方式，这里先只介绍一种 ''' `}),e.add({id:9,href:"/docs/python/django/django%E8%AF%B7%E6%B1%82%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%B5%81%E7%A8%8B%E5%9B%BE/",title:"Django请求生命周期流程图",description:"Help Doks.",content:"Django请求生命周期流程图 # "}),e.add({id:10,href:"/docs/python/django/fbv%E4%B8%8Ecbv/",title:"FBV与CBV",description:"Help Doks.",content:`FBV与CBV # 视图函数可以是函数也可以是类
FBV # def index(request): return HttpResponse('index') CBV # # CBV实现 from django.views import View class MyLogin(View): def get(self,request): return render(request,'form.html') def post(self,request): return HttpResponse('POST方法') # CBV路由 url(r'^login/',views.MyLogin.as_view()) FBV和CBV各有千秋 CBV特点： # 能够直接根据请求方式的不同直接匹配到对应的方法执行
`}),e.add({id:11,href:"/docs/python/",title:"Python",description:"Help Doks.",content:""}),e.add({id:12,href:"/docs/python/python%E5%9F%BA%E7%A1%80/",title:"Python基础",description:"Help Doks.",content:""}),e.add({id:13,href:"/docs/python/django/request%E5%AF%B9%E8%B1%A1%E6%96%B9%E6%B3%95%E5%88%9D%E8%AF%86/",title:"request对象方法初识",description:"Help Doks.",content:`request对象方法初识 # request.method # 返回请求方式，并且是全大写的字符串形式 request.POST # 获取用户post请求提交的普通数据，不包含文件 request.POST.get() # 只获取列表最后一个元素 request.POST.getList() # 直接将列表取出 request.GET # 获取用户提交的get请求数据 request.GET.get() # 只获取列表最后一个元素 request.GET.getList() # 直接将列表取出 区别： # get请求携带的数据有大小限制，最大好像是4KB
post请求没有限制
`}),e.add({id:14,href:"/docs/python/django/%E8%B7%AF%E7%94%B1%E5%B1%82/",title:"路由层",description:"Help Doks.",content:"路由层 # 路由匹配 # url(r'^test/$', views.test) url(r'^testadd/$', views.testadd) # 首页 url(r'^$', views.home) ''' url方法第一个参数是正则表达式， 只要第一个参数正则表达式能够匹配到内容，那么就会立刻停止往下匹配 直接执行对应的视图函数 你在输入url的时候会默认加斜杠 django内部默认帮你做到重定向 第一次匹配不到 加斜杠再匹配一次 ''' # 取消自动加斜杠 APPEND_SLASH = Flase/True # 默认是True自动加斜杠 无名有名分组 # 无名分组 # # 分组，就是给某一段正则表达式用小括号括起来 url(r'^test/(\\d+)/', views.test) def test(request,xx): print(xx) return HttpResponse('test') # 无名分组就是将括号内正则表达式匹配到的内容当作位置参数传递给后面的视图函数 有名分组 # # 可以给正则表达式起一个别名 url(r'^testadd/(?P\u0026lt;year\u0026gt;\\d+)/', views.testadd) def testadd(request,year): print(year) return HttpResponse('testadd') # 有名分组就是将括号内正则表达式匹配到的内容当作关键字参数传递给后面的视图函数 无名有名是否可以混合使用 # # 不能混用，但是同一个分组可以使用N多次 url(r'^test/(\\d+)/(\\d+)/(\\d+)/', views.test) url(r'^testadd/(?P\u0026lt;year\u0026gt;\\d+)/(?P\u0026lt;year\u0026gt;\\d+)/(?P\u0026lt;year\u0026gt;\\d+)/', views.testadd) 反向解析 # # 本质：通过一些方法得到一个结果，该结果可以直接访问对应的url触发视图函数的运行 # 先给路由与视图函数起一个别名 url(r'^func/',views.func,name='ooo') # 反向解析 # 后端反向解析 reverse('ooo') # 前端反向解析 \u0026lt;a href=\u0026quot;{% url 'ooo' %}\u0026quot;\u0026gt;111\u0026lt;/a\u0026gt; 无名有名分组反向解析 # # 无名分组反向解析 url(r'^func/(\\d+)/',views.func,name='ooo') # 前端 \u0026lt;a href=\u0026quot;{% url 'ooo' 123 %}\u0026quot;\u0026gt;111\u0026lt;/a\u0026gt; # 后端 reverse('ooo',args(1,)) \u0026quot;\u0026quot;\u0026quot; 这个数字写代码的时候应该放什么 数字一般情况下放的是数据的主键值 数据的编辑和删除 url(r'^edit/(\\d+)/',views.edit,name='xxx') def edit(request,edit_id): reverse('xxx',args=(edit_id,)) {% for user_obj in user_queryset %} \u0026lt;a href=\u0026quot;{% url 'xxx' user_obj.id %}\u0026quot;\u0026gt;编辑\u0026lt;/a\u0026gt; {%endfor%} \u0026quot;\u0026quot;\u0026quot; # 有名分组反向解析 url(r'^func/(?P\u0026lt;year\u0026gt;\\d+)/',views.func,name='xxx') # 前端 \u0026lt;a href=\u0026quot;{% url 'ooo' year=123 %}\u0026quot;\u0026gt;111\u0026lt;/a\u0026gt; 了解 \u0026lt;a href=\u0026quot;{% url 'ooo' 123 %}\u0026quot;\u0026gt;111\u0026lt;/a\u0026gt; 记忆 # 后端 reverse('xxx',kwargs={'year'=123}) reverse('xxx',args=(111,)) "}),e.add({id:15,href:"/docs/python/django/%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93/",title:"连接数据库",description:"Help Doks.",content:`连接数据库 # pycharm连接数据库 # 三个位置查找数据库相关：
右侧上方database 左下角database 配置里面plugins插件搜索安装 再没有卸载重装pycharm
pycharm可以充当很多数据库的客户端
注意：连接前需提前创建好库 django连接数据库 # 默认配置：
DATABASES = { 'default': { 'ENGINE': 'django.db.backends.sqlite3', 'NAME': BASE_DIR / 'db.sqlite3', } } 第一步在配置文件中配置 DATABASES = { 'default': { 'ENGINE': 'django.db.backends.mysql', 'NAME': 'django', 'USER': 'root', 'PASSWORD': 'root', 'HOST': '127.0.0.1', 'PORT':3306, 'CHARSET':'utf8', } } 代码声明 django默认使用的是mysqldb模块连接MySQL
但是该模块的兼容性不好，需要手动替换为pymsql
在项目名下的init或应用中的init文件中书写以下代码都可以
import pymsql pymsql.install_as_MySQLdb() `}),e.add({id:16,href:"/docs/python/django/%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE/",title:"静态文件配置",description:"Help Doks.",content:`静态文件配置 # 我们将HTML文件默认放在templates文件夹下，将静态文件放到static文件夹下。
静态文件： # 前端已经写好了的，能够直接调用使用的文件
django默认不会创建static文件夹，需手动创建并进行进一步划分
static文件夹：
css js img 其他第三方文件 静态文件配置： # 缓存问题： # 当你在写django项目的时候，可能会出现后端代码修改了但前端页面没有变化的情况：
在同一个端口开了好几个django项目，一直在跑的其实是第一个项目 浏览器缓存问题：在检查窗口的设置中勾选上禁用缓存。（diable cache） 配置问题： # 在浏览器中输入url能够访问到对应的资源，是因为后端开设了该资源的接口
如果访问不到该资源，则说明后端没有开设该资源的接口 如何配置： # # settings.py STATIC_URL = '/static/' ''' 类似于访问静态文件的令牌，如果想访问静态文件，必须以static开头 ''' STATICFILES_DIR = [ os.path.join(BASE_DIR, 'static'), os.path.join(BASE_DIR, 'static1'), os.path.join(BASE_DIR, 'static2'), ] ''' 在列表从上往下寻找文件 ''' 动态解析静态文件： # HTML中的模板语法配置：
`}),e.add({id:17,href:"/docs/",title:"Docs",description:"Docs Doks.",content:""}),e.add({id:18,href:"/docs/tools/linux/",title:"linux",description:"Docs Doks.",content:""}),e.add({id:19,href:"/docs/tools/",title:"常用工具",description:"Docs Doks.",content:""}),e.add({id:20,href:"/docs/tools/linux/01.%E5%AE%89%E8%A3%85linux%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%A4%9A%E7%A7%8D%E6%96%B9%E5%BC%8F/",title:"安装linux系统的多种方式",description:`安装linux系统的多种方式 # 一、使用虚拟机 # 百度百科： 虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现。在计算机中创建虚拟机时，需要将实体机的部分硬盘和内存容量作为虚拟机的硬盘和内存容量。每个虚拟机都有独立的CMOS、硬盘和操作系统，可以像使用实体机一样对虚拟机进行操作。 电脑上的安卓模拟器，如雷电，夜神等也可以看做是虚拟机，貌似是基于virtualBox虚拟机软件开发。 桌面虚拟机领域的两个大佬：VMware，virtualBox。 linux发行版选择ubuntu desktop，简单易上手。 0.下载ubuntu镜像 # 官网地址:https://cn.ubuntu.com/desktop 点击“下载ubuntu” 点击下载，如果需要其他下载方式，比如通过迅雷种子下载，或者下载其他版本，点击“其他下载”。
开始下载后，请将下载的“吧啦吧啦.iso”文件放到一个能找到的位置，不建议放到桌面，毕竟该文件占用大小约为4G，建议在D盘或者F盘新建一个文件夹，用以存放iso文件和后续的虚拟机文件，iso文件和虚拟机文件大约会占用20G以上的空间。
这是我在d盘新建的vm文件夹，专门用来存放iso文件和虚拟机文件。 创建的专门存放iso文件的文件夹： 1.使用VMware虚拟机 # 首先你需要下载VMware软件，建议下载pro版本，安装后只需要百度激活码即可激活，永久使用。 官网：https://www.vmware.com/cn/products/workstation-pro.html vmware安装只需要点下一步即可，实在不行可以百度vmware安装教程。 安装好之后的界面： 然后点击创建新的虚拟机 选择自定义（高级） 默认即可，点击下一步 注意，这里选择第三项，稍后安装操作系统 这里选择linux，ubuntu 64位 虚拟机名称命名为ubuntu，位置放在了d盘，毕竟这玩意还挺占内存的 处理器配置就是你要给虚拟机的核心数量，2,2一般就够用，不够了后期可以再加 给虚拟机的内存大小，一般4g够用，豪横一点，直接8g 网络类型，默认第二项，使用网络地址转换，相当于大机套小机，虚拟机的所有流量都要通过物理机来传输，第一种桥接模式相当于虚拟机和物理机是独立的两台电脑，在校园网只允许一台设备联网的环境下可能不太方便 默认选择第二项，不做更改 默认即可，不做更改 继续默认即可，不做修改 这里给的是80g，只要是不点立即分配所有空间，那么虚拟机就是用多少就占多少磁盘空间，这个80g的意思是虚拟机的硬盘最大容量 接着点下一步，关于这几个选项的区别，貌似不怎么影响使用 这个是让你确认虚拟机的配置，点击左下角的自定义硬件 选择左侧cd，然后右边选择使用iso映像文件，然后点击浏览，选择刚才下的ubuntu的iso文件 点击关闭，然后点击完成 点击开启此虚拟机 鼠标点进去可以操控虚拟机，然后可以通过ctrl+alt组合键退出操控虚拟机模式，这里我们选择第一个选项“try or install ubuntu”就行 刚打开发现是英文，左侧语言栏拉倒最下面有简体中文的选项,然后点击安装ubuntu 选择键盘布局，这一步默认即可，然后点击继续 选最小安装，然后不勾选安装的时候下载更新，（这时候下载会非常慢，等安装完之后更换下载服务器，再进行更新），点击继续 点击现在安装即可，这一步清除的是虚拟机的磁盘，就是上面设置的80g的那个，不是自己电脑的硬盘，不用害怕 出现这个弹窗点击继续即可 时区选择上海，然后点击继续即可 进行一些基本设置，这一步看自己喜好来就行，密码不要忘了就行，然后点击继续 然后经过漫长的等待，就安装完成了 2.使用virtualBox虚拟机 # 二、使用Windows的linux子系统 # 三、使用docker # 四、使用云服务器 # 五、物理机安装双系统 # `,content:`安装linux系统的多种方式 # 一、使用虚拟机 # 百度百科： 虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现。在计算机中创建虚拟机时，需要将实体机的部分硬盘和内存容量作为虚拟机的硬盘和内存容量。每个虚拟机都有独立的CMOS、硬盘和操作系统，可以像使用实体机一样对虚拟机进行操作。 电脑上的安卓模拟器，如雷电，夜神等也可以看做是虚拟机，貌似是基于virtualBox虚拟机软件开发。 桌面虚拟机领域的两个大佬：VMware，virtualBox。 linux发行版选择ubuntu desktop，简单易上手。 0.下载ubuntu镜像 # 官网地址:https://cn.ubuntu.com/desktop 点击“下载ubuntu” 点击下载，如果需要其他下载方式，比如通过迅雷种子下载，或者下载其他版本，点击“其他下载”。
开始下载后，请将下载的“吧啦吧啦.iso”文件放到一个能找到的位置，不建议放到桌面，毕竟该文件占用大小约为4G，建议在D盘或者F盘新建一个文件夹，用以存放iso文件和后续的虚拟机文件，iso文件和虚拟机文件大约会占用20G以上的空间。
这是我在d盘新建的vm文件夹，专门用来存放iso文件和虚拟机文件。 创建的专门存放iso文件的文件夹： 1.使用VMware虚拟机 # 首先你需要下载VMware软件，建议下载pro版本，安装后只需要百度激活码即可激活，永久使用。 官网：https://www.vmware.com/cn/products/workstation-pro.html vmware安装只需要点下一步即可，实在不行可以百度vmware安装教程。 安装好之后的界面： 然后点击创建新的虚拟机 选择自定义（高级） 默认即可，点击下一步 注意，这里选择第三项，稍后安装操作系统 这里选择linux，ubuntu 64位 虚拟机名称命名为ubuntu，位置放在了d盘，毕竟这玩意还挺占内存的 处理器配置就是你要给虚拟机的核心数量，2,2一般就够用，不够了后期可以再加 给虚拟机的内存大小，一般4g够用，豪横一点，直接8g 网络类型，默认第二项，使用网络地址转换，相当于大机套小机，虚拟机的所有流量都要通过物理机来传输，第一种桥接模式相当于虚拟机和物理机是独立的两台电脑，在校园网只允许一台设备联网的环境下可能不太方便 默认选择第二项，不做更改 默认即可，不做更改 继续默认即可，不做修改 这里给的是80g，只要是不点立即分配所有空间，那么虚拟机就是用多少就占多少磁盘空间，这个80g的意思是虚拟机的硬盘最大容量 接着点下一步，关于这几个选项的区别，貌似不怎么影响使用 这个是让你确认虚拟机的配置，点击左下角的自定义硬件 选择左侧cd，然后右边选择使用iso映像文件，然后点击浏览，选择刚才下的ubuntu的iso文件 点击关闭，然后点击完成 点击开启此虚拟机 鼠标点进去可以操控虚拟机，然后可以通过ctrl+alt组合键退出操控虚拟机模式，这里我们选择第一个选项“try or install ubuntu”就行 刚打开发现是英文，左侧语言栏拉倒最下面有简体中文的选项,然后点击安装ubuntu 选择键盘布局，这一步默认即可，然后点击继续 选最小安装，然后不勾选安装的时候下载更新，（这时候下载会非常慢，等安装完之后更换下载服务器，再进行更新），点击继续 点击现在安装即可，这一步清除的是虚拟机的磁盘，就是上面设置的80g的那个，不是自己电脑的硬盘，不用害怕 出现这个弹窗点击继续即可 时区选择上海，然后点击继续即可 进行一些基本设置，这一步看自己喜好来就行，密码不要忘了就行，然后点击继续 然后经过漫长的等待，就安装完成了 2.使用virtualBox虚拟机 # 二、使用Windows的linux子系统 # 三、使用docker # 四、使用云服务器 # 五、物理机安装双系统 # `}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()