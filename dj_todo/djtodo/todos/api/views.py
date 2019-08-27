from rest_framework import viewsets
from todos.models import Todo
from .serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView
# )

# class TodoListView(ListAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer


# class TodoDetailView(RetrieveAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer


# class TodoCreateView(CreateAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer


# class TodoDestroyView(DestroyAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer