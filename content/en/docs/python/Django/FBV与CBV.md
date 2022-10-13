---
title: "FBV与CBV"
description: "Help Doks."
lead: ""
date: 2020-10-06T08:49:15+00:00
lastmod: 2020-10-06T08:49:15+00:00
draft: false
images: []
weight: 600
---


# FBV与CBV
视图函数可以是函数也可以是类

## FBV
```python
def index(request):
    return HttpResponse('index')
```
<a name="qEQfa"></a>
## CBV
```python
# CBV实现
from django.views import View
class MyLogin(View):
    def get(self,request):
        return render(request,'form.html')

    def post(self,request):
        return HttpResponse('POST方法')


# CBV路由
url(r'^login/',views.MyLogin.as_view())
```
FBV和CBV各有千秋
<a name="HspT5"></a>
### CBV特点：
能够直接根据请求方式的不同直接匹配到对应的方法执行
