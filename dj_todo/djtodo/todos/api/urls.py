from .views import TodoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodoViewSet, basename='api')
urlpatterns = router.urls


# from django.urls import path
# from .views import (
#     TodoListView, 
#     TodoDetailView, 
#     TodoCreateView, 
#     TodoDestroyView
# )

# urlpatterns = [
#     path('', TodoListView.as_view()),
#     path('<pk>/', TodoDetailView.as_view()),
#     path('create/', TodoCreateView.as_view()),
#     path('<pk>/destroy/', TodoDestroyView.as_view()),
# ]